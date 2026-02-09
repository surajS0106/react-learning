export const Greeting = ( {name = "Suraj", message="Welcome to React"} : {name?: string, message?: string}) => {
    return (
        <>
        <h1>{message}, {name}!</h1>
        </>
    )
}