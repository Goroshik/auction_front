import React from 'react';
import { TablePlain } from '@dccs/react-table-plain';

class HistoryTable extends React.Component {
  getColumns() {
    return [
      { header: 'User ID', prop: 'userID' },
      { header: 'Product ID', prop: 'productID' },
      { header: 'Price', prop: 'price' },
      { header: 'Last rate', prop: 'dateTime' },
    ];
  }

  render() {
    return <TablePlain data={this.props.history} colDef={this.getColumns()} />;
  }
}

export { HistoryTable };