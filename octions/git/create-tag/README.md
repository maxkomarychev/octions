# Create a tag object

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/git/tags/#create-a-tag-object

This action implements `POST` request to `/repos/{owner}/{repo}/git/tags`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    tag: <tag value>
    message: <message value>
    object: <object value>
    type: <type value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|owner|true|owner parameter
|repo|true|repo parameter
|tag|true|The tag's name. This is typically a version (e.g., "v0.0.1").
|message|true|The tag message.
|object|true|The SHA of the git object this is tagging.
|type|true|The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
|tagger|false|An object with information about the individual creating the tag.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

