# Create repository using a repository template

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/#create-repository-using-a-repository-template

This action implements `POST` request to `/repos/{template_owner}/{template_repo}/generate`


# Quick start

```yaml
- uses: /@v
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
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|template_owner|true|template_owner parameter
|template_repo|true|template_repo parameter
|owner|false|The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
|name|true|The name of the new repository.
|description|false|A short description of the new repository.
|private|false|Either `true` to create a new private repository or `false` to create a new public one.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

