# Get commit authors

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/migrations/source_imports/#get-commit-authors

This action implements `GET` request to `/repos/{owner}/{repo}/import/authors`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    since: <since value>
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
|since|true|Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the `raw` step.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

