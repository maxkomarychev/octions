# Create a project card

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/projects/cards/#create-a-project-card

This action implements `POST` request to `/projects/columns/{column_id}/cards`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    column_id: <column_id value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|column_id|true|column_id parameter
|note|false|The card's note content. Only valid for cards without another type of content, so you must omit when specifying `content_id` and `content_type`.
|content_id|false|The issue or pull request id you want to associate with this card. You can use the [List issues for a repository](https://developer.github.com/v3/issues/#list-issues-for-a-repository) and [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests) endpoints to find this id.   **Note:** Depending on whether you use the issue id or pull request id, you will need to specify `Issue` or `PullRequest` as the `content_type`.
|content_type|false|**Required if you provide `content_id`**. The type of content you want to associate with this card. Use `Issue` when `content_id` is an issue id and use `PullRequest` when `content_id` is a pull request id.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

