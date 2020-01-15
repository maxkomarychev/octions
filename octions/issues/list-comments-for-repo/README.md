# List comments in a repository

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository

By default, Issue Comments are ordered by ascending ID.




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/issues/list-comments-for-repo@master
  id: my_step_id
  with:
    token: <token value>
    sort: <sort value>
    direction: <direction value>
    since: <since value>
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
|owner|false|owner parameter
|repo|false|repo parameter
|sort|true|Either `created` or `updated`.
|direction|true|Either `asc` or `desc`. Ignored without the `sort` parameter.
|since|true|Only comments updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
|file_output|false|Path to store full output of the action

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

