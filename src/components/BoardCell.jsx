import React from "react";
import './Board.css'
import CellStatus from "../CellStatus";
class BoardCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            row : this.props.row,
            col : this.props.col,
            cellStatus : this.props.cellStatus
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.updateStatus(this.state.row, this.state.col, this.state.cellStatus);
        // console.log(e);
    }

    render() {
        return(
            <td className="cell" onClick={this.handleClick} onContextMenu={this.handleClick}></td>
        )
    }
}


export default BoardCell;