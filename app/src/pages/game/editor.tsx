import React from "react"
import { Outlet } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from "@fortawesome/free-solid-svg-icons";

export const GameEditor: React.FC = () => {
    const deselectStars = (id: string) =>{
        const stars = document.getElementById(id)!.getElementsByTagName('svg');
        stars![0].style.color = "#000000"
            stars![1].style.color = "#000000"
            stars![2].style.color = "#000000"
            stars![3].style.color = "#000000"
            stars![4].style.color = "#000000"
    }

    const selectStar = (id: string) =>{
        const star = document.getElementById(id);
        const stars = star!.parentElement?.getElementsByTagName('svg')
        if(id.indexOf('star1') !== -1){
            stars![0].style.color = "#1dd882"
            stars![1].style.color = "#000000"
            stars![2].style.color = "#000000"
            stars![3].style.color = "#000000"
            stars![4].style.color = "#000000"
        } else if(id.indexOf('star2') !== -1){
            stars![0].style.color = "#1dd882"
            stars![1].style.color = "#1dd882"
            stars![2].style.color = "#000000"
            stars![3].style.color = "#000000"
            stars![4].style.color = "#000000"
        } else if(id.indexOf('star3') !== -1){
            stars![0].style.color = "#1dd882"
            stars![1].style.color = "#1dd882"
            stars![2].style.color = "#1dd882"
            stars![3].style.color = "#000000"
            stars![4].style.color = "#000000"
        } else if(id.indexOf('star4') !== -1){
            stars![0].style.color = "#1dd882"
            stars![1].style.color = "#1dd882"
            stars![2].style.color = "#1dd882"
            stars![3].style.color = "#1dd882"
            stars![4].style.color = "#000000"
        } else{
            stars![0].style.color = "#1dd882"
            stars![1].style.color = "#1dd882"
            stars![2].style.color = "#1dd882"
            stars![3].style.color = "#1dd882"
            stars![4].style.color = "#1dd882"
        }
        
    }
    return (
        <div>
            <p>Jogo</p>
            <div className="jogo-div">
                <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"></img>
                <div className="div-stars" id="div-stars-1" onMouseLeave={(e)=>deselectStars(e.currentTarget.id)}>
                    <FontAwesomeIcon className="stars-item" id="star1-1" onMouseOver={(e)=>selectStar(e.currentTarget.id)} icon={faStar}/>
                    <FontAwesomeIcon className="stars-item" id="star2-1" onMouseOver={(e)=>selectStar(e.currentTarget.id)} icon={faStar}/>
                    <FontAwesomeIcon className="stars-item" id="star3-1" onMouseOver={(e)=>selectStar(e.currentTarget.id)} icon={faStar}/>
                    <FontAwesomeIcon className="stars-item" id="star4-1" onMouseOver={(e)=>selectStar(e.currentTarget.id)} icon={faStar}/>
                    <FontAwesomeIcon className="stars-item" id="star5-1" onMouseOver={(e)=>selectStar(e.currentTarget.id)} icon={faStar}/>
                </div>
            </div>
        </div>
    );
}