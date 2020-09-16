import React, { Component} from "react";
import axiosInstance from "../axiosApi";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axiosInstance.post('/token/obtain/', {
            username: this.state.username,
            password: this.state.password
        }).then(
            result => {
                axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;
                localStorage.setItem('accessToken', result.data.access);
                localStorage.setItem('refreshToken', result.data.refresh);
                this.props.history.push("/home");
            }
        )
    }

    render() {
        return (
            <Container>

                <Container className="Login">
                    <h2>Log In</h2>
                    <Form className="form" onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup>
                        <Label>username</Label>
                        <Input 
                            name="username" 
                            type="text" 
                            id="username"
                            onChange={this.handleChange}
                            placeholder="example@email.com"
                        />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input
                            name="password" 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange}
                            placeholder="********"
                        />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                    </Form>
                </Container>
            </Container>
        )
       
    }
}
export default Login;