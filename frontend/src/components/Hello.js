import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"",
        };

        this.getMessage = this.getMessage.bind(this)
    }

    getMessage(){
        axiosInstance.get('hello/').then(res => this.setState({ message: res.data.hello }));
        console.log("inside getmessage")
        console.log("token:" + localStorage.getItem('access_token'))

        return this.state.message;      
    }

    componentDidMount(){
        // It's not the most straightforward thing to run an async method in componentDidMount

        // Version 1 - no async: Console.log will output something undefined.
        const messageData1 = this.getMessage();
        console.log("messageData1: ", JSON.stringify(messageData1, null, 4));
        
            // It's not the most straightforward thing to run an async method in componentDidMount
    
            // Version 1 - no async: Console.log will output something undefined.
            this.getMessage();
        
    }

    render(){
        return (
            <div>
                <p>este es el mensaje: {this.state.message}</p>
            </div>
        )
    }
}

export default Hello;