import { createContext, useContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props){

    const Arrayproduct = [
        {
            categoria: "Gallina",
            producto: "Huevos",
            precio: 600
        },
        {
            categoria: "Gallina",
            producto: "Pollo",
            precio: 15000
        },
        {
            categoria: "Gallina",
            producto: "Gallina",
            precio: 20000
        },
    ]



    const [ contextValue, setContextValue ] = useState(Arrayproduct);
    const contextObject = {contextValue, setContextValue};

    return(
        <Context.Provider value={contextObject}>
            {props.children}
        </Context.Provider>
    )
}

export function useContextProvider(){
    
    const context = useContext(Context);
    if(!context){
        throw new Error('useContextProvider debe ser usado dentro del provider'); 
    }
    return context;
}