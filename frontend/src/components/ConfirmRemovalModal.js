import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import axiosInstance from "../axiosApi";

const ConfirmRemovalModal = (props) => {
  const {
    pk,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteMember = () => {
    axiosInstance.delete('details/' + pk).then(() => {
      props.resetState();
      toggle();
    });
  };

  return (
    <div>
      <a onClick={toggle}><i className="fa fa-trash"></i></a>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Do you really wanna delete this Member?</ModalHeader>
        <ModalFooter>
          <Button color="danger" onClick={deleteMember}>Yes</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ConfirmRemovalModal;