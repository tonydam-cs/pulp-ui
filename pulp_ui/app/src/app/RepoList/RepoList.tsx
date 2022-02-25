import React, { useState } from 'react';


import * as PulpCoreClient from '@app/pulpcore-client';

const RepoList= () => {
    
    const getRepoList = async () => {
        const configuration = new PulpCoreClient.Configuration({username: 'admin', password: 'password', basePath: 'http://localhost:9000'});
        const repoAPI = new PulpCoreClient.RepositoriesApi({configuration: configuration});
        const tempList = await repoAPI.list();
        console.log(list)
        return tempList;
    }
    const [list, setList] = useState(getRepoList());

    const getFormattedList = () => {
        //let formattedList = [];
        console.log(list)
        return <p>This is placeholder text for the repo list</p>
    }
    return <div>
        <h1>This is the repo list page!</h1>
        {getFormattedList()}
    </div>
}

export { RepoList };