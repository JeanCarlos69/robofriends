import React, {Component} from 'react'

class ErrorBoundry extends Component{
    constructor(props){
        super(props);

        this.state = {
            hasError:false
        }
    }
    

    componentDidCatch(error,info){
       return  this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError){
            return <h1>Ups Something went wrong please DM to Twitter: @JeanKai69</h1>
        }

        return this.props.children;
    }
}



export default ErrorBoundry;