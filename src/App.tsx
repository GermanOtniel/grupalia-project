import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home.Page';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path='/'
          Component={HomePage}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
