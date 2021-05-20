import React from 'react';
import { Toolbar, ToolbarItem, ToolbarContent, ToolbarToggleGroup, ToolbarGroup } from '@patternfly/react-core';
import { Button, ButtonVariant, InputGroup, Select, SelectOption, TextInput } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';

class ToolbarComponentMangedToggleGroup extends React.Component<{}, any> {
  statusOptions: ({ value: string; disabled: boolean; isPlaceholder: boolean; } | { value: string; disabled: boolean; isPlaceholder?: undefined; })[];
  riskOptions: ({ value: string; disabled: boolean; isPlaceholder: boolean; } | { value: string; disabled: boolean; isPlaceholder?: undefined; })[];
  onInputChange: (newValue: any) => void;
  onStatusToggle: (isExpanded: any) => void;
  onStatusSelect: (event: any, selection: any, isPlaceholder: any) => void;
  onRiskToggle: (isExpanded: any) => void;
  onRiskSelect: (event: any, selection: any, isPlaceholder: any) => void;

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      statusIsExpanded: false,
      statusSelected: null,
      riskIsExpanded: false,
      riskSelected: null
    };

    this.statusOptions = [
      { value: 'Status', disabled: false, isPlaceholder: true },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Running', disabled: false },
      { value: 'Cancelled', disabled: false }
    ];

    this.riskOptions = [
      { value: 'Repo Type', disabled: false, isPlaceholder: true },
      { value: 'File', disabled: false },
      { value: 'RPM', disabled: false },
      { value: 'Deb', disabled: false },
      { value: 'Container', disabled: false },
      { value: 'Python', disabled: false }
    ];

    this.onInputChange = newValue => {
      this.setState({ inputValue: newValue });
    };

    this.onStatusToggle = isExpanded => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };

    this.onStatusSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearStatusSelection();
      this.setState({
        statusSelected: selection,
        statusIsExpanded: false
      });
    };

    this.clearStatusSelection = () => {
      this.setState({
        statusSelected: null,
        statusIsExpanded: false
      });
    };

    this.onRiskToggle = isExpanded => {
      this.setState({
        riskIsExpanded: isExpanded
      });
    };

    this.onRiskSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearRiskSelection();
      this.setState({
        riskSelected: selection,
        riskIsExpanded: false
      });
    };

    this.clearRiskSelection = () => {
      this.setState({
        riskSelected: null,
        riskIsExpanded: false
      });
    };
  }
    clearStatusSelection() {
        throw new Error('Method not implemented.');
    }
    clearRiskSelection() {
        throw new Error('Method not implemented.');
    }

  render() {
    const { inputValue, statusIsExpanded, statusSelected, riskIsExpanded, riskSelected } = this.state;

    const toggleGroupItems = (
      <React.Fragment>
        <ToolbarItem>
          <InputGroup>
            <TextInput
              name="textInput2"
              id="textInput2"
              type="search"
              aria-label="search input example"
              onChange={this.onInputChange}
              value={inputValue}
            />
            <Button variant={ButtonVariant.control} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroup>
        </ToolbarItem>
        <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <Select
              variant='single'
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isOpen={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
                <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </Select>
          </ToolbarItem>
          <ToolbarItem>
            <Select
              variant='single'
              aria-label="Select Input"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isOpen={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </Select>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem>
            <Button variant="primary">Create New</Button>
        </ToolbarItem>
      </React.Fragment>
    );

    const items = (
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
        {toggleGroupItems}
      </ToolbarToggleGroup>
    );

    return (
      <Toolbar id="toolbar-component-managed-toggle-groups" className="pf-m-toggle-group-container">
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
  }
}

export {ToolbarComponentMangedToggleGroup}