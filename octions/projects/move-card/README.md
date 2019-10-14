# Move a project card

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/projects/cards/#move-a-project-card

This action implements `POST` request to `/projects/columns/cards/{card_id}/moves`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    card_id: <card_id value>
    position: <position value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|card_id|true|card_id parameter
|position|true|Can be one of `top`, `bottom`, or `after:<card_id>`, where `<card_id>` is the `id` value of a card in the same column, or in the new column specified by `column_id`.
|column_id|false|The `id` value of a column in the same project.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

