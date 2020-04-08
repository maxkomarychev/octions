# Add or update team repository

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/teams/#add-or-update-team-repository

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/:org_id/team/:team_id/repos/:owner/:repo`.

For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)" in the GitHub Help documentation.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/teams/add-or-update-repo-in-org@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    team_slug: <team_slug value>
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
|team_slug|true|team_slug parameter
|owner|false|owner parameter
|repo|false|repo parameter
|permission|false|The permission to grant the team on this repository. Can be one of:   \* `pull` - team members can pull, but not push to or administer this repository.   \* `push` - team members can pull and push, but not administer this repository.   \* `admin` - team members can pull, push and administer this repository.   \* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.   \* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.      If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

