/**********************************************************************
 * Author: Stephanie La (student at Umass Lowell)
 * My task was to create a new page for creating a repository.
 * So I needed three fields: Create a remote, create a repository,
 * and create a distribution. I have created 3 fields for each,
 * with captions and placeholder text as an example so people 
 * know what to put in each box. This is currently only static 
 * UI so more work must be done to route this page with the create
 * button on the dashboard page. Data will not be saved and 
 * potentially must be saved (may need to use state values and more).
 * Not really sure what is fieldId, id, name, or aria-describedby, but
 * I think they're just identifiers. If needed to change, just go ahead.
 * I just used filler strings to fill these properties.
 * Website for reference: 
 * https://www.patternfly.org/v4/components/form
 * https://www.patternfly.org/v4/components/button/
 * 
 */

import React from 'react';
import { Form, FormGroup, TextInput, InputGroup, Button, TextContent, ActionGroup, Text, TextVariants} from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
// Please only import things you need!

// this has problems. const functions don't really work with class components.
// May need to change/revise below into function component.
// const ProgressButton: React.FunctionComponent = () => {
//   const [loginState, setLoginState] = React.useState<'notLoggedIn' | 'loading' | 'loggedIn'>('notLoggedIn');

class NewForm extends React.Component{
  render (){
    return(
<Form>
<TextContent>
  <Text component={TextVariants.h1}>Create a New Respository</Text>
  </TextContent>
    <FormGroup
        label="Name"
        isRequired
        fieldId="first-box"
        >
          <TextInput
            isRequired
            type="text"
            id="first-box-input"
            name="first-box-input"
            aria-describedby="first-box-input"
          />
    </FormGroup>
    <FormGroup
        label="URL"
        isRequired
        fieldId="second-box"
    >
          <TextInput
            isRequired
            type="text"
            id="second-box-input"
            name="second-box-input"
            aria-describedby="second-box-input"
          />
    </FormGroup>
    <FormGroup
        label="Base Path"
        isRequired
        fieldId="third-box"
    >
          <TextInput
            isRequired
            type="text"
            id="third-box-input"
            name="third-box-input"
            aria-describedby="third-box-input"
          />
    </FormGroup>
    <ActionGroup>
          <Button variant="primary">Create</Button>
          <Button variant="link">Cancel</Button>
        </ActionGroup>
    {/* <React.Fragment>
    <Button type="submit">Submit</Button> 
  </React.Fragment> */}
      </Form>
    );
  }
}
export {NewForm}
