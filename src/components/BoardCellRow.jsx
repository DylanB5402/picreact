import React from "react";
import BoardCell from "./BoardCell";

class BoardCellRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rowLength : this.props.rowLength};
    }
    
    render() {
        var cells = [];
        for (var i = 0; i < this.state.rowLength; i++) {
            var cell = <BoardCell row = {this.props.rowNumber} col = {i} onclick={this.handleClick} updateStatues={this.updateCellStatus} cellStatus={this.props.cellStatuses[i]} key={i} updateStatus={this.props.cellUpdateFunction}></BoardCell>
            cells.push(cell);
        }
        return(
            <tr>
                {cells}
            </tr>
        )
    }
}



export default BoardCellRow;