import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
//import './fonts.css';

import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  KebabToggle
} from '@patternfly/react-core';
import ThIcon from '@patternfly/react-icons/dist/js/icons/th-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';


class SimpleDropdown extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      this.onFocus();
    };
    this.onFocus = () => {
      const element = document.getElementById('toggle-id');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="waiting">Waiting</DropdownItem>,
      <DropdownItem key="skipped">Skipped</DropdownItem>,
      <DropdownItem key="running">Running</DropdownItem>,
      <DropdownItem key="completed">Completed</DropdownItem>,
      <DropdownItem key="failed">Failed</DropdownItem>,
      <DropdownItem key="canceled">Canceled</DropdownItem>
      /*
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled href="www.google.com">
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>

/*

const friendOptions = [
  {
    key: 'waiting',
    text: 'waiting',
    value: 'waiting',
  
  },
  {
    key: 'Skipped',
    text: 'Skipped',
    value: 'Skipped',
  
  },
  {
    key: 'Running',
    text: 'Running',
    value: 'Running',
    
  },
  {
    key: 'Completed',
    text: 'Completed',
    value: 'Completed',

  },
  {
    key: 'Failed',
    text: 'Failed',
    value: 'Failed',

  },
  {
    key: 'Canceled',
    text: 'Canceled',
    value: 'Canceled',
 
  },
]


*/


    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle id="toggle-id" onToggle={this.onToggle} toggleIndicator={CaretDownIcon}>
            State
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
export {SimpleDropdown}
//const rootElement = document.getElementById("root");
//ReactDOM.render(<SimpleDropdown />, rootElement);