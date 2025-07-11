import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import Navbar from './components/navbar' 
import Maingraph from './components/maingraph';   
import Positions from './components/positions';        

const queryClient = new QueryClient();

<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</React.StrictMode>

function App() {

  return (
    <div className='app'>
      < Navbar />
      <div className='top'>
        < Maingraph />
        < Positions />
      </div>
    </div>
  )
}

export default App
