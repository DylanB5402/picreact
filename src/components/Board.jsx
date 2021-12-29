import React from "react";
import VerticalKeyCell from "./VerticalKeyCell";
import BoardCellRow from "./BoardCellRow";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {height : 5, width : 5}
    }

    render() {
        var rows = []
        for (var i = 0; i < this.state.width; i ++) {
            rows.push(<VerticalKeyCell></VerticalKeyCell>)
        }
        var cell_rows = []
            for (var j = 0; j < this.state.height; j++) { 
                cell_rows.push(<BoardCellRow></BoardCellRow>)
        }
        return (
            <table id="board">
                {cell_rows}
            </table>
        )
    }
}

export default Board;