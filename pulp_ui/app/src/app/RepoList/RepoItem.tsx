import React from 'react';
import { Button, Card, CardHeader, CardBody } from '@patternfly/react-core';
import './RepoList.css';
/*
List of possible props / fields returned by API call (full descriptions 
at https://docs.pulpproject.org/pulpcore/restapi.html#operation/repositories_list):
name
pulp_href
pulp_created
versions_href	
pulp_labels	
latest_version_href	
name
description	
retain_repo_versions
*/
const RepoItem = (props) => {
    console.log(props);

    return <div>
        <Card isHoverable>
            <CardHeader>
                {props.name && 
                    <Button variant='link'>
                        <h1 className='card-header'>{props.name}</h1>
                    </Button>
                }
            </CardHeader>
            <CardBody className='space-between-container'>
                <p className='side-spacing-left'>Last Sync: </p>
                <div className='space-between-container'>
                    <Button className='side-spacing-right' variant="secondary">View Sync History</Button>
                    <Button className='side-spacing-right' variant="danger">Sync</Button>
                </div>
            </CardBody>
        </Card>
    </div>
}

export default RepoItem;