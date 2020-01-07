# Get teams with access to protected branch

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/branches/#list-teams-with-access-to-protected-branch

Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Lists the teams who have push access to this branch. If you pass the `hellcat-preview` media type, the list includes child teams.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/get-teams-with-access-to-protected-branch@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    branch: <branch value>
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
|owner|true|owner parameter
|repo|true|repo parameter
|branch|true|branch parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

