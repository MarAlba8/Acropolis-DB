import React, { Component } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import MembersList from "./MembersList";
import axiosInstance from "../axiosApi";
import NewMemberModal from "./NewMemberModal";

class Home extends Component {

  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  state = {
    members: []
  };

  handleLogout(){
    axiosInstance.post('blacklist/', {
      "refreshToken": localStorage.getItem("refreshToken")
    }).then(
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('refreshToken'),
      axiosInstance.defaults.headers['Authorization'] = null,
      this.props.history.push("/")
    ).catch (error => {
      throw error;
  })};

  componentDidMount() {
    this.resetState();
  }

  getMembers = () => {
    axiosInstance.get('').then(res => this.setState({ members: res.data })
  ).catch (error => {
      throw error;
  })};

  resetState = () => {
    this.getMembers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px"}}>
        <Row>
          <Col>
            <MembersList
              members={this.state.members}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button 
              onClick={() => {
                this.props.history.push("/home")
              }}
              className="float-left"
              color="success"
              style={{ minWidth: "200px" }}
              onClick={this.handleLogout}>
                Sign off
            </Button>
            <NewMemberModal create={true} resetState={this.resetState} />
          </Col> 
        </Row>
      </Container>
    );
  }
}

export default Home;