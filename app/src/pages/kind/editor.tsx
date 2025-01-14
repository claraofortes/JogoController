import React from "react"
import { Outlet } from "react-router-dom"

export const KindEditor: React.FC = () => {
    return (
        <div>
            <p>Kind Editor</p>
            <Outlet />
        </div>
    );
}