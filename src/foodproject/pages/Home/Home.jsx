
import {useState} from "react"
import { ExploreMenu } from "../../ExploreMenu/ExploreMenu";
import { Header } from "../../Header/Header";

export function Home(){
    const [category,setCategory]=useState("All")

    return(
        <div className="container-fluid">
           <ExploreMenu />
        </div>
    )
}