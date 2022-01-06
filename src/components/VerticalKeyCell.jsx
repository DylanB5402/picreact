import React from 'react';

class VerticalKeyCell extends React.Component {
  constructor (props) {
    super(props);
    this.state = { labels: [] };
  }

  render () {
    const labelComponents = [];
    this.state.labels.forEach((label) => {
      labelComponents.push(
        <div>
          <p>{label}</p>
          <br />
        </div>
      );
    });
    return (
      <td class='cell'>
        {labelComponents}
      </td>
    );
  }
}

export default VerticalKeyCell;
