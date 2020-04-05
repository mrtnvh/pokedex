import path from 'path'
import * as tf from '@tensorflow/tfjs'
import labels from './model/labels.json'
import image from './image'

const buildPretrainedModel = async () => {
  const mobilenet = await tf.loadLayersModel(
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'
  )

  const layer = mobilenet.getLayer('conv_pw_13_relu')
  return tf.model({
    inputs: mobilenet.inputs,
    outputs: layer.output
  })
}

const makePrediction = (pretrainedModel, model, imagePath) =>
  image
    .loadSingle(imagePath)
    .then((loadedImage) => {
      const croppedImage = image.crop(loadedImage)
      const resizedImage = image.resize(croppedImage)
      return image.batch(resizedImage)
    })
    .then((loadedImage) => {
      const activatedImage = pretrainedModel.predict(loadedImage)
      loadedImage.dispose()
      return activatedImage
    })
    .then((activatedImage) => {
      const prediction = model.predict(activatedImage)
      const labelIndex = prediction
        .as1D()
        .argMax()
        .dataSync()[0]

      prediction.dispose()
      activatedImage.dispose()

      return labels[labelIndex]
    })

export default async (imagePath) => {
  const modelPath = path.join(
    process.cwd(),
    'serverMiddleware/image-recognition/model',
    'model.json'
  )
  const model = await tf.loadLayersModel(`file://${modelPath}`)
  const pretrainedModel = await buildPretrainedModel()
  return makePrediction(pretrainedModel, model, imagePath)
}
