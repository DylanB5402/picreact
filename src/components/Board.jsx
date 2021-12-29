import React from "react";
import VerticalKeyCell from "./VerticalKeyCell";
import BoardCellRow from "./BoardCellRow";
import BoardCell from "./BoardCell";
import CellStatus from "../CellStatus";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {height : 5, width : 5, cell_statuses : []}
        for (var i = 0; i < this.state.width; i++) { 
            this.state.cell_statuses.push([])
            for (var j = 0; j < this.state.height; j++) {
                this.state.cell_statuses[i].push(CellStatus.BLANK);
            }
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    }

    render() {
        var vertical_keys = [];
        for (var i = 0; i < this.state.width; i ++) {
            vertical_keys.push(<VerticalKeyCell></VerticalKeyCell>);
        }
        var cells = [];
        for (var i = 0; i < this.state.width; i++) { 
            for (var j = 0; j < this.state.height; j++) {
                var cell = <BoardCell row = {i} col = {j} onclick={this.handleClick}></BoardCell>
                cells.push(cell);
            }
        }

        return (
            <table id="board">
            </table>
        )
    }
}

export default Board;