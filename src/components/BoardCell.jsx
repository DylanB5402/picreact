import React from "react";
import './Board.css'

class BoardCell extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    }
    
    render() {
        return(
            <td class="cell" onClick={this.handleClick} onContextMenu={this.handleClick}></td>
        )
    }
}

const CellStatus = {
    UNKNOWN : 0,
    FILLED : 1,
    BLANK : 2,
    FILLED_X : 3,
    BLANK_X : 4
}

export default BoardCell;