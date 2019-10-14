# Delete a file

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/contents/#delete-a-file

This action implements `DELETE` request to `/repos/{owner}/{repo}/contents/{path}`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    path: <path value>
    message: <message value>
    sha: <sha value>
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
|path|true|path parameter
|message|true|The commit message.
|sha|true|The blob SHA of the file being replaced.
|branch|false|The branch name. Default: the repository’s default branch (usually `master`)
|committer|false|object containing information about the committer.
|author|false|object containing information about the author.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

