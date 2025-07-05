import { createContext, useContext } from "react";

export const Context = createContext();

export function ContextProvider(props){

    const [ contextValue, setContextValue ] = useContext([]);
    const contextObject = {contextValue, setContextValue};

    return(
        <imgContext value={contextObject}>
            {props.children}
        </imgContext>
    )
}

export function useContextProvider(){
    
    const context = useContext(Context);
    if(!context){
        throw new Error('useContextProvider debe ser usado dentro del provider'); 
    }
    return context;
}