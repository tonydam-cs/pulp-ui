import * as React from 'react';
import { PageSection, Title, Button } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, textCenter, } from '@patternfly/react-table';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';
import { Dropdown } from 'semantic-ui-react';
import {SimpleDropdown} from './drop';
import {StartDropdown} from './StartDropDown';
import {FilterTableDemo} from './FilterTable';
import {CheckboxSelectInput} from './MultiSelect';
import styles from '@patternfly/react-styles/css/components/Table/table';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import { Checkbox } from '@patternfly/react-core';

import * as PulpCoreClient from '@app/pulpcore-client';
//import { Configuration } from '@app/js-client/configuration';
//import { StatusApi } from '@app/js-client/api';

//const params = PulpCoreClient.ConfigurationParameters();
const configuration = new PulpCoreClient.Configuration({username: 'pulp', password: 'password', basePath: 'http://localhost'});
const statusAPI = new PulpCoreClient.StatusApi({configuration: configuration});
const resp = statusAPI.statusRead();

var divStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px"
};
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

const Monitor: React.FunctionComponent = () => (
  <div style={divStyle}>
    {/*
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    */}



  <SimpleDropdown/>
  <StartDropdown/>
  <React.Fragment>
    <Checkbox label="Waiting" aria-label="Waiting"  id="Waiting " />
    <Checkbox label="Skipped" aria-label="Skipped" id="Skipped" />
    <Checkbox label="Running" aria-label="Running" id="Running" />
    <Checkbox label="Completed" aria-label="Completed" id="Completed" />
    <Checkbox label="Failed" aria-label="Failed" id="Failed" />
    <Checkbox label="Canceled" aria-label="Canceled" id="Canceled" />
  </React.Fragment>

  {/*
<Card>
<CardTitle>Name</CardTitle>
<CardBody>Description</CardBody>
<CardBody>Latest Version</CardBody>
<CardBody>Repo Type</CardBody>
<CardBody>Remote</CardBody>

</Card>
  */}

<FilterTableDemo/>
<Button variant="danger">Cancel</Button>
 


</div>
)

export { Monitor };


