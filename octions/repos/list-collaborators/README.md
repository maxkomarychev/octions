# List collaborators

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/collaborators/#list-collaborators

This action implements `GET` request to `/repos/{owner}/{repo}/collaborators`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    affiliation: <affiliation value>
    per_page: <per_page value>
    page: <page value>
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
|affiliation|true|Filter collaborators returned by their affiliation. Can be one of:   \* `outside`: All outside collaborators of an organization-owned repository.   \* `direct`: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.   \* `all`: All collaborators the authenticated user can see.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

