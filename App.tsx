import { Provider } from 'react-redux';

import { Navigation } from './components/navigation/navigation';

import store from './store/configureStore';

const App = () => (
  <>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </>
);

export default App;
