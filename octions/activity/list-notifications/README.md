# List your notifications

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/activity/notifications/#list-your-notifications

List all notifications for the current user, sorted by most recently updated.

The following example uses the `since` parameter to list notifications that have been updated after the specified time.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/activity/list-notifications@master
  id: my_step_id
  with:
    token: <token value>
    all: <all value>
    participating: <participating value>
    since: <since value>
    before: <before value>
    per_page: <per_page value>
    page: <page value>
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
|all|true|If `true`, show notifications marked as read.
|participating|true|If `true`, only shows notifications in which the user is directly participating or mentioned.
|since|true|Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
|before|true|Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

