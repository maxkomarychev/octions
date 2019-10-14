# Create a content attachment

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/apps/installations/#create-a-content-attachment

This action implements `POST` request to `/content_references/{content_reference_id}/attachments`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    content_reference_id: <content_reference_id value>
    title: <title value>
    body: <body value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|content_reference_id|true|content_reference_id parameter
|title|true|The title of the content attachment displayed in the body or comment of an issue or pull request.
|body|true|The body text of the content attachment displayed in the body or comment of an issue or pull request. This parameter supports markdown.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

