import React from "react";

export const Hello =() => {
    return(
        <h1 id="container">Hello Suraj</h1>
    )
}

export const HelloWithoutJSX =() =>{
    return React.createElement(
        "h1",
        {id:"container"},
        "Hello Suraj"
    )
}