import React from "react"
import { TodoForm } from "../components/forms/TodoForm";

export const Work: React.FC = () => {
    const electron = (window as any).electron;
    return (
        <div>
            This is work page content <br/>
            The home director is @{electron.homeDir()} <br/>
            The OS arch is {electron.arch()} <br/>
            The Os version is {electron.osVersion()}

            <TodoForm/>
        </div>
    );
}