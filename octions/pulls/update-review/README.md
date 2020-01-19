# Update a pull request review

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/pulls/reviews/#update-a-pull-request-review

Update the review summary comment with new text.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/pulls/update-review@master
  id: my_step_id
  with:
    token: <token value>
    pull_number: <pull_number value>
    review_id: <review_id value>
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
|owner|false|owner parameter
|repo|false|repo parameter
|pull_number|true|pull_number parameter
|review_id|true|review_id parameter
|body|true|The body text of the pull request review.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

