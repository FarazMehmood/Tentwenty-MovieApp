import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import BottomTab from './src/navigation/BottomTab';

const queryClient = new QueryClient();

const App = () => {
  return <BottomTab />;
};

export default App;
