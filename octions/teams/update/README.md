# Edit team

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/teams/#edit-team

This action implements `PATCH` request to `/teams/{team_id}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    team_id: <team_id value>
    name: <name value>
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
|name|true|The name of the team.
|description|false|The description of the team.
|privacy|false|The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:   **For a non-nested team:**   \* `secret` - only visible to organization owners and members of this team.   \* `closed` - visible to all members of this organization.   **For a parent or child team:**   \* `closed` - visible to all members of this organization.
|permission|false|**Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \* `pull` - team members can pull, but not push to or administer newly-added repositories.   \* `push` - team members can pull and push, but not administer newly-added repositories.   \* `admin` - team members can pull, push and administer newly-added repositories.
|parent_team_id|false|The ID of a team to set as the parent team. **Note**: You must pass the `hellcat-preview` media type to use this parameter.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

