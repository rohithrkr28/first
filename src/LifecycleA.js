import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component 
{
    constructor(props) {
        super(props)

        this.state = {
            name:'vishwas'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        document.write('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        document.write('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        document.write('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.write('LifecycleA getSnapshotBeforeUpdate')
         return null
    }

    componentDidUpdate() {
        document.write('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
           name: 'codevolution'
        })
    }
    render() {
        console.log('LifecycleA render')
        return(
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA