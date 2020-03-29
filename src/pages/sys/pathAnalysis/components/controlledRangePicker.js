import React ,{ Component }from 'react';
import {DatePicker} from 'antd';
const { RangePicker } = DatePicker;
class ControlledRangePicker extends Component {
  state = {
    mode: ['year', 'year'],
    value: [],
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [mode[0] === 'date' ? 'year' : mode[0], mode[1] === 'date' ? 'year' : mode[1]],
    });
  };

  handleChange = value => {
    this.setState({ value });
  };
  render() {
    const { value, mode } = this.state;
    return (
      <RangePicker
        placeholder={['Start month', 'End month']}
        format="YYYY"
        value={value}
        mode={mode}
        onChange={this.handleChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}
export default ControlledRangePicker;
