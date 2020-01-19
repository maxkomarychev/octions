# Create a project card

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/projects/cards/#create-a-project-card

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/projects/create-card@master
  id: my_step_id
  with:
    token: <token value>
    column_id: <column_id value>
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
|column_id|true|column_id parameter
|note|false|The card's note content. Only valid for cards without another type of content, so you must omit when specifying `content_id` and `content_type`.
|content_id|false|The issue or pull request id you want to associate with this card. You can use the [List issues for a repository](https://developer.github.com/v3/issues/#list-issues-for-a-repository) and [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests) endpoints to find this id.   **Note:** Depending on whether you use the issue id or pull request id, you will need to specify `Issue` or `PullRequest` as the `content_type`.
|content_type|false|**Required if you provide `content_id`**. The type of content you want to associate with this card. Use `Issue` when `content_id` is an issue id and use `PullRequest` when `content_id` is a pull request id.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

