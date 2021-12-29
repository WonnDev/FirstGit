import React from "react";
import Child from "./Child";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component{
    
    
    
    
    render(){

        console.log('>>> checkprops: ',this.props)

        return(
            //fragnent<></>
            <>
            <AddComponent/> 
                

            <Child name={'1'} />
            
            </>
        )
    }
}

export default MyComponent;