import React from "react";
import './Board.css'
import CellStatus from "../CellStatus";
class BoardCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            row : this.props.row,
            col : this.props.col,
            cellStatus : CellStatus.UNKNOWN
        }
    }

    
    render() {
        return(
            <td class="cell" onClick={this.props.onClick} onContextMenu={this.handleClick}></td>
        )
    }
}


export default BoardCell;