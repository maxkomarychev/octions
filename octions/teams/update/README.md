# Edit team

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/teams/#edit-team

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/teams/update@master
  id: my_step_id
  with:
    token: <token value>
    team_id: <team_id value>
    name: <name value>
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
|team_id|true|team_id parameter
|name|true|The name of the team.
|description|false|The description of the team.
|privacy|false|The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:   **For a non-nested team:**   \* `secret` - only visible to organization owners and members of this team.   \* `closed` - visible to all members of this organization.   **For a parent or child team:**   \* `closed` - visible to all members of this organization.
|permission|false|**Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \* `pull` - team members can pull, but not push to or administer newly-added repositories.   \* `push` - team members can pull and push, but not administer newly-added repositories.   \* `admin` - team members can pull, push and administer newly-added repositories.
|parent_team_id|false|The ID of a team to set as the parent team.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

