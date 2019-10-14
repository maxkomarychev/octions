# Create reaction for a team discussion comment

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment

This action implements `POST` request to `/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    team_id: <team_id value>
    discussion_number: <discussion_number value>
    comment_number: <comment_number value>
    content: <content value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|team_id|true|team_id parameter
|discussion_number|true|discussion_number parameter
|comment_number|true|comment_number parameter
|content|true|The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

