import React,{useState} from 'react'


const Context = React.createContext({})

function ShopContext ({children}) {
    
    const [trolley,setTrolley] = useState([]);


  return <Context.Provider value={{trolley,setTrolley}}>{children}</Context.Provider>
}

export default Context
