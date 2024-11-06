import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store';
import ThemeProvider from '../theme/ThemeProvider';
import { Page } from '../components/layout/page';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <Page hasSidebar={false}>
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
        />
      </Page>
    </ThemeProvider>
  </ReduxProvider>
);

export default MyApp;
