// Create a new form for creating a new repository.
import ReactDOM from "react-dom";
import React from 'react';
import { TextInput } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

import {
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants
} from '@patternfly/react-core';


const Headings = () => (
  <TextContent>
    <Text component={TextVariants.h1}>Create a New Repository</Text>
    <Text component={TextVariants.h2}>Second level</Text>
    <Text component={TextVariants.h3}>Third level</Text>
    <Text component={TextVariants.h4}>Fourth level</Text>
    <Text component={TextVariants.h5}>Fifth level</Text>
    <Text component={TextVariants.h6}>Sixth level</Text>
  </TextContent>
)

class SimpleTextInput extends React.Component {
  handleTextInputChange: (value: any) => void;
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleTextInputChange = value => {
      this.setState({ value });
    };
  }

  render() {
    const { value } = this.state;

    return (
      <TextInput value={value} type="text" onChange={this.handleTextInputChange} aria-label="text input example" />
    );
  }
}

export const ButtonVariations: React.FunctionComponent = () => (
  <React.Fragment>
    <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="secondary" isDanger>
      Danger Secondary
    </Button>{' '}
    <Button variant="tertiary">Tertiary</Button> <Button variant="danger">Danger</Button>{' '}
    <Button variant="warning">Warning</Button>
    <br />
    <br />
    
    <br />
    <br />
    <Button variant="plain" aria-label="Action">
      <TimesIcon />
    </Button>
    <br />
    <br />
    <Button variant="control">Control</Button>{' '}
    <Button variant="control" aria-label="Copy">
      <CopyIcon />
    </Button>
  </React.Fragment>
);
