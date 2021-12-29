import React from "react";

class VerticalKeyCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {labels : [1, 2, 3]}
    }
    
    render() {
        var label_components = [];
        this.state.labels.forEach((label) => {
            label_components.push(
                <div>
                    <p>{label}</p>
                    <br/>
                </div>
            )
        })
        return(
            <td>
                {label_components}
            </td>
        )
    }
}

export default VerticalKeyCell;