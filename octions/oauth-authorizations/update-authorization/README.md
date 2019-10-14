# Update an existing authorization

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization

This action implements `PATCH` request to `/authorizations/{authorization_id}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    authorization_id: <authorization_id value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|authorization_id|true|authorization_id parameter
|scopes|false|Replaces the authorization scopes with these.
|add_scopes|false|A list of scopes to add to this authorization.
|remove_scopes|false|A list of scopes to remove from this authorization.
|note|false|A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.
|note_url|false|A URL to remind you what app the OAuth token is for.
|fingerprint|false|A unique string to distinguish an authorization from others created for the same client ID and user.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

