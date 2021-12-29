import React from "react";
import BoardCell from "./BoardCell";

class BoardCellRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {row_length : 5};
    }
    
    render() {
        var cells = [];
        for (var i = 0; i < this.state.row_length; i++) {
            cells.push(<BoardCell></BoardCell>)
        }
        return(
            <tr>
                {cells}
            </tr>
        )
    }
}



export default BoardCellRow;