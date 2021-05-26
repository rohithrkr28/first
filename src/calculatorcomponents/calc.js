import React,{Component} from 'react'
import Num1 from './num1'
import Num2 from './num2'
import Add from './add'
import Sub from './sub'
import Mul from './mul'
import Div from './div'
class Calculator extends Component
{
    constructor(props){
        super(props);
        this.state={
            num1:'',
            num2:'', 
            result:''
        };

    }

    changeForm = (value) =>{
        this.setState({num1:value})
    }

    changeform = (value) =>{
        this.setState({num2:value})
    }

    add = () =>{
        this.setState({result:(parseInt(this.state.num1)+parseInt(this.state.num2))})
        //alert(this.state.result)
    }

    sub = () =>{
        this.setState({result:(parseInt(this.state.num1)-parseInt(this.state.num2))})
        //alert(this.state.result)
    }

    mul = () =>{
        this.setState({result:(parseInt(this.state.num1)*parseInt(this.state.num2))})
        //alert(this.state.result)
    }

    div = () =>{
        this.setState({result:(parseInt(this.state.num1)/parseInt(this.state.num2))})
        //alert(this.state.result)
    }

    render(){
        return(
            <div>
                <Num1 parentCallback = {this.changeForm}/>
                <Num2 parentCallback = {this.changeform}/>
                <Add parentCallback  = {this.add}/>
                <Sub parentCallback  = {this.sub}/>
                <Mul parentCallback  = {this.mul}/>
                <Div parentCallback  = {this.div}/>
                <div>{this.state.result}</div>
            </div>
        )
    }
}

export default Calculator;