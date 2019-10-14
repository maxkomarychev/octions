# Add or update team membership

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/teams/members/#add-or-update-team-membership

This action implements `PUT` request to `/teams/{team_id}/memberships/{username}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    team_id: <team_id value>
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
|team_id|true|team_id parameter
|username|true|username parameter
|role|false|The role that this user should have in the team. Can be one of:   \* `member` - a normal member of the team.   \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

