# List milestones for a repository

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/issues/milestones/#list-milestones-for-a-repository




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/issues/list-milestones-for-repo@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    state: <state value>
    sort: <sort value>
    direction: <direction value>
    per_page: <per_page value>
    page: <page value>
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
|state|true|The state of the milestone. Either `open`, `closed`, or `all`.
|sort|true|What to sort results by. Either `due_on` or `completeness`.
|direction|true|The direction of the sort. Either `asc` or `desc`.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

