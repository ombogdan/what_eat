import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from "shared/theme";
import {RootNavigator} from "shared/navigation";
import ErrorBoundary from 'react-native-error-boundary';

const App = () => (
    <ErrorBoundary>
      <ThemeProvider>
        <SafeAreaView style={{flex: 1}}>
          <RootNavigator/>
        </SafeAreaView>
      </ThemeProvider>
    </ErrorBoundary>
  );

export default App;
