import React from "react";

class MyComponent2 extends React.Component{
    
    //key
    state = {
        name: 'W',
        age: '18',
        input: '',
    }
    handleOnChangeInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    handleClickButton = () => {
        alert('Click For What?')
    }

    render(){
        
        let add = 'PT';  

        return(
            //fragnent<></> + truyenthamso console.log nooutput
            <> 
            <div className="first">This test class component</div>
            <div className="second">
                test {add},
                test {this.state.name},
                test {this.state['age']}
            </div>
            <div className="third">{console.log('HTML Add: ',add)}</div>
            <div className="fourth">
                <input value={this.state.input} type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}
                />
                <div className="fourth">Output: {this.state.input}</div>
            <div className="fifth">
                <button onClick={ () => this.handleClickButton()}>Click me</button>

            </div>
            </div>
            </>
        )
    }
}

export default MyComponent2;