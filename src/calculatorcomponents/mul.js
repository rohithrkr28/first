import React,{Component} from 'react'

class Mul extends Component{
    render() {
        return (
            <div>
                <button onClick={this.props.parentCallback}>Mul</button>
            </div>
        )
    }
}

export default Mul;