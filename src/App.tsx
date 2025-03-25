import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { JSX } from 'react'
import AuthService from './services/authService'
import './App.css'

import ListagenVagas from './pages/ListagenVagas/ListagenVagas'
import CadastroVagas from './pages/CadastroVagas/CadastroVagas'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import VisualizarVaga from './pages/VisualizarVaga/VisualizarVaga'
import NavBarComponente from './components/NavBarComponente/NavBarComponente'

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return AuthService.isAuthenticated() ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <NavBarComponente />

      <main>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<PrivateRoute element={<ListagenVagas/>}/>}/>
          <Route path="/cadastro-vagas" element={<PrivateRoute element={<CadastroVagas />}/>}/>
          <Route path="/visualizar-vaga" element={<PrivateRoute element={<VisualizarVaga />}/>}/>
          <Route path="*" element={<PrivateRoute element={<NotFound />}/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
