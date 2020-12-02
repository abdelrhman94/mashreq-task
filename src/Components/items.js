import { Button, Icon, Table } from 'semantic-ui-react';

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
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.quantity}</Table.Cell>
          <Table.Cell>{item.uom}</Table.Cell>
          <Table.Cell>{item.unit}</Table.Cell>
          <Table.Cell>{item.totalPrice}</Table.Cell>
          <Table.Cell>{item.discount}</Table.Cell>
          <Table.Cell>{item.totalPriceAfterDiscount}</Table.Cell>
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
