import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import * as PulpCoreClient from '@app/pulpcore-client';
import * as PulpRPMClient from '@app/pulp_rpm-client';
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

    const [list, setList] = useState<JSX.Element[]>([<p key="rp_list_placeholder">Loading repository list...</p>]);
    const [remotePromise, setRemotePromise] = useState<Promise<Response>>();

    useEffect(() => {
        const configuration = new PulpCoreClient.Configuration({username: 'admin', password: 'password', basePath: 'http://localhost:9000'});
        const repoAPI = new PulpRPMClient.RemotesRpmApi(configuration);
        //const tempList = repoAPI.list();
        //setListPromise(tempList);
        const requestOptions = {
            headers: {
                'Authorization': 'Basic ' + btoa('admin:password')
            }
        }
        setRemotePromise(fetch('https://pulp/pulp/api/v3/remotes/file/file/', requestOptions));
    }, []);

    useEffect(() => {
        if(remotePromise) {
            remotePromise.then((temp) => {
                console.log('remote promise completed');
                console.group(temp);
            })
        }
    }, [remotePromise]);

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