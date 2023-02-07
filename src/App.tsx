import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'shared/theme';
import { RootNavigator } from 'shared/navigation';
import ErrorBoundary from 'react-native-error-boundary';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <ErrorBoundary>
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <RootNavigator />
        </SafeAreaView>
      </ThemeProvider>
    </ErrorBoundary>
  </GestureHandlerRootView>
);

export default App;
