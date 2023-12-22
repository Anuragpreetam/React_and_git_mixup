import React,{lazy,Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import  Body  from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet, Link} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Heading from "./components/Heading";
import Error from "./components/Error";
import MenuCard from "./components/MenuCard";
import Sui from "./components/Sui";

const root = document.getElementById('root')

//this won't work
/*
const Instamart = lazy(()=>{
    import("./components/Instamart")
})
*/

//this works, dont know why😅
const Instamart = lazy(()=>import("./components/Instamart"))
const AppLayout = ()=>{
    return(
        <div>
            <Heading/>
            <Outlet/>
            
        </div>
    )
}
const appRoute = createBrowserRouter([
        
       
        {
            path:"/",
            element:<AppLayout/>,
            errorElement:<Error/>,
            children:[                  //careful here 'c' should'nt be capital
                {
                    path:"/",
                    element:<Body/>,
                },
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/cart",
                    element:<Cart/>,
                },
                {
                    //lazy-loaded
                    path:"/instamart",
                    element:(
                        <Suspense fallback={<Sui></Sui>}><Instamart/></Suspense>
                    ),
                },
                {
                    path : "/restaurants/:resID",
                    element:<MenuCard/>,
                }
            ]
        }
       
    //     ]
    // {
    //     path:"/about",
    //     element:<About/>,
    //     errorElement:<Error/>,
    // },
    // {
    //     path:"/main",
    //     element:<Body/>,
    //     errorElement:<Error/>,
    // },
    // {
    //     path:"/contact",
    //     element:<Contact/>,
    //     errorElement:<Error/>,
    // },
    
    
])

//babel transpiles JSX to browser understandable javascript (like react.createElement)
// console.log(<Body></Body>)
ReactDOM.createRoot(root).render(<RouterProvider router={appRoute}/>);
// ReactDOM.createRoot(root).render(<AppLayout/>);


