# Create a gist

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/gists/#create-a-gist

Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/gists/create@master
  id: my_step_id
  with:
    token: <token value>
    files: <files value>
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
|files|true|The filenames and content of each file in the gist. The keys in the `files` object represent the filename and have the type `string`.
|description|false|A descriptive name for this gist.
|public|false|When `true`, the gist will be public and available for anyone to see.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

