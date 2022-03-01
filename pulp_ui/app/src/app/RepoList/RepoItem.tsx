import React from 'react';

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
        <p>This is a repo item! name: {props.name}</p>
    </div>
}

export default RepoItem;