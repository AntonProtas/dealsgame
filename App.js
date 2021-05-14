/**
@format
**/
//libs
import React from 'react';
import * as eva from '@eva-design/eva';

//screens
// import { SignUpScreen } from '@screens/SignUpScreen';
import { HabitsScreen, SignUpScreen } from '@screens';

//components
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

//
import { Provider } from 'react-redux';

//store
import store from '@store';

export default () => (
  <>
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <HabitsScreen />
      </ApplicationProvider>
    </Provider>
  </>
);
