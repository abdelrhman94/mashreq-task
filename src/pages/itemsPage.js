import { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import NewItemModal from '../Components/newItem';
import ItemsTable from '../Components/items';

const options = [
  { key: 'm', text: 'x', value: 'x' },
  { key: 'f', text: 'y', value: 'y' },
];

const ItemsPage = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    addItem();
  }, []);
  const addItem = () => {
    const newItems = [
      ...items,
      {
        item: [],
        quantity: [],
        uom: [],
        price: [],
        discount: [],
        total: [],
      },
    ];
    setItems(newItems);
  };

  const handleSaveItem = (item) => {
    setItems([...items, item]);
    setOpen(false);
  };

  return (
    <>
      <Form>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Category"
            options={options}
            placeholder="Category"
          />

          <Form.Select
            fluid
            label="Brand"
            options={options}
            placeholder="brand"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="SKU" />
          <Form.Input fluid label="Barcode" />
        </Form.Group>
      </Form>
      <ItemsTable
        onNewItem={() => {
          setOpen(true);
        }}
        items={items}
      />
      <NewItemModal
        open={open}
        onClick={handleSaveItem}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ItemsPage;
