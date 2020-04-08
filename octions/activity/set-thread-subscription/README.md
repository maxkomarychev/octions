# Set a thread subscription

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.

You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription) endpoint.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/activity/set-thread-subscription@master
  id: my_step_id
  with:
    token: <token value>
    thread_id: <thread_id value>
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
|thread_id|true|thread_id parameter
|ignored|false|Unsubscribes and subscribes you to a conversation. Set `ignored` to `true` to block all notifications from this thread.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

