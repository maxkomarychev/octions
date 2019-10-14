# Create a reference

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/git/refs/#create-a-reference

This action implements `POST` request to `/repos/{owner}/{repo}/git/refs`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    ref: <ref value>
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
|ref|true|The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
|sha|true|The SHA1 value for this reference.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

