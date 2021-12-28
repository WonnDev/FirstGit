import React from "react";
import Child from "./Child";

class MyComponent extends React.Component{
    
    state = {
        firstname: '',
        lastname: '',
    }
    
    handleChangeFirstname = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleChangeLastname = (event) => {
        this.setState({
            lastname: event.target.value
        })
        
    }
    handleSubmit = (event) => {
       event.preventDefault()
        alert('Bingo')
    }

    render(){

        return(
            //fragnent<></>
            <> 
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstname}
                    onChange={(event) => this.handleChangeFirstname(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastname}
                    onChange={(event) => this.handleChangeLastname(event)}

                    />
                    <br/><br/>
                    <input type="submit"
                    onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>

            <Child name={'1'} />
            
            </>
        )
    }
}

export default MyComponent;