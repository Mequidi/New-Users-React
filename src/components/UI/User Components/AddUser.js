import Button from "../Button";
import Card from "../Card";
import "./AddUser.css";

const AddUser = (props) =>{
    
    const submitHandler = (event) =>{
        event.preventDefault();
    }
    
    return (
        <Card className="input">
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" />
                <Button type="submit">Add User</Button> 
            </form>
        </Card>
    )
}

export default AddUser