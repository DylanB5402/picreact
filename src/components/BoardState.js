import CellStatus from "../CellStatus"

class BoardState {

    constructor(rows, cols) {
        this.state = [];
        for (var i = 0; i < rows; i++) {
            this.state.push([]);
            for (var j = 0; j < cols; j++) {
                this.state[i][j] = CellStatus.UNKNOWN;
            }
        }
    }

    getState(row, col) {
        return this.state[row][col];
    }

    setState(row, col, newState) {
        this.state[row][col] = newState;
    }
}