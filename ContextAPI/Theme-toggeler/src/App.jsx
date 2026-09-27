import Login from "./components/Login"
import Profile from "./components/Profile.jsx"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <h1>Context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}
export default App