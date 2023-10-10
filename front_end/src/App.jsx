import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminDashboard from "./components/AdminPages/AdminDashboard";
import Parameters from "./components/AdminPages/Parameters";
import Roles from "./components/AdminPages/Roles";
import Usuarios from "./components/AdminPages/Usuarios";
import Bitacoras from "./components/AdminPages/Bitacoras";
import Enlaces from "./components/AdminPages/Enlaces";
import Profile from "./components/AdminPages/Profile";
import UserDashboard from "./components/UserPages/UserDashboard";
import UsuarioProfile from "./components/UserPages/Profile";
import Historial from "./components/UserPages/Record";
import Colleagues from "./components/UserPages/Colleagues";
import UserEnlaces from "./components/UserPages/UserEnlaces";
import LoadPage from "./components/LoadPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/load" element={<LoadPage />} />

        {/* Rotas para Administradores */}
        <Route element={<ProtectedRoute rol={2} />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/admin/Parameters" element={<Parameters />} />
          <Route path="/admin/roles" element={<Roles />} />
          <Route path="/admin/usuarios" element={<Usuarios />} />
          <Route path="/admin/bitacoras" element={<Bitacoras />} />
          <Route path="/admin/enlaces" element={<Enlaces />} />
          <Route path="/admin/Profile" element={<Profile />} />
        </Route>

        {/* Páginas do Usuário */}
        <Route element={<ProtectedRoute rol={1} />}>
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/usuario/Profile" element={<UsuarioProfile />} />
          <Route path="/usuario/historial" element={<Historial />} />
          <Route path="/usuario/Colleagues" element={<Colleagues />} />
          <Route path="/usuario/enlaces" element={<UserEnlaces />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
