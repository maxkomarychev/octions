# Delete a user migration archive

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/migrations/users/#delete-a-user-migration-archive

Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [Get a list of user migrations](https://developer.github.com/v3/migrations/users/#get-a-list-of-user-migrations) and [Get the status of a user migration](https://developer.github.com/v3/migrations/users/#get-the-status-of-a-user-migration) endpoints, will continue to be available even after an archive is deleted.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/migrations/delete-archive-for-authenticated-user@master
  id: my_step_id
  with:
    token: <token value>
    migration_id: <migration_id value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
    echo ${{ steps.my_step_id.outputs.status }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|migration_id|true|migration_id parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

