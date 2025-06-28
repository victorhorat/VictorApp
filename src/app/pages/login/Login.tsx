import { useNavigate } from "react-router-dom";

export const Login= () =>{
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/dashboard'); // Invoca a função navigate
    };

    return(
        <div>
            <p>Login</p>

            <button onClick={handleClick}>Página de dashboards</button>
        </div>
    );
}