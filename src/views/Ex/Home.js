import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.history.push('/todo')
        },5000)
    }
    render() {
        return(
            <div>Hello from Homepage</div>
        )
    }
}

export default withRouter(Home);