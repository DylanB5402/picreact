import CellStatus from './CellStatus';

class BoardState {
  constructor (rows, cols) {
    this.state = [];
    this.rows = rows;
    this.cols = cols;
    for (let i = 0; i < rows; i++) {
      this.state.push([]);
      for (let j = 0; j < cols; j++) {
        this.state[i][j] = CellStatus.UNKNOWN;
      }
    }
  }

  getState (row, col) {
    return this.state[row][col];
  }

  setState (row, col, newState) {
    this.state[row][col] = newState;
  }

  getRow(row) {
    return this.state[row];
  }
}

export default BoardState;