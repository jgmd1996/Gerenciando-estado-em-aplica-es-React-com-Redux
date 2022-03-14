import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ListaNovosUsuarios from './pages/ListaNovosUsuarios'
import App from './App'
import ApiGitHub from './pages/ApiGitHub'
import RegisterUser from './pages/RegisterUser'

const Rotas =() => {
  return (
    <div className='routes'>
      <BrowserRouter>
      <table>
      <th><Link to="/">Home</Link><br/></th>
      <th><Link to="/registrarNovoUser">Registrar novo usuario</Link><br/></th>
      <th><Link to="/ListaNovosUsuarios">Lista de novos usuarios criados</Link></th>
      <th><Link to="/usuariosgitHUB">Usuarios da API do GitHub</Link></th>
      </table>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registrarNovoUser" element={<RegisterUser />} />
        <Route path="/ListaNovosUsuarios" element={<ListaNovosUsuarios />} />
        <Route path="/usuariosgitHUB" element={<ApiGitHub />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rotas;