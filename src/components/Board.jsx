import React from "react";
import VerticalKeyCell from "./VerticalKeyCell";
import BoardCellRow from "./BoardCellRow";
import BoardCell from "./BoardCell";
import CellStatus from "../CellStatus";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {height : 5, width : 5, cellStatuses : []}
        for (var i = 0; i < this.state.width; i++) { 
            this.state.cellStatuses.push([])
            for (var j = 0; j < this.state.height; j++) {
                this.state.cellStatuses[i].push(CellStatus.BLANK);
            }
        }
        // this.updateCellStatus = this.updateCellStatus.bind(this);
    }

    updateCellStatus = (row, col, status) => {
        var statuses = this.state.cellStatuses;
        console.log(row, col)
        statuses[row][col] = status;
        this.setState({
            height : this.state.height,
            width : this.state.width,
            cellStatuses : statuses
        })
    }

    render() {
        var vertical_keys = [];
        for (var i = 0; i < this.state.width; i ++) {
            vertical_keys.push(<VerticalKeyCell></VerticalKeyCell>);
        }
        var cell_rows = [];
        for (var i = 0; i < this.state.width; i++) { 
            cell_rows.push(<BoardCellRow key = {i} rowNumber = {i} cellStatuses={this.state.cellStatuses[i]} rowLength = {this.state.cellStatuses.length} cellUpdateFunction={this.updateCellStatus.bind(this)} ></BoardCellRow>);
        }
        // console.log(this.state.cellStatuses)
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