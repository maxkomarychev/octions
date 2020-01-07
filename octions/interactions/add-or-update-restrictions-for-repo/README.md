# Add or update interaction restrictions for a repository

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/interactions/repos/#add-or-update-interaction-restrictions-for-a-repository

Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/interactions/add-or-update-restrictions-for-repo@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
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
|owner|true|owner parameter
|repo|true|repo parameter
|limit|true|Specifies the group of GitHub users who can comment, open issues, or create pull requests for the given repository. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

