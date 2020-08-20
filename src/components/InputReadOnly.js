import React, { Component } from 'react';
import { formatPercentage, formatMoney } from '../helpers/formatters';

export default class InputReadOnly extends Component {
  handleInputChange = (event) => {
    const newValue = +event.target.value;
    this.props.onSalaryChange(newValue);
  };

  render() {
    const { color = 'black', value, percentage = 0, label } = this.props;
    const id = 'input' + label;
    const formattedPercentage =
      percentage > 0 ? `(${formatPercentage(percentage)})` : '';
    const formattedValue = `${formatMoney(value)} ${formattedPercentage}`;

    return (
      <div className="input-field col s12 m6 l3">
        <input
          id={id}
          type="text"
          value={formattedValue}
          readOnly
          style={{ color, fontWeight: 'bold' }}
        />
        <label className="active" htmlFor="inputReadOnly">
          {label}
        </label>
      </div>
    );
  }
}
