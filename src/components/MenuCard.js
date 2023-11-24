import { useEffect,useState } from "react";
import menuApi from "../utils/menuApi";

const MenuCard = ()=>{

    //we use useEffect hook to make an api call to fetch menu of particular restaurant

    useEffect(()=>{
        fetchMenu();
    })

    const fetchMenu = async ()=>{
        const data = await fetch(menuApi);
        const menu = await data.json();
        console.log("If everthing went well....\n")
        console.log(menu);
    }
    return(
        <div className="pages-div">
            <h1>
                Restaurant
            </h1>

            <h2>
                MenuCard
            </h2>
            <ul>
                <li>Biryani</li>
                <li>Coffee</li>
                <li>Desserts</li>
            </ul>
        </div>
    )
}

export default MenuCard;