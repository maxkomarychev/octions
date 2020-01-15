# List collaborators

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/projects/collaborators/#list-collaborators

Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/projects/list-collaborators@master
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
    echo ${{ steps.my_step_id.outputs.status }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|project_id|true|project_id parameter
|affiliation|true|Filters the collaborators by their affiliation. Can be one of:   \* `outside`: Outside collaborators of a project that are not a member of the project's organization.   \* `direct`: Collaborators with permissions to a project, regardless of organization membership status.   \* `all`: All collaborators the authenticated user can see.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.
|file_output|false|Path to store full output of the action

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

