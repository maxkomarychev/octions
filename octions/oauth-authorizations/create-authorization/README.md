# Create a new authorization

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization

This action implements `POST` request to `/authorizations`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    note: <note value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|scopes|false|A list of scopes that this authorization is in.
|note|true|A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.
|note_url|false|A URL to remind you what app the OAuth token is for.
|client_id|false|The 20 character OAuth app client key for which to create the token.
|client_secret|false|The 40 character OAuth app client secret for which to create the token.
|fingerprint|false|A unique string to distinguish an authorization from others created for the same client ID and user.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

