# Add or update interaction restrictions for an organization

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/interactions/orgs/#add-or-update-interaction-restrictions-for-an-organization

Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/interactions/add-or-update-restrictions-for-org@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    limit: <limit value>
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
|limit|true|Specifies the group of GitHub users who can comment, open issues, or create pull requests in public repositories for the given organization. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

