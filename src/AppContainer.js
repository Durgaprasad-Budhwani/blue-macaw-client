// @flow
import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from './store/configureStore';
import history from './utils/history';
import App from './containers/App';
import BlueMacawTheme from './theme/Theme';

const { store, persistor } = configureStore(history);

const theme = createMuiTheme(BlueMacawTheme);


export default function AppContainer() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <App />
                    </MuiThemeProvider>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
}
