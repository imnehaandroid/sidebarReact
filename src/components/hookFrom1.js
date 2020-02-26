import React, {useEffect, useState} from 'react';

    function HookFrom1 ()  {
    //State
    const [count, setCount] = useState(0);
    const [count1,setCount1] = useState(50);
    

     const handleIncrement =() =>{
       setCount (count+1);

     };
     const handledecrement = () =>{

        setCount1(count1 - 1);
     };
     


    //useEffect
    useEffect(() => {
        console.log("use Effect call")
    },[count]);

    return(
        
        <React.Fragment>
            <h1> Count up : {count}</h1>
            <button  type ="button" onClick = {handleIncrement}> Increment</button>


            <h2> Count Down : {count1}</h2>
            <button  type ="button" onClick = {handledecrement}> decrement</button>
        </React.Fragment>
        
    );
};

export default HookFrom1;