import { createContext, useState } from "react";
const myContext = createContext();
export default myContext;

export function CustomeContext({children}){
    const[data,setData] =useState({});
    const validData=(data)=>{
        setData(data);
    }
    return <myContext.Provider value={{data,validData}}>
        {children}
    </myContext.Provider>
}