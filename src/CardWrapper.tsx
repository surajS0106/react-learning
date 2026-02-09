export const CardWrapper = ({title, children}: {title: string, children: React.ReactNode}) => {
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

//change the border color to red and add a background color of lightgrayexport const CardWrapper = ({title, children}: {title: string, children: React.ReactNode}) => {
