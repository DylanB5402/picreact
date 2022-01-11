import BoardState from "./BoardState";
import CellStatus from "./CellStatus";

class BoardGenerator {

    constructor(seed) {
        // this.rng = Math.seedrandom(seed);
    }

    // true: cell filled, false: cell blank
    generateBit() {
        // return this.rng() > 0.5;
        return Math.random() > 0.5;
    }

    generateBoard(rows, cols) {
        var board = new BoardState(rows, cols);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (this.generateBit()) {
                    board.setState(i, j, CellStatus.FILLED);
                } else {
                    board.setState(i, j, CellStatus.BLANK);
                }
            }
        }
        return board;
    }
}

export default BoardGenerator;