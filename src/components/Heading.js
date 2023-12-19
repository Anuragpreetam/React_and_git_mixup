import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Heading = ()=>{
    
    console.log("Heading rendered")
    var status = useOnlineStatus();

    //function to provide symbol to show related status
    const Symbol = ()=>{
        if(status == "true"){
            return '✅';
        }else return '❌';
    }
   

    return(
        <div className="heading-container" style={{display:"flex",position:"fixed",justifyContent:"space-between",zIndex:"10"}}>
            <div className="heading">
                <h1 style={{}}>
                    Swiggy Clone
                </h1>
            </div>

            <div className="links">
                <ul style={{display:"flex"}}>
                    <li style={{display:"inline",margin:"1rem"}}>
                       OnLine Status:{Symbol()}
                    </li>
                    <li style={{display:"inline",margin:"1rem"}}>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <a href="/">
                        <li style={{display:"inline",margin:"1rem"}}>
                            Home
                        </li>
                    </a> */}
            
                    <li style={{display:"inline",margin:"1rem"}}>
                        <Link to="/about">About</Link>
                    </li>
                    <li style={{display:"inline",margin:"1rem"}}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li style={{display:"inline",margin:"1rem"}}>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li style={{display:"inline",margin:"1rem"}}>
                        <Link to="/instamart">Instamart</Link>
                    </li>
                   
                  
                </ul>
            </div>
        </div>
          
    )
}

export default Heading;