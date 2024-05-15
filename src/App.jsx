import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
function App() {
  return (
   <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
      </Routes>
   </>
  )
}

export default App
