# Start an organization migration

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/migrations/orgs/#start-an-organization-migration

This action implements `POST` request to `/orgs/{org}/migrations`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    repositories: <repositories value>
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
|repositories|true|A list of arrays indicating which repositories should be migrated.
|lock_repositories|false|Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
|exclude_attachments|false|Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

