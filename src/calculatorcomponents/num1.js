import React,{ Component} from 'react'

class Num1 extends Component {
    constructor(props){
        super(props);
        this.state={
            num1:''
        }
    }

    changeForm =(event) => {
        this.props.parentCallback(event.target.value);
}
    render(){
        return(
            <div>
               <h1>Num1</h1><input type='text' value={this.props.num1} onChange = {this.changeForm}></input>
            </div>
        )
    }
}

export default Num1;