import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class CheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      selected: []
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectOption key={0} value="Debug" />,
      <SelectOption key={1} value="Info" />,
      <SelectOption key={2} value="Warn" />,
      <SelectOption key={3} value="Error" />,
    ];
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isCheckboxSelectionBadgeHidden
          isExpanded={isExpanded}
          placeholderText="Filter by status"
          ariaLabelledBy={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}

export{CheckboxSelectInput}