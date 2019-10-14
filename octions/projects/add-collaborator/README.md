# Add user as a collaborator

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/projects/collaborators/#add-user-as-a-collaborator

This action implements `PUT` request to `/projects/{project_id}/collaborators/{username}`


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
|permission|false|The permission to grant the collaborator. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)." Can be one of:   \* `read` - can read, but not write to or administer this project.   \* `write` - can read and write, but not administer this project.   \* `admin` - can read, write and administer this project.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

