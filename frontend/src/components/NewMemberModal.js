import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewMemberForm from "./NewMemberForm";

class NewMemberModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Member";
    var button = <a onClick={this.toggle}><i className="fa fa-pencil"></i></a>;

    if (create) {
      title = "Creating New Member";

      button = (
        <Button
          color="success"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Add New Member
        </Button>
      );
    }else if (this.props.see){
      title = "Details Member";
      button = <a onClick={this.toggle}><i className="fa fa-eye"></i></a>;
    }

    return (
      <Fragment>
        {button}
        &nbsp;&nbsp;
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <NewMemberForm
            resetState={this.props.resetState}
            toggle={this.toggle}
            see={this.props.see}
            member={this.props.member}
            /> 
          </ModalBody>
        </Modal>
      </Fragment>
    );
    }
}

export default NewMemberModal;