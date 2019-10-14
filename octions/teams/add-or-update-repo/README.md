# Add or update team repository

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/teams/#add-or-update-team-repository

This action implements `PUT` request to `/teams/{team_id}/repos/{owner}/{repo}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    team_id: <team_id value>
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
|team_id|true|team_id parameter
|owner|true|owner parameter
|repo|true|repo parameter
|permission|false|The permission to grant the team on this repository. Can be one of:   \* `pull` - team members can pull, but not push to or administer this repository.   \* `push` - team members can pull and push, but not administer this repository.   \* `admin` - team members can pull, push and administer this repository.      If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.   **Note**: If you pass the `hellcat-preview` media type, you can promote—but not demote—a `permission` attribute inherited through a parent team.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

