# Create a comment

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/gists/comments/#create-a-comment

This action implements `POST` request to `/gists/{gist_id}/comments`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    gist_id: <gist_id value>
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
|gist_id|true|gist_id parameter
|body|true|The comment text.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

