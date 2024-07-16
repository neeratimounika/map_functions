import React from "react";

function Greet(props){
    return(
        <div style={{border:'2px solid gray',width:'300px',margin:'20px'}}>
            <h1>Id:{props.id}</h1>
            <h1>Name:{props.name}</h1>
        <h1>age:{props.age}</h1>
        </div>
    )
}

export default Greet