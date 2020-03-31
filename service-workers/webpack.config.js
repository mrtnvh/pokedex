const path = require('path')

const webBuildTargetFolder = path.join(process.cwd(), 'static', 'sw')
const targetServiceWorkerFilename = 'custom.js'

module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: {
    index: path.join(process.cwd(), 'service-workers', 'index.ts')
  },
  resolve: { extensions: ['.js', '.ts'] },
  output: {
    path: webBuildTargetFolder,
    filename: targetServiceWorkerFilename
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          onlyCompileBundledFiles: true,
          configFile: path.resolve(__dirname, 'tsconfig.json')
        }
      }
    ]
  },
  plugins: []
}
