import ReactDOM from "react-dom";
import React, { useState } from 'react';
import HistoryIcon from "@patternfly/react-icons/dist/js/icons/history-icon";
import CubeIcon from "@patternfly/react-icons/dist/js/icons/cube-icon";
import { CheckCircleIcon } from '@patternfly/react-icons'
import './MonitorTasks.css';

import * as PulpCoreClient from '@app/pulpcore-client';

import {
    Button,
    Page,
    PageSection,
    PageSectionVariants,
    Text,
    TextContent,
} from "@patternfly/react-core";
import { TaskResponse } from "@app/pulpcore-client";

type taskList = {
  task_count: number | undefined, 
  task_results: Array<Object>;
}

const MonitorTasks: React.FunctionComponent = () => {
    const [taskData, setTaskData] = useState<taskList>({
      task_count: 0,
      task_results: []
    })

    const [taskTable, setTaskTable] = useState<JSX.Element[]>([<div key="taskTablePlaceholder">Please update tasks...</div>]);

    function taskREAD() {
        const getTaskData = async () => {
            const configuration = new PulpCoreClient.Configuration({username: 'admin', password: 'password', basePath: 'http://localhost:9000'});
            //const tasksAPI = new PulpCoreClient.TasksApi({configuration: configuration});
            const tasksAPI = new PulpCoreClient.TasksApi(configuration);
            const taskList = await tasksAPI.list();
            setTaskData({
              task_count: taskList.data.count,
              task_results: taskList.data.results
            }) 
        };
        getTaskData();
    }

    function on_click() {
        taskREAD();
        updateTaskTable();
    }

    React.useEffect(() => {
      taskREAD();
    }, []);

    function updateTaskTable(){
      let tableBuffer = []
      taskData.task_results.forEach(singleTask => {
        console.log(singleTask)
        tableBuffer.push(
          <tr key={singleTask.pulp_href}>
            <td>{singleTask.pulp_href}</td>
            <td>{singleTask.pulp_created}</td>
            <td>{singleTask.started_at}</td>
            <td>{singleTask.finished_at}</td>
            <td>{singleTask.state}</td>
          </tr>
        );
      })
      setTaskTable(tableBuffer);
      return tableBuffer
    }
    
    return ( 
        <Page>
            <PageSection variant={PageSectionVariants.light}>
                <TextContent>
                    <Text>
                        <h1>Task Example</h1>
                        <Button onClick={on_click}>Update Task</Button>
                    </Text>
                    <div>
                      <table>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Date Created</th>
                            <th>Started At</th>
                            <th>Finished At</th>
                            <th>States</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {taskTable}
                        </tbody>
                      </table>
                    </div>
                </TextContent>
            </PageSection>
        </Page >
    )
}

export { MonitorTasks };