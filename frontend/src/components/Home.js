import React, { Component } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import MembersList from "./MembersList";
import axiosInstance from "../axiosApi";
import NewMemberModal from "./NewMemberModal";

class Home extends Component {
  state = {
    members: []
  };

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
              style={{ minWidth: "200px" }}>
                Return
            </Button>
            <NewMemberModal create={true} resetState={this.resetState} />
          </Col> 
        </Row>
      </Container>
    );
  }
}

export default Home;