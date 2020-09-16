import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axiosInstance from "../axiosApi";

class NewMemberForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    telephone: "",
    address: "",
    dateBorn: null,
    dateIngress: null,
  };

  componentDidMount() {
    if (this.props.member) {
      const { pk, name, telephone, address, dateBorn, dateIngress } = this.props.member;
      this.setState({ pk, name, telephone, address, dateBorn, dateIngress});
    }
  }

  onChange = e => {
      if(!this.props.see){
        this.setState({ [e.target.name]: e.target.value });
      }
      
  };

  createMember = e => {
    e.preventDefault();
    axiosInstance.post('', this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editMember = e => {
    e.preventDefault();
    console.log('details/' + this.state.pk, this.state)
    axiosInstance.put('details/' + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.member ? this.editMember : this.createMember}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="telephone">Telephone:</Label>
          <Input
            type="text"
            name="telephone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.telephone)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address:</Label>
          <Input
            type="text"
            name="address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.address)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dateBorn">Date of born:</Label>
          <Input
            type="date"
            name="dateBorn"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.dateBorn)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dateIngress">Date of ingress:</Label>
          <Input
            type="date"
            name="dateIngress"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.dateIngress)}
          />
        </FormGroup>
        <Button color="success">Send</Button>
      </Form>
    );
  }
}

export default NewMemberForm;