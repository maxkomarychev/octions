# Start a user migration

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/migrations/users/#start-a-user-migration

This action implements `POST` request to `/user/migrations`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
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
|repositories|true|An array of repositories to include in the migration.
|lock_repositories|false|Locks the `repositories` to prevent changes during the migration when set to `true`.
|exclude_attachments|false|Does not include attachments uploaded to GitHub.com in the migration data when set to `true`. Excluding attachments will reduce the migration archive file size.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

