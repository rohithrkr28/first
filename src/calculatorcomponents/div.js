import React,{Component} from 'react'

class Div extends Component{
    render() {
        return (
            <div>
                <button onClick={this.props.parentCallback}>Div</button>
            </div>
        )
    }
}

export default Div;