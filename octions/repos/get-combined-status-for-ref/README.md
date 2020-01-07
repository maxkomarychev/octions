# Get the combined status for a specific ref

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.

The most recent status for each context is returned, up to 100. This field [paginates](https://developer.github.com/v3/#pagination) if there are over 100 contexts.

Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/get-combined-status-for-ref@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    ref: <ref value>
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
|ref|true|ref parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

