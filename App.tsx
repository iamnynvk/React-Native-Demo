import React, {useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import Routes from './src/routes';
import {StatusBar} from 'react-native';
import {COLORS} from './src/constants';
import {requestMultiplePermissions} from './src/utils/AskPermission';

const App = () => {
  useEffect(() => {
    requestMultiplePermissions();
  }, []);

  return (
    <PaperProvider>
      <StatusBar backgroundColor={COLORS.primary} />
      <Routes />
    </PaperProvider>
  );
};

export default App;
