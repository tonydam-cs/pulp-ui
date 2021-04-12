

import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
//import './fonts.css';

import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  wrappable,
} from '@patternfly/react-table';

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Task-id',
          transforms: [sortable]
        },
        {
          title: 'State',
          transforms: [sortable]
        },
        {
          title: 'Started',
          transforms: [sortable]
        },
        {
          title: 'Finished',
          transforms: [sortable]
        }
        
      ],
      rows: [['e239ae4f', 'Successful', '2020-11-05T13:15:30Z', '2020-12-05T13:15:30Z'], ['c239ae4f', 'Successful', '2021-01-05T13:15:30Z', '2021-01-05T14:15:30Z'], ['d239ae4f', 'Failed', '2019-06-05T13:15:30Z', '2019-11-07T13:15:30Z']],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table aria-label="Sortable with Wrapping Headers" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}


export{SortableTable}
//const rootElement = document.getElementById("root");
//ReactDOM.render(<SortableTable />, rootElement);



