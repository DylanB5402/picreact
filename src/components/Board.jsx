import React from "react";
import VerticalKeyCell from "./VerticalKeyCell";

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
        for (var i = 0; i < this.state.width; i++) {
            
        }
        return (
            <table>
                {/* <tr>
                    {rows}
                </tr> */}
            </table>
        )
    }
}

export default Board;