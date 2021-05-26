import React,{ Component} from 'react'

class Num2 extends Component {
    constructor(props){
        super(props);
        this.state={
            num2:''
        }
    }

    changeform =(event) => {
        this.props.parentCallback(event.target.value);
}
    render(){
        return(
            <div>
               <h1>Num2</h1><input type='text' value={this.props.num2} onChange = {this.changeform}></input>
            </div>
        )
    }
}

export default Num2;