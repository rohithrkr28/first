import React,{Component} from 'react'

class Add extends Component{
    render() {
        return (
            <div>
                <button onClick={this.props.parentCallback}>Add</button>
            </div>
        )
    }
}

export default Add;