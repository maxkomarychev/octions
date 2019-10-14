# Create a gist

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/gists/#create-a-gist

This action implements `POST` request to `/gists`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    files: <files value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|files|true|The filenames and content of each file in the gist. The keys in the `files` object represent the filename and have the type `string`.
|description|false|A descriptive name for this gist.
|public|false|When `true`, the gist will be public and available for anyone to see.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

