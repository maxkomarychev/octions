# Update a project card

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/projects/cards/#update-a-project-card

This action implements `PATCH` request to `/projects/columns/cards/{card_id}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    card_id: <card_id value>
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
|note|false|The card's note content. Only valid for cards without another type of content, so this cannot be specified if the card already has a `content_id` and `content_type`.
|archived|false|Use `true` to archive a project card. Specify `false` if you need to restore a previously archived project card.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

