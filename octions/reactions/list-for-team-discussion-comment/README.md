# List reactions for a team discussion comment

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment

List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/reactions/list-for-team-discussion-comment@master
  id: my_step_id
  with:
    token: <token value>
    team_id: <team_id value>
    discussion_number: <discussion_number value>
    comment_number: <comment_number value>
    content: <content value>
    per_page: <per_page value>
    page: <page value>
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
|team_id|true|team_id parameter
|discussion_number|true|discussion_number parameter
|comment_number|true|comment_number parameter
|content|true|Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

