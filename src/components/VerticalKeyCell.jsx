import React from 'react';

class VerticalKeyCell extends React.Component {
  constructor (props) {
    super(props);
    this.state = { labels: [] };
  }

  render () {
    const label_components = [];
    this.state.labels.forEach((label) => {
      label_components.push(
        <div>
          <p>{label}</p>
          <br />
        </div>
      );
    });
    return (
      <td class='cell'>
        {label_components}
      </td>
    );
  }
}

export default VerticalKeyCell;
