# Transfer a repository

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/#transfer-a-repository

This action implements `POST` request to `/repos/{owner}/{repo}/transfer`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|owner|true|owner parameter
|repo|true|repo parameter
|new_owner|false|**Required:** The username or organization name the repository will be transferred to.
|team_ids|false|ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

