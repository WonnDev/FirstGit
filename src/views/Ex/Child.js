import React from "react";

class Child extends React.Component {

    state = {
        show: false
    }

    handleShowHide = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {

        let {show} = this.state;
        let check = show === true ? 'show = true':'show = false' ;
            console.log('>>>check conditional: ',check)

        return (
            //fragnent<></>
            <>
                {show === false ?
                < div >
                <button onClick={() => this.handleShowHide()}>Show</button>
                </div>
            :
            <>
                <div>Child Component: {this.props.name}</div>
                <div>
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                </div>
            </>
            }
            </>
        )
    }
}

export default Child;