import React,{ Component} from 'react'

class Username extends Component {
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }

    changeForm =(event) => {
        console.log("event.target", event.target)
        this.props.parentCallback(event.target.value);
        //event.preventDefault();
}
    render(){
        return(
            <div>
               <h1>Username</h1><input type='text' value={this.props.username} onChange = {this.changeForm}></input>
            </div>
        )
    }
}

export default Username;