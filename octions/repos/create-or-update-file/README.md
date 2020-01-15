# Create or update a file

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/contents/#create-or-update-a-file

Creates a new file or updates an existing file in a repository.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/create-or-update-file@master
  id: my_step_id
  with:
    token: <token value>
    path: <path value>
    message: <message value>
    content: <content value>
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
|path|true|path parameter
|message|true|The commit message.
|content|true|The new file content, using Base64 encoding.
|sha|false|**Required if you are updating a file**. The blob SHA of the file being replaced.
|branch|false|The branch name. Default: the repository’s default branch (usually `master`)
|committer|false|The person that committed the file. Default: the authenticated user.
|author|false|The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal  `custom_outputs: |<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

