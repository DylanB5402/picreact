import React from "react";
import './Board.css'
import CellStatus from "../CellStatus";
class BoardCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            row : this.props.row,
            col : this.props.col,
            trueCellStatus : this.props.cellStatus,
            renderedCellStatus : CellStatus.UNKNOWN
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        if (e.button === 0) {
            // this.updateCellStatus(CellStatus.FILLED);
            this.onLeftClick();
        } else if (e.button === 2) {
            // this.updateCellStatus(CellStatus.BLANK);
            this.onRightClick();
        }
        this.props.updateStatus(this.state.row, this.state.col, this.state.renderedCellStatus);
    }

    onLeftClick() {
        if (this.state.trueCellStatus != CellStatus.FILLED) {
            this.updateCellStatus(CellStatus.FILLED_X);
        } else {
            this.updateCellStatus(CellStatus.FILLED);
        }
    }

    onRightClick() {
        if (this.state.trueCellStatus != CellStatus.BLANK) {
            this.updateCellStatus(CellStatus.BLANK_X);
        } else {
            this.updateCellStatus(CellStatus.BLANK);
        }
    }

    updateCellStatus(newStatus) {
        this.setState({
            row : this.state.row,
            col : this.state.col,
            renderedCellStatus : newStatus,
            cellStatus : this.state.cellStatus
        })
    }

    getCellStateClass(status) {
        var cellStateClass;
        if (status === CellStatus.UNKNOWN) {
            cellStateClass = "cellUnknown";
        } else if (status === CellStatus.BLANK || status === CellStatus.BLANK_X) {
            cellStateClass = "cellBlank";
        } else if (status === CellStatus.FILLED || status === CellStatus.FILLED_X) {
            cellStateClass = "cellFilled";
        }
        return cellStateClass;
    }

    render() {
        var xClass = "";
        if (this.state.renderedCellStatus === CellStatus.BLANK_X || this.state.renderedCellStatus === CellStatus.FILLED_X) {
            xClass = "cellWrong"
        }
        var cellStateClass;
        if (this.props.showTrueState) {
            cellStateClass = this.getCellStateClass(this.state.trueCellStatus);
        } else {
            cellStateClass = this.getCellStateClass(this.state.renderedCellStatus);
        }
        
        return(
            <td className={"cell " + cellStateClass + " "+ xClass} onClick={this.handleClick} onContextMenu={this.handleClick}>
            </td>
        )
    }
}


export default BoardCell;