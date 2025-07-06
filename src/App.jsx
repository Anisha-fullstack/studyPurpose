import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './list'
import AddItem from './addItem'
import { BrowserRouter as Router ,Route,Routes, useNavigate,useLocation} from 'react-router-dom'
import HeaderD from './headerD'
import TableContent from './tableContent'
function App() {
    const navigate = useNavigate(); // ✅ useNavigate instead of history.push
      const location = useLocation(); // ✅ get current route

const [showButton,setShowButton]=useState(true);

 useEffect(() => {
    if (location.pathname === '/') {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location]);
  const [items,setItems]=useState([{id:1,name:"first checkbox",checked:false},
    
    {id:7,name:"second checkbox",checked:false},
    {id:2,name:"third checkbox",checked:false},
    {id:3,name:"fourth checkbox",checked:false},
    {id:4,name:"fifth checkbox",checked:false},
    {id:5,name:"sixth checkbox",checked:false},
    {id:6,name:"seventh checkbox",checked:false}
  ])
const show=()=>{
  setShowButton(false)
  navigate("/list")
}
  return (
    <>
    <HeaderD/>
    {showButton && (<button onClick={show}>Show Items</button>)}
    <Routes> 
        <Route path="/list" element={<List items={items} setItems={setItems}/>}></Route>
    </Routes>
    
   </>
  )
}

export default App
