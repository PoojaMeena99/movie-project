import React, { useState} from 'react';
"use client"

const Like = () =>{
    const [num, setNum] = useState(0);
    
    return(
         <div>
            <img className="LikeImage" src="like.png" alt="Like" />
            <h1>{num}</h1>
         </div>          
      );
 };   

export default Like;    




