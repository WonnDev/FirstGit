import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/meo.jpg'


class Home extends React.Component {
    componentDidMount() {
        // setTimeout(()=>{
        //     this.props.history.push('/todo')
        // },5000)
    }
    render() {
        return (
            <>
                <div>Hello from Homepage</div>
                <div>Wellcome to MyReactWeb</div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', margin: '20px' }} />
                </div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);