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
import { Form, FormGroup, TextInput, Button, TextContent, ActionGroup, Text, TextVariants} from '@patternfly/react-core';
// Please only import things you need!

class NewForm extends React.Component{
  render (){
    return(
<Form>
<TextContent>
  <Text component={TextVariants.h1}>Create a New Respository</Text>
  </TextContent>
    <FormGroup
        label="Create a remote"
        isRequired
        fieldId="first-box"
        helperText="Type command here."
        >
          <TextInput
            isRequired
            type="text"
            placeholder="pulp rpm remote create --name 'remote-foo' --url 'https://fixtures.pulpproject.org/rpm-unsigned/'"
            id="first-box-input"
            name="first-box-input"
            aria-describedby="first-box-input"
          />
    </FormGroup>
    <FormGroup
        label="Create a repository"
        isRequired
        fieldId="second-box"
        helperText="Type command here."
    >
          <TextInput
            isRequired
            type="text"
            placeholder="pulp rpm repository create --name 'repo-foo' --autopublish --remote remote-foo"
            id="second-box-input"
            name="second-box-input"
            aria-describedby="second-box-input"
          />
    </FormGroup>
    <FormGroup
        label="Create a distribution"
        isRequired
        fieldId="third-box"
        helperText="Type command here."
    >
          <TextInput
            isRequired
            type="text"
            placeholder="pulp rpm distribution create --base-path path/foo --repository repo-foo --name dist-foo"
            id="third-box-input"
            name="third-box-input"
            aria-describedby="third-box-input"
          />
    </FormGroup>
    <ActionGroup>
          <Button variant="primary">Submit</Button>
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
