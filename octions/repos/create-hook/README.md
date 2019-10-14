# Create a hook

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/hooks/#create-a-hook

This action implements `POST` request to `/repos/{owner}/{repo}/hooks`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    config: <config value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|owner|true|owner parameter
|repo|true|repo parameter
|name|false|Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.
|config|true|Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/repos/hooks/#create-hook-config-params).
|events|false|Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for.
|active|false|Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

