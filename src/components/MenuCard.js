import { useEffect,useState } from "react";
import menuApi from "../utils/menuApi";
import { useParams } from "react-router-dom";
import Sui from "./Sui";

const MenuCard = ()=>{

    const[resMenu,setResMenu] = useState(null)

    //useParams gets the id from the existing url, it stores that in key value pair
    //where key is the part of path that you give in path in createBrowserRouter, here I gave it as resID
    //so I get an object resID that is also the key to a value (here it is restaurant's ID)
    const {resID} = useParams()
  
    //we use useEffect hook to make an api call to fetch menu of particular restaurant
    // var resID = 17122
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(menuApi+resID);
        const menu = await data.json();
        console.log("If everthing went well....\n");
        console.log(menu)
        setResMenu(menu)
        
        
        // console.log(menu?.data?.cards[0]?.card?.card?.info.name)
        console.log(menu?.data?.cards[0]?.card?.card?.info.cuisines.map((e)=>{
            console.log(e)
        }));
    }

    if(resMenu === null){
        return <Sui/>
    }
    else{
        var destructuredData_basic = resMenu?.data?.cards[0]?.card?.card?.info;
        var itemCards = resMenu?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        return(
            <div className="pages-div">
                <h1>
                    {destructuredData_basic.name}
                </h1>

                <h3>
                    Menu
                </h3>
                <ul>
                    {itemCards.map((cuisines)=>{
                        return <li>{cuisines?.card?.info?.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default MenuCard;