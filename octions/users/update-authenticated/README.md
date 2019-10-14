# Update the authenticated user

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/users/#update-the-authenticated-user

This action implements `PATCH` request to `/user`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|name|false|The new name of the user.
|email|false|The publicly visible email address of the user.
|blog|false|The new blog URL of the user.
|company|false|The new company of the user.
|location|false|The new location of the user.
|hireable|false|The new hiring availability of the user.
|bio|false|The new short biography of the user.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

