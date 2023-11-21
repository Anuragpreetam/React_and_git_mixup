import { Link } from "react-router-dom";

const Heading = ()=>{
    console.log("Heading rendered")
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
                </ul>
            </div>
        </div>
          
    )
}

export default Heading;