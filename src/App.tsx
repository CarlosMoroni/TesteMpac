import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { JSX, useEffect } from 'react';
import AuthService from './services/authService';
import './App.css';

import ListagenVagas from './pages/ListagenVagas/ListagenVagas';
import CadastroVagas from './pages/CadastroVagas/CadastroVagas';
import LoginPage from './pages/LoginPage/LoginPage';
import VisualizarVaga from './pages/VisualizarVaga/VisualizarVaga';
import NavBarComponente from './components/NavBarComponente/NavBarComponente';
import { LoaderProvider, useLoader } from './context/LoaderContext';
import LoaderComponente from './components/LoaderComponente/LoaderComponente';
import { loaderInterceptor } from './interceptors/loaderInterceptor';
import api from './services/api';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return AuthService.isAuthenticated() ? element : <Navigate to="/login" replace />;
};

function AppContent() {
  const { setLoading } = useLoader(); 

  useEffect(() => {
    loaderInterceptor(api, setLoading); 
  }, [setLoading]);

  return (
    <Router>
      <NavBarComponente />
      <LoaderComponente />

      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute element={<ListagenVagas />} />} />
          <Route path="/cadastro-vagas/:id?" element={<PrivateRoute element={<CadastroVagas />} />} />
          <Route path="/visualizar-vaga/:id" element={<PrivateRoute element={<VisualizarVaga />} />} />
          <Route path="*" element={<PrivateRoute element={<ListagenVagas />} />} />
        </Routes>
      </main>
    </Router>
  );
}

function App() {
  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  )
}

export default App
