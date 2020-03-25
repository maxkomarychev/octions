# Delete a deployment

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/deployments/#delete-a-deployment

To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.

To set a deployment as inactive, you must:

*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
*   Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see "[Create a deployment](https://developer.github.com/v3/repos/deployments/#create-a-deployment)" and "[Create a deployment status](https://developer.github.com/v3/repos/deployments/#create-a-deployment-status)."


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/delete-deployment@master
  id: my_step_id
  with:
    token: <token value>
    deployment_id: <deployment_id value>
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
|deployment_id|true|deployment_id parameter
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

