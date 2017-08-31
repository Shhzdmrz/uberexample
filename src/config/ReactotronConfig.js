import Reactotron from 'reactotron-react-native'

Reactotron
  .configure({ host: '192.168.0.123:19000' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect