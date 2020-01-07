# Get team by name

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/teams/#get-team-by-name

Gets a team using the team's `slug`. GitHub generates the `slug` from the team `name`.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/teams/get-by-name@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    team_slug: <team_slug value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|org|true|org parameter
|team_slug|true|team_slug parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

