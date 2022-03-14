import ApiGitHub from "./pages/ApiGitHub"
import ListaNovosUsuarios from "./pages/ListaNovosUsuarios"
import RegisterUser from "./pages/RegisterUser"
const App = () => {
  return (
    <>
        <RegisterUser></RegisterUser>
        <ListaNovosUsuarios></ListaNovosUsuarios>
        <ApiGitHub></ApiGitHub>
      
    </>
  )

}

export default App