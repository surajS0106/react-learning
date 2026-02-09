import React from "react"

export const UserProfile = () =>{
    return(
        <div> User Name
            <h1> Suraj</h1>
        </div>
        
        
    )
}

export const UserProfileWithReactFragment = () =>{
    return(
        <React.Fragment>
            User Name
            <h1> Suraj</h1>
        </React.Fragment>
    )
}

export const UserProfileWithoutJSX = () =>{
    return React.createElement(
        "div",
        null,
        "User Name",
        React.createElement(
            "h1",
            null,
            "Suraj"
        )
    )
}