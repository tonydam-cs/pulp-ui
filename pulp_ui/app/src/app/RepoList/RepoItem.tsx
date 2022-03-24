import React from 'react';
import { Button, Card, CardHeader, CardBody, Divider } from '@patternfly/react-core';
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
        <Card isHoverable className='card'>
            <CardHeader>
                {props.name && 
                    <Button variant='link'>
                        <h1 className='card-header'>{props.name}</h1>
                    </Button>
                }
                {!props.name &&
                    <Button variant='link'>
                        <h1 className='card-header'>Repository Name Unavailable</h1>
                    </Button>
                }
            </CardHeader>
            
            <CardBody>
            <Divider className='spacing-bottom' component='div'/>
                <div className='space-between-container'>
                    <p className='spacing-left'>Last Sync: </p>
                    <div className='space-between-container'>
                        <Button className='spacing-right' variant="secondary">View Sync History</Button>
                        <Button className='spacing-right' variant="danger">Sync</Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
}

export default RepoItem;