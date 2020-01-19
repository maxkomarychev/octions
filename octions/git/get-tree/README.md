# Get a tree

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/git/trees/#get-a-tree

If `truncated` is `true`, the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, you can clone the repository and iterate over the Git data locally.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/git/get-tree@master
  id: my_step_id
  with:
    token: <token value>
    tree_sha: <tree_sha value>
    recursive: <recursive value>
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
|tree_sha|true|tree_sha parameter
|recursive|true|recursive parameter
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

