import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
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
    const [listPromise, setListPromise] = useState<Promise<AxiosResponse<PulpRPMClient.PaginatedrpmRpmRemoteResponseList>>>();
    const [lastSync, setLastSync] = useState<string>('');

    useEffect(() => {
        const configuration = new PulpRPMClient.Configuration({username: 'admin', password: 'password', basePath: 'http://localhost:9000'});
        const remoteAPI = new PulpRPMClient.RemotesRpmApi(configuration);
        const tempList = remoteAPI.list();
        setListPromise(tempList);
    }, []);

    useEffect(() => {
        if(listPromise) {
            listPromise.then((temp) => {
                if(temp.data && temp.data.results && temp.data.results.length > 0 && temp.data.results[0].pulp_created) {
                    setLastSync(temp.data.results[0].pulp_created);
                }
                else {
                    setLastSync("Unavailable");
                }
            })
        }
    }, [listPromise]);

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
                    <p className='spacing-left'>Date of Last Sync: {lastSync}</p>
                    <div className='space-between-container'>
                        <Button className='spacing-right' variant="secondary">View History</Button>
                        <Button className='spacing-right' variant="danger">Sync</Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
}

export default RepoItem;