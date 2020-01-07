# Create reaction for a commit comment

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/reactions/#create-reaction-for-a-commit-comment

Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this commit comment.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/reactions/create-for-commit-comment@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    comment_id: <comment_id value>
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
|comment_id|true|comment_id parameter
|content|true|The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the commit comment.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

