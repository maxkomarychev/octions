# Set Git LFS preference

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/migrations/source_imports/#set-git-lfs-preference

This action implements `PATCH` request to `/repos/{owner}/{repo}/import/lfs`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    use_lfs: <use_lfs value>
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
|use_lfs|true|Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

