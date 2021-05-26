import React,{Component} from 'react'

class Sub extends Component{
    render() {
        return (
            <div>
                <button onClick={this.props.parentCallback}>Sub</button>
            </div>
        )
    }
}

export default Sub;