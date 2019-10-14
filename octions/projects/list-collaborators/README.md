# List collaborators

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/projects/collaborators/#list-collaborators

This action implements `GET` request to `/projects/{project_id}/collaborators`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    project_id: <project_id value>
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
|project_id|true|project_id parameter
|affiliation|true|Filters the collaborators by their affiliation. Can be one of:   \* `outside`: Outside collaborators of a project that are not a member of the project's organization.   \* `direct`: Collaborators with permissions to a project, regardless of organization membership status.   \* `all`: All collaborators the authenticated user can see.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

