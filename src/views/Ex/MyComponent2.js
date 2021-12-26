import React from "react";

class MyComponent2 extends React.Component{
    
    //key
    state = {
        name: 'W',
        age: '18',
    }

    render(){
        
        let add = 'PT';  

        return(
            //fragnent      
            <> 
            <div className="first">This test class component</div>
            <div className="second">test {add}</div>
                <div className="second">test {this.state.name}</div>
                <div className="second">test {this.state['age']}</div>
            <div className="third">{console.log("HTML")}</div>
            </>
        )
    }
}

export default MyComponent2;