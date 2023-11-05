import  Heading  from "./Heading";
import  Cards  from "./Cards";
import swiggyData from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

//whenever a state variable for a component changes, react, re-renders the component

export const Body = ()=>{

   
    var[restaurants_filter,setList] = useState([]);
      //get value from API
     //useEffect is executed after the component is rendered
     useEffect(()=>{
        console.log("UseEffect called after component has rendered")
        fetchData();
     },[])

     //We'd like to use the actual swiggy api rather than hardcoded data, we do so by following
     //I integrated my own API of swiggys data
      var swiggyApi = "https://gregarious-babka-a10115.netlify.app//.netlify/functions/api/restaurants"
        const fetchData = async ()=>{
            const apiData = await fetch(swiggyApi) //since fetch is asynchronous, you can either use 'await' or 'then' to handle it
            const json = await apiData.json();
            console.log(json);
            // setList(json?.data.cards[4].card.card.info);
            setList(json); //The optional chaining (?.) operator accesses an object's property or calls a function.
            // If the object accessed or function called using this operator is undefined or null, 
            //the expression short circuits and evaluates to undefined instead of throwing an error.
        }

    return(
        <div className="mainbody">
            <Heading style={{display:"block"}}/>

            {/* avgRating>4 filter */}
            
            <button onClick={()=>{
                console.log(restaurants_filter);
                setList(
                    restaurants_filter.filter((res)=>res.info.avgRating>4)
                )
            }}><h1>Top rated restaurants</h1></button>

            {/* Clear filter */}
             <button onClick={()=>{
                setList(
                    restaurants_filter = swiggyData
                )
            }}><h1>Clear Filter</h1></button>

            <div className="all-cards-container">
            
                {restaurants_filter.map(
                    (e)=> {
                        console.log(e.info.id)
                        return <Cards key= {e.id} cardData={e.info}/>
                    }
                )}
            </div>
        </div>
     
    )
}

export default Body;