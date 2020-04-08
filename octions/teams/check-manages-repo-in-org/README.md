# Check if a team manages a repository

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository

Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/repos/:owner/:repo`.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/teams/check-manages-repo-in-org@master
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
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

