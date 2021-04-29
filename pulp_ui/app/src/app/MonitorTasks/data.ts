// export interface Task {
//     pulp_href: string;
//     "pulp_created":"2021-04-19T14:59:57.470596Z",
//     "state":"completed",
//     "name":"pulpcore.app.tasks.base.general_delete",
//     "logging_cid":"7a6d7d6de7d04b8ea8aee791ee7afb1e",
//     "started_at":"2021-04-19T14:59:57.849885Z",
//     "finished_at":"2021-04-19T14:59:58.025496Z",
//     "error":null,
//     "worker":"/pulp/api/v3/workers/5ceeb724-4e4a-4d15-9e4f-12780c5e513c/",
//     "parent_task":null,
//     "child_tasks":[],
//     "task_group":null,
//     "progress_reports":[],
//     "created_resources":[]
// };

const TASK_DATA = [
    {
        "pulp_href":"/pulp/api/v3/tasks/d159fdc9-0fc0-48d8-8ef9-9633229a634c/",
        "pulp_created":"2021-04-19T14:59:57.470596Z",
        "state":"completed",
        "name":"pulpcore.app.tasks.base.general_delete",
        "logging_cid":"7a6d7d6de7d04b8ea8aee791ee7afb1e",
        "started_at":"2021-04-19T14:59:57.849885Z",
        "finished_at":"2021-04-19T14:59:58.025496Z",
        "error":null,
        "worker":"/pulp/api/v3/workers/5ceeb724-4e4a-4d15-9e4f-12780c5e513c/",
        "parent_task":null,
        "child_tasks":[],
        "task_group":null,
        "progress_reports":[],
        "created_resources":[]
    },
    {
        "pulp_href":"/pulp/api/v3/tasks/d159fdc9-0fc0-48d8-8ef9-9633229a634c/",
        "pulp_created":"2021-04-19T14:59:57.470596Z",
        "state":"completed",
        "name":"pulpcore.app.tasks.base.general_delete",
        "logging_cid":"7a6d7d6de7d04b8ea8aee791ee7afb1e",
        "started_at":"2021-04-19T14:59:57.849885Z",
        "finished_at":"2021-04-19T14:59:58.025496Z",
        "error":null,
        "worker":"/pulp/api/v3/workers/5ceeb724-4e4a-4d15-9e4f-12780c5e513c/",
        "parent_task":null,
        "child_tasks":[],
        "task_group":null,
        "progress_reports":[],
        "created_resources":[]
    },
    {
        "pulp_href":"/pulp/api/v3/tasks/d159fdc9-0fc0-48d8-8ef9-9633229a634c/",
        "pulp_created":"2021-04-19T14:59:57.470596Z",
        "state":"completed",
        "name":"pulpcore.app.tasks.base.general_delete",
        "logging_cid":"7a6d7d6de7d04b8ea8aee791ee7afb1e",
        "started_at":"2021-04-19T14:59:57.849885Z",
        "finished_at":"2021-04-19T14:59:58.025496Z",
        "error":null,
        "worker":"/pulp/api/v3/workers/5ceeb724-4e4a-4d15-9e4f-12780c5e513c/",
        "parent_task":null,
        "child_tasks":[],
        "task_group":null,
        "progress_reports":[],
        "created_resources":[]
    },
    {
        "pulp_href":"/pulp/api/v3/tasks/d159fdc9-0fc0-48d8-8ef9-9633229a634c/",
        "pulp_created":"2021-04-19T14:59:57.470596Z",
        "state":"completed",
        "name":"pulpcore.app.tasks.base.general_delete",
        "logging_cid":"7a6d7d6de7d04b8ea8aee791ee7afb1e",
        "started_at":"2021-04-19T14:59:57.849885Z",
        "finished_at":"2021-04-19T14:59:58.025496Z",
        "error":null,
        "worker":"/pulp/api/v3/workers/5ceeb724-4e4a-4d15-9e4f-12780c5e513c/",
        "parent_task":null,
        "child_tasks":[],
        "task_group":null,
        "progress_reports":[],
        "created_resources":[]
    }
]

const baseUrl = '...';

const TaskApi = {
    findAll: async (): Promise<any> => {
        // try {
        //     const resp = await fetch(`${baseUrl}/tasks`, {
        //         method: "POST",
        //         body: JSON.stringify({val: "hi"})
        //     });
        //     console.log(resp)
        //     if(resp.status == 200) {
        //         return await resp.json();
        //     } else {
        //         console.error("...");
        //         return null;
        //     }
        // } catch(err) {
        //     console.error("...");
        //     return null;
        // }

        return TASK_DATA;
    }
}

export default TaskApi;