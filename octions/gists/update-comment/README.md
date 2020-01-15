# Edit a comment

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/gists/comments/#edit-a-comment




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/gists/update-comment@master
  id: my_step_id
  with:
    token: <token value>
    gist_id: <gist_id value>
    comment_id: <comment_id value>
    body: <body value>
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
|gist_id|true|gist_id parameter
|comment_id|true|comment_id parameter
|body|true|The comment text.
|file_output|false|Path to store full output of the action

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

