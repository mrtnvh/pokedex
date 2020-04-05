import { IncomingMessage, ServerResponse } from 'http'
import multiparty from 'multiparty'
import predict from './predict'

export default function(
  req: IncomingMessage,
  res: ServerResponse
  // next: NextFunction
) {
  if (req.method !== 'POST') {
    res.statusCode = 501
    res.end()
  }

  // parse a file upload
  const form = new multiparty.Form()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  form.parse(req, async (err, fields, files) => {
    if (err || !files) {
      res.statusCode = 400
      res.end(err)
    }

    const prediction = await predict(files.image[0].path)
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end(prediction)
  })
}
