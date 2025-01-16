import React from "react"

const api = (window as any).api;

export const Platform: React.FC = () => {
    
    console.log(api.getAllPlatform())


    return (
        <div>
            <p>Platform</p>
        </div>
    );
}