import React from "react";
import './Board.css'
import CellStatus from "../CellStatus";
class BoardCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            row : this.props.row,
            col : this.props.col,
            trueCellStatus : CellStatus.UNKNOWN,
            renderedCellStatus : CellStatus.UNKNOWN
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        if (e.button === 0) {
            this.updateCellStatus(CellStatus.FILLED);
        } else if (e.button === 2) {
            this.updateCellStatus(CellStatus.BLANK);
        }
        this.props.updateStatus(this.state.row, this.state.col, this.state.renderedCellStatus);
    }

    onLeftClick() {

    }

    updateCellStatus(newStatus) {
        this.setState({
            row : this.state.row,
            col : this.state.col,
            renderedCellStatus : newStatus,
            cellStatus : this.state.cellStatus
        })
    }

    render() {
        var xDiv;
        if (this.state.renderedCellStatus === CellStatus.BLANK_X || this.state.renderedCellStatus === CellStatus.FILLED_X) {
            xDiv = <div className="cellXDiv"><h1 className="cellX">X</h1></div>
        }
        var cellStateClass;
        if (this.state.renderedCellStatus === CellStatus.UNKNOWN) {
            cellStateClass = "cellUnknown";
        } else if (this.state.renderedCellStatus === CellStatus.BLANK) {
            cellStateClass = "cellBlank";
        } else if (this.state.renderedCellStatus === CellStatus.FILLED) {
            cellStateClass = "cellFilled";
        }
        return(
            <td className={"cell " + cellStateClass} onClick={this.handleClick} onContextMenu={this.handleClick}>
                {xDiv}
            </td>
        )
    }
}


export default BoardCell;