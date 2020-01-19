# Search repositories

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/search/legacy/#search-repositories

Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the `start_page` parameter.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/search/repos-legacy@master
  id: my_step_id
  with:
    token: <token value>
    keyword: <keyword value>
    language: <language value>
    start_page: <start_page value>
    sort: <sort value>
    order: <order value>
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
|keyword|true|The search term.
|language|true|Filter results by language.
|start_page|true|The page number to fetch.
|sort|true|The sort field. One of `stars`, `forks`, or `updated`. Default: results are sorted by best match.
|order|true|The sort field. if `sort` param is provided. Can be either `asc` or `desc`.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

