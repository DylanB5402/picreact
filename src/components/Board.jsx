import React from "react";
import VerticalKeyCell from "./VerticalKeyCell";
import BoardCellRow from "./BoardCellRow";
import BoardCell from "./BoardCell";
import CellStatus from "../CellStatus";
import BoardState from "../BoardState";
import BoardGenerator from "../BoardGenerator";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.boardGen = new BoardGenerator();
        var actualBoardLayout = this.boardGen.generateBoard(this.props.rows, this.props.cols);
        this.state = {rows : this.props.rows, cols : this.props.cols, cellStatuses : [actualBoardLayout], renderedCellStatuses : [actualBoardLayout]}
        
    }

    updateCellStatus = (row, col, status) => {
        var statuses = this.state.cellStatuses;
        statuses[0].setState(row, col, status)
        this.setState({
            rows : this.state.rows,
            cols : this.state.cols,
            cellStatuses : statuses
        })
    }

    render() {
        var vertical_keys = [];
        for (var i = 0; i < this.state.cols; i ++) {
            vertical_keys.push(<VerticalKeyCell></VerticalKeyCell>);
        }
        var cell_rows = [];
        for (var i = 0; i < this.state.rows; i++) { 
            cell_rows.push(<BoardCellRow key = {i} rowNumber = {i} cellStatuses={this.state.cellStatuses[0].getRow(i)} rowLength = {this.state.cols} cellUpdateFunction={this.updateCellStatus.bind(this)} showTrueState={false} ></BoardCellRow>);
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