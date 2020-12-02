import React, { useState } from 'react';
import {
  Button,
  Modal,
  Header,
  Icon,
  Form,
  Select,
  Radio,
} from 'semantic-ui-react';

const NewItem = ({ open = false, onClose, onClick }) => {
  const [item, setItem] = useState({
    name: '',
    uom: '',
    quantity: '',
    unit: '',
    totalPrice: '',
    discount: '',
    totalPriceAfterDiscount: '',
  });

  const handleItemChange = (type, e) => {
    switch (type) {
      case 'name':
        setItem({
          ...item,
          name: e.target.value,
        });
        break;
      case 'uom':
        setItem({
          ...item,
          uom: e.target.value,
        });
        break;
      case 'quantity':
        setItem({
          ...item,
          quantity: e.target.value,
        });
        break;
      case 'unit':
        setItem({
          ...item,
          unit: e.target.value,
        });
        break;
      case 'totalPrice':
        setItem({
          ...item,
          totalPrice: e.target.value,
        });
        break;
      case 'discount':
        setItem({
          ...item,
          discount: e.target.value,
        });
        break;
      case 'totalPriceAfterDiscount':
        setItem({
          ...item,
          totalPriceAfterDiscount: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const handleSavedClicked = () => {
    onClick(item);
  };
  return (
    <Modal
      closeIcon
      open={open}
      onClose={onClose}
    >
      <Header content="Detail Form" />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Item Name</label>
            <input onChange={(e) => handleItemChange('name', e)} />
          </Form.Field>
          <Form.Field>
            <label>UOM</label>
            <Select
              options={[
                {
                  key: 'x',
                  value: 'x',
                  text: 'x',
                },
                {
                  key: 'y',
                  value: 'y',
                  text: 'y',
                },
              ]}
              onChange={(e) => handleItemChange('uom', e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Quantity</label>
            <input onChange={(e) => handleItemChange('quantity', e)} />
          </Form.Field>
          <Form.Field>
            <label>Unit</label>
            <input onChange={(e) => handleItemChange('unit', e)} />
          </Form.Field>
          <Form.Field>
            <label>Total Price</label>
            <input onChange={(e) => handleItemChange('totalPrice', e)} />
          </Form.Field>
          <Form.Field>
            <label>Discount</label>
            <Radio
              name="discount"
              label="%"
              onChange={(e) => handleItemChange('discount', e)}
            />
            <Radio
              name="discount"
              label="amount"
              onChange={(e) => handleItemChange('discount', e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Total Price after discount</label>
            <input
              onChange={(e) => handleItemChange('totalPriceAfterDiscount', e)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={onClose}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={handleSavedClicked}>
          <Icon name="checkmark" /> Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default NewItem;
