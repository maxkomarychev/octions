# Remove a credential authorization for an organization

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/orgs/#remove-a-credential-authorization-for-an-organization

This action implements `DELETE` request to `/orgs/{org}/credential-authorizations/{credential_id}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    credential_id: <credential_id value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|org|true|org parameter
|credential_id|true|credential_id parameter

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

