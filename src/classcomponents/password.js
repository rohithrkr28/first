import React,{ Component} from 'react'

class Password extends Component {
    constructor(props){
        super(props);
        this.state={
            password:''
        }
    }

    changeform =(event) => {
        console.log("event.target", event.target)
        this.props.parentCallback(event.target.value);
        //event.preventDefault();
}
    render(){
        return(
            <div>
                 <h1>Password</h1>
                 <input type='password' value={this.props.password} onChange = {this.changeform} placeholder='Enter only Characters'></input><br></br>
            </div>
        )
    }
}

export default Password;