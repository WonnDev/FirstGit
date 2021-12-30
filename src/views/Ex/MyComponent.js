import React from "react";
import Child from "./Child";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component{
    
    state={
        arrItems: [
            {name:'2',number:'2'},
        ]
    }

    addNewItems = (items) => {
        console.log('>>>check form dad: ',items)
        this.setState({
            arrItems: [...this.state.arrItems, items]
        })
    }
    
    
    render(){

        console.log('>>> checkprops: ',this.props)

        return(
            //fragnent<></>
            <>
            <AddComponent
            addNewItems = {this.addNewItems}
            /> 
                

            <Child name={'1'}
                arrItems = {this.state.arrItems}
            />
            
            </>
        )
    }
}

export default MyComponent;