export const NameList = () => {
    const names = ["Suraj Sanjay", "Dexter Morgan", "Anbe Diana", "Suraj Sanjay"];
    return (
        <div>
            <h2>Name List</h2>
            {names.map((name, index) => <div key={index}>{index} {name}</div>)}
        </div>
    )
}