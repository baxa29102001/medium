import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import store from '../stores/index';
import { Provider } from 'react-redux';
import Redirect from '../components/Form/Redirect';

function MyApp({ Component, pageProps, routes }) {
  return (
    <Provider store={store}>
      <Redirect routes={routes}>
        <Component {...pageProps} />
      </Redirect>
    </Provider>
  );
}

export default MyApp;
