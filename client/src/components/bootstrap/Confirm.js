import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.show ? this.props.show : false,
      backdrop: true
    };
  }

  confirm = () => {
    this.props.handleConfirm();
    this.setState({
      modal: !this.state.modal
    });
  };

  reject = () => {
    this.props.handleReject();
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
        <ModalBody>{this.props.message}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.confirm}>
            Confirm
          </Button>{' '}
          <Button color="secondary" onClick={this.reject}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Confirm;
