import { createContext, ReactNode, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario:string;
    logout: () => void;
}

interface IUsuarioLogadoProviderProps {
    children: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData >({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider = ({ children }: IUsuarioLogadoProviderProps) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(()=>{
            setNome('Victor');
        },1000);
    });

    const handleLogout = useCallback(() => {
        console.log('Logout executou')
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}
