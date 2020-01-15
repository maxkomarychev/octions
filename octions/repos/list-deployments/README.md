# List deployments

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/deployments/#list-deployments

Simple filtering of deployments is available via query parameters:


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/list-deployments@master
  id: my_step_id
  with:
    token: <token value>
    sha: <sha value>
    ref: <ref value>
    task: <task value>
    environment: <environment value>
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
|sha|true|The SHA recorded at creation time.
|ref|true|The name of the ref. This can be a branch, tag, or SHA.
|task|true|The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
|environment|true|The name of the environment that was deployed to (e.g., `staging` or `production`).
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.
|file_output|false|Path to store full output of the action

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

