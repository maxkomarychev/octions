# Create repository using a repository template

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/#create-repository-using-a-repository-template

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [`GET /repos/:owner/:repo`](https://developer.github.com/v3/repos/#get) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository
*   `repo` scope to create a private repository

\`


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/create-using-template@master
  id: my_step_id
  with:
    token: <token value>
    template_owner: <template_owner value>
    template_repo: <template_repo value>
    name: <name value>
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
|template_owner|true|template_owner parameter
|template_repo|true|template_repo parameter
|owner|false|The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
|name|true|The name of the new repository.
|description|false|A short description of the new repository.
|private|false|Either `true` to create a new private repository or `false` to create a new public one.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

