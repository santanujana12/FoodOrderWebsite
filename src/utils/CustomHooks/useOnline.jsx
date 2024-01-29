import React,{useState,useEffect} from 'react';

const useOnline = () => {
    const [isOnline,setisOnline] = useState(true);

    // Detect if internet connection is active
    useEffect(()=>{
        const handleOnline = ()=> setisOnline(true);
        
        const handleOffline = ()=>setisOnline(false);
        
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline", handleOffline);
        }

    },[]);

  return isOnline;
}

export {useOnline};