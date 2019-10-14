# Get-or-create an authorization for a specific app and fingerprint

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint

This action implements `PUT` request to `/authorizations/clients/{client_id}/{fingerprint}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    client_id: <client_id value>
    fingerprint: <fingerprint value>
    client_secret: <client_secret value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|client_id|true|client_id parameter
|fingerprint|true|fingerprint parameter
|client_secret|true|The 40 character OAuth app client secret associated with the client ID specified in the URL.
|scopes|false|A list of scopes that this authorization is in.
|note|false|A note to remind you what the OAuth token is for.
|note_url|false|A URL to remind you what app the OAuth token is for.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

