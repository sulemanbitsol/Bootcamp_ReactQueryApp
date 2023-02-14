import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';

import './App.css';
import { AddUser, LandingPage } from './pages';
import { Header } from './components';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
       <Header />
       <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/add-user' element={<AddUser />} />
       </Routes>
     </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
