# Review a user's permission level

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/projects/collaborators/#review-a-users-permission-level

This action implements `GET` request to `/projects/{project_id}/collaborators/{username}/permission`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    project_id: <project_id value>
    username: <username value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|project_id|true|project_id parameter
|username|true|username parameter

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

