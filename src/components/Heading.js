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
                    <li style={{display:"inline",margin:"1rem"}}>Home</li>
                    <li style={{display:"inline",margin:"1rem"}}>About</li>
                    <li style={{display:"inline",margin:"1rem"}}>Contact</li>
                    <li style={{display:"inline",margin:"1rem"}}>Cart</li>
                </ul>
            </div>
        </div>
          
    )
}

export default Heading;