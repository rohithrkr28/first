import React, {Component} from 'react'
import Username from './username'
import Password from './password'
import Submit from './submit'
import Reset from './reset'
class Childlogin extends Component
{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    resetForm = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    //changeForm = () => {() =>console.log('changeform')}
    
    //Changeform = () => {(event) =>{ return this.setState({password:event.target.value})} }

    handleCallback = (value) => {this.setState({username:value})}
    nextCallback = (value) => {this.setState({password:value})}
    thirdCallback = (value) => {alert('Hello'+this.state.username)}
    //fourthCallback = () => {this.setState({username:''}), this.setState({password:''})}
    render(){
        return(
            <div>
                <Username parentCallback = {this.handleCallback} username={this.state.username}/>
                <Password parentCallback = {this.nextCallback} password={this.state.password}/>
                <Submit parentCallback = {this.thirdCallback}/>
                <Reset parentCallback = {this.resetForm}/>
            </div>
        )
    }
}
export default Childlogin;