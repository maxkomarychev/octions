# Create reaction for an issue

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/reactions/#create-reaction-for-an-issue

Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/reactions/create-for-issue@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    issue_number: <issue_number value>
    content: <content value>
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
|issue_number|true|issue_number parameter
|content|true|The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

