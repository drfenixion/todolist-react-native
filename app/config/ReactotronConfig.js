import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .connect() // let's connect!
