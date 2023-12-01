import { useEffect,useState } from "react";

const[status,setStatus] = useState("true")
const useOnlineStatus = ()=>{
    useEffect(()=>{

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