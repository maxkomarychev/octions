# Download an organization migration archive

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/migrations/orgs/#download-an-organization-migration-archive

This action implements `GET` request to `/orgs/{org}/migrations/{migration_id}/archive`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    migration_id: <migration_id value>
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
|migration_id|true|migration_id parameter

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

