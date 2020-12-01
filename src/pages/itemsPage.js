import { useState, useEffect } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import NewItemModal from '../Components/newItem';
import ItemsTable from '../Components/items';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const ItemsPage = () => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    addItem();
  }, []);
  const addItem = () => {
    const newItems = [
      ...items,
      {
        item: 'qq',
        quantity: 56,
      },
    ];
    setItems(newItems);
  };
  return (
    <>
      <Form>
        <Form.Group widths="equal">
          <Dropdown
            clearable
            options={options}
            selection
            fluid
            label="Category"
          />
          <Dropdown
            clearable
            options={options}
            selection
            fluid
            label="Brand"
          />
          
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio label="Small" value="sm" checked={value === 'sm'} />
          <Form.Radio label="Medium" value="md" checked={value === 'md'} />
          <Form.Radio label="Large" value="lg" checked={value === 'lg'} />
        </Form.Group>
        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>
      <ItemsTable
        onNewItem={() => {
          setOpen(true);
        }}
        items={items}
      />
      <NewItemModal
        open={open}
        onClick={() => {
          addItem();
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ItemsPage;
