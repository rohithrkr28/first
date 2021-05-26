import React, {Component} from 'react'

class Login extends Component
{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    resetForm = () => {
        console.log('reset form');
        this.setState({
            username: '',
            password: ''
        })
    }
    render(){
        return(
            <div>
                <h1>Username</h1><input type='text' value={this.state.username} onChange = ''></input>
                <h1>Password</h1><input type='password' value={this.state.password} onChange = {(event,newValue) => this.setState({password:event.target.value})} placeholder='Enter only Characters'></input><br></br>
                <button onClick ={()=> alert('Hello  '+this.state.username)}>submit</button><br></br>
                <button onClick ={this.resetForm}>reset</button>
            </div>
        )
    }
}
export default Login;