import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, Container } from 'reactstrap';
import axiosInstance from "../axiosApi";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteMember = () => {
    axiosInstance.delete('details/' + this.props.pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render(){
    return (
      <Fragment>
        <a onClick={this.toggle}><i className="fa fa-trash"></i></a>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Do you really wanna delete this Member?</ModalHeader>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteMember}>Yes</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;