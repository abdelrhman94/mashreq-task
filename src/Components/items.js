import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';

const Items = ({ onNewItem, items = [] }) => (
  <Table compact>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>UOM</Table.HeaderCell>
        <Table.HeaderCell>Price per unit (EGP)</Table.HeaderCell>
        <Table.HeaderCell>Discount</Table.HeaderCell>
        <Table.HeaderCell>Total after discount (EGP)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {items.map((item) => (
        <Table.Row>
          <Table.Cell>{item.item}</Table.Cell>
          <Table.Cell>{item.quantity}</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="4">
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
            onClick={onNewItem}
          >
            <Icon name="user" /> Add Item
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default Items;
