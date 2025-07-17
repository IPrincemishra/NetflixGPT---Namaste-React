import { Provider } from 'react-redux';
import Body from './components/Body'
import "@fontsource/poppins"; // default weight 400
import appStore from './utils/appStore';

function App() {

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}

export default App
