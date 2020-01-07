# Get a release by tag name

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/releases/#get-a-release-by-tag-name

Get a published release with the specified tag.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/get-release-by-tag@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    tag: <tag value>
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
|tag|true|tag parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

