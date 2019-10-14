# Create team

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/teams/#create-team

This action implements `POST` request to `/orgs/{org}/teams`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
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
|org|true|org parameter
|name|true|The name of the team.
|description|false|The description of the team.
|maintainers|false|The logins of organization members to add as maintainers of the team.
|repo_names|false|The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
|privacy|false|The level of privacy this team should have. The options are:   **For a non-nested team:**   \* `secret` - only visible to organization owners and members of this team.   \* `closed` - visible to all members of this organization.   Default: `secret`   **For a parent or child team:**   \* `closed` - visible to all members of this organization.   Default for child team: `closed`   **Note**: You must pass the `hellcat-preview` media type to set privacy default to `closed` for child teams.
|permission|false|**Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \* `pull` - team members can pull, but not push to or administer newly-added repositories.   \* `push` - team members can pull and push, but not administer newly-added repositories.   \* `admin` - team members can pull, push and administer newly-added repositories.
|parent_team_id|false|The ID of a team to set as the parent team. **Note**: You must pass the `hellcat-preview` media type to use this parameter.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

