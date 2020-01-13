# Create team

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/teams/#create-team

To create a team, the authenticated user must be a member or owner of `:org`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)" in the GitHub Help documentation.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/teams/create@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
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
|org|true|org parameter
|name|true|The name of the team.
|description|false|The description of the team.
|maintainers|false|List GitHub IDs for organization members who will become team maintainers.
|repo_names|false|The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
|privacy|false|The level of privacy this team should have. The options are:   **For a non-nested team:**   \* `secret` - only visible to organization owners and members of this team.   \* `closed` - visible to all members of this organization.   Default: `secret`   **For a parent or child team:**   \* `closed` - visible to all members of this organization.   Default for child team: `closed`
|permission|false|**Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \* `pull` - team members can pull, but not push to or administer newly-added repositories.   \* `push` - team members can pull and push, but not administer newly-added repositories.   \* `admin` - team members can pull, push and administer newly-added repositories.
|parent_team_id|false|The ID of a team to set as the parent team.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

