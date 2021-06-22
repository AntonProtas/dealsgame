//libs
import React from 'react';
import * as eva from '@eva-design/eva';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

//components
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Header } from '@components';
import RootNavigator from '@navigation/RootNavigator';

//store
import store, { persistor } from '@store';

export default () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <Header />
          <RootNavigator />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  </>
);
