import { useState } from "react"
import "./ExploreMenu.css"
export function ExportMenuProps(props){
    
        function handleClick(){
            props.onClick(props.title)

        }
    return(
       

        <div className="body">
           <div onClick={handleClick} className="food-menu">
            <img className={props.selectedCategory===props.title? "active":""}  src={props.Image} width="150"height="150" alt={props.alt} />
            <p>{props.title}</p>
            
            </div> 
            

        </div>
    )
}