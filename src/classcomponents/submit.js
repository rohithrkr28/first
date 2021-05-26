import React,{ Component} from 'react'
class Submit extends Component {

    render(){
    
        return(
            <div>
                <button onClick = {this.props.parentCallback}>submit</button><br></br>
            </div>
        )
    }
}

export default Submit;