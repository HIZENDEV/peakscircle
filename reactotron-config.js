import Reactotron, { networking, trackGlobalErrors } from 'reactotron-react-native'

Reactotron
  .configure()
  .use(networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    }), trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0
    })
  )
  .connect()
  .connect();
