import React from "react";
import VerticalKeyCell from "./VerticalKeyCell";
import BoardCellRow from "./BoardCellRow";
import BoardCell from "./BoardCell";
import CellStatus from "../CellStatus";
import BoardState from "../BoardState";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rows : this.props.rows, cols : this.props.cols, cellStatuses : [new BoardState(this.props.rows, this.props.cols)]}
        // for (var i = 0; i < this.state.width; i++) { 
        //     this.state.cellStatuses.push([])
        //     for (var j = 0; j < this.state.height; j++) {
        //         this.state.cellStatuses[i].push(CellStatus.BLANK);
        //     }
        // }
    }

    updateCellStatus = (row, col, status) => {
        var statuses = this.state.cellStatuses[0];
        // statuses[0][row][col] = status;
        statuses.setState(row, col, status)
        this.setState({
            rows : this.state.rows,
            cols : this.state.cols,
            cellStatuses : statuses
        })
    }

    render() {
        console.log(this.state.cellStatuses)
        var vertical_keys = [];
        for (var i = 0; i < this.state.cols; i ++) {
            vertical_keys.push(<VerticalKeyCell></VerticalKeyCell>);
        }
        var cell_rows = [];
        for (var i = 0; i < this.state.rows; i++) { 
            cell_rows.push(<BoardCellRow key = {i} rowNumber = {i} cellStatuses={this.state.cellStatuses[0].getRow(i)} rowLength = {this.state.cols} cellUpdateFunction={this.updateCellStatus.bind(this)} ></BoardCellRow>);
        }
        return (
            <table id="board">
                <tbody>
                    {cell_rows}
                </tbody>
            </table>
        )
    }
}

export default Board;