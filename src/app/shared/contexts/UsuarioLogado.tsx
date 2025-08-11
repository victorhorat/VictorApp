import { createContext, ReactNode } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario:string;
}

interface IUsuarioLogadoProviderProps {
    children: ReactNode;
}

const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData >({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider = ({ children }: IUsuarioLogadoProviderProps) => {

    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Victor'}}>
            {children}
            
        </UsuarioLogadoContext.Provider>
    )
}
