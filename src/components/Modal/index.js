import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ModalDialog = ({ isOpen, handleClose, title, children, submitText, handleSubmit }) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={handleClose} centered>
        <ModalHeader toggle={handleClose}>{title}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        {
          handleSubmit && (
            <ModalFooter>
              <Button color="primary" onClick={handleSubmit}>
                {submitText}
              </Button>{' '}
              <Button color="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </ModalFooter>
          )
        }
      </Modal>
    </div>
  );
}

export default ModalDialog;