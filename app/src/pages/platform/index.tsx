import React from "react"
import { Outlet } from "react-router-dom"

const api = (window as any).api;

export const Platform: React.FC = () => {
    
    //const [plataformas, setPlataformas] = useState([]);

    //const mostraNotas= () => {
    //console.log(getAllPlatform());
    //    setPlataformas(plataforms);
    //}
    console.log(api.getAllPlatform())


    return (
        <div>
            <p>Platform</p>
        </div>
    );
}