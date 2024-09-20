import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage.jsx';
import HomePage from './pages/HomePage.jsx';
import Navbar from './components/Navbar.jsx';


function App() {
  return (
    <Box bg='black' w='100%' p={4} color='white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
