# Start a user migration

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/migrations/users/#start-a-user-migration

Initiates the generation of a user migration archive.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/migrations/start-for-authenticated-user@master
  id: my_step_id
  with:
    token: <token value>
    repositories: <repositories value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|repositories|true|An array of repositories to include in the migration.
|lock_repositories|false|Locks the `repositories` to prevent changes during the migration when set to `true`.
|exclude_attachments|false|Does not include attachments uploaded to GitHub.com in the migration data when set to `true`. Excluding attachments will reduce the migration archive file size.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

