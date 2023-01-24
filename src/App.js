import {Routes,Route,useNavigate  } from 'react-router-dom';
import About from './Container/About'
import Profile from './Container/Profile'
import {useState} from 'react'
import {Appcontext } from "./AppContext";
function App() {
  const [State,SetState] = useState(40)
  const navigate = useNavigate();

  return (
    <div>
      
<Appcontext.Provider value={{data:State}}>


        <button onClick={()=>navigate('/about')}>About Me</button>
        <button onClick={()=>{
          navigate('/profile')}}>Profile</button>
      <Routes>
          <Route  element={<About />} path='/about'/>
          <Route element={<Profile data={State}/>} path='/profile'/>
      </Routes>
    
</Appcontext.Provider>
      
    </div> 
  );
}

export default App;
