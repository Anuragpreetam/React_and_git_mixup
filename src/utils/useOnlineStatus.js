import { useEffect,useState } from "react";


const useOnlineStatus = ()=>{
    const[status,setStatus] = useState("true")
    useEffect(()=>{
        console.log("useOnlineStatus's useeffect called...")
        window.addEventListener("offline",()=>{
            setStatus("false");
        })

        window.addEventListener("online",()=>{
            setStatus("true");
        })

    },[])

    return status;
}

export default useOnlineStatus;