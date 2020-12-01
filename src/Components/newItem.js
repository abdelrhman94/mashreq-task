import { Button, Modal, Header, Icon, Form } from 'semantic-ui-react';

const newItem = ({ open = false, onClose, onClick }) => {
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={onClose}
    >
      <Header icon="archive" content="Archive Old Messages" />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={onClose}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={onClick}>
          <Icon name="checkmark" /> Add
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default newItem;
