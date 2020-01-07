# Edit a hook

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/orgs/hooks/#edit-a-hook




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/orgs/update-hook@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    hook_id: <hook_id value>
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
|org|true|org parameter
|hook_id|true|hook_id parameter
|config|false|Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/orgs/hooks/#update-hook-config-params).
|events|false|Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for.
|active|false|Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

