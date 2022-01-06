import React from 'react';
import BoardCell from './BoardCell';

class BoardCellRow extends React.Component {
  constructor (props) {
    super(props);
    this.state = { rowLength: this.props.rowLength };
  }

  render () {
    const cells = [];
    for (let i = 0; i < this.state.rowLength; i++) {
      const cell = <BoardCell row={this.props.rowNumber} col={i} cellStatus={this.props.cellStatuses[i]} key={i} updateStatus={this.props.cellUpdateFunction} />;
      cells.push(cell);
    }
    return (
      <tr>
        {cells}
      </tr>
    );
  }
}

export default BoardCellRow;
