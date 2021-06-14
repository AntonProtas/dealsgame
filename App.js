//libs
import React from 'react';
import * as eva from '@eva-design/eva';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

//screens
// import { HabitsScreen, SignUpScreen } from '@screens';

//components
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

//store
import store, { persistor } from '@store';

import RootNavigator from '@navigation/RootNavigator';

import {
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  Layout
} from '@ui-kitten/components';

const TopNavigationStyling = () => (
  <TopNavigation
    title={(evaProps) => <Text {...evaProps}>Title</Text>}
    subtitle={(evaProps) => <Text {...evaProps}>Subtitle</Text>}
  />
);

export default () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <TopNavigationStyling />
          <RootNavigator />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  </>
);
