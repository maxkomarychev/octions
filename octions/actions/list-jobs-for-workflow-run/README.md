# List jobs for a workflow run

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/actions/workflow_jobs/#list-jobs-for-a-workflow-run

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/actions/list-jobs-for-workflow-run@master
  id: my_step_id
  with:
    token: <token value>
    run_id: <run_id value>
    filter: <filter value>
    per_page: <per_page value>
    page: <page value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
    echo ${{ steps.my_step_id.outputs.status }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|owner|false|owner parameter
|repo|false|repo parameter
|run_id|true|run_id parameter
|filter|true|Filters jobs by their `completed_at` timestamp. Can be one of:   \* `latest`: Returns jobs from the most recent execution of the workflow run.   \* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

