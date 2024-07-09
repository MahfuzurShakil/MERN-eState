import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Sign_In" element={<Signin/>}/>
      <Route path="/Sign_Up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/profile" element={<Profile/>}/> 
     

     

    </Routes>
    </BrowserRouter>
  )
}
