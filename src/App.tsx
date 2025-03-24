import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import ListagenVagas from './pages/ListagenVagas/ListagenVagas'
import CadastroVagas from './pages/CadastroVagas/CadastroVagas'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import VisualizarVaga from './pages/VisualizarVaga/VisualizarVaga'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListagenVagas/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro-vagas" element={<CadastroVagas />}/>
        <Route path="/visualizar-vaga" element={<VisualizarVaga />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
