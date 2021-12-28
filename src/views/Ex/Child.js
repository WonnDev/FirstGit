import React from "react";

class Child extends React.Component {



    render() {

        return (
            //fragnent<></>
            <>
            <div>Child Component: {this.props.name}</div>
            </>
        )
    }
}

export default Child;