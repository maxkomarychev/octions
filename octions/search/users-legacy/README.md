# Search users

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/search/legacy/#search-users

Find users by keyword.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/search/users-legacy@master
  id: my_step_id
  with:
    token: <token value>
    keyword: <keyword value>
    start_page: <start_page value>
    sort: <sort value>
    order: <order value>
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
|keyword|true|The search term.
|start_page|true|The page number to fetch.
|sort|true|The sort field. One of `stars`, `forks`, or `updated`. Default: results are sorted by best match.
|order|true|The sort field. if `sort` param is provided. Can be either `asc` or `desc`.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

