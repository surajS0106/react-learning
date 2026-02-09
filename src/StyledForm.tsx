export const StyledForm = () =>{
    return(
        <form className="contact-form">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" className="form-input"></input>
            <br></br>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input"></input>
        </form>
    )
}