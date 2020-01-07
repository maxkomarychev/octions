# Perform a merge

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/merging/#perform-a-merge




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/merge@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    base: <base value>
    head: <head value>
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
|base|true|The name of the base branch that the head will be merged into.
|head|true|The head to merge. This can be a branch name or a commit SHA1.
|commit_message|false|Commit message to use for the merge commit. If omitted, a default message will be used.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

