# Create a new installation token

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/apps/#create-a-new-installation-token

This action implements `POST` request to `/app/installations/{installation_id}/access_tokens`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    installation_id: <installation_id value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|installation_id|true|installation_id parameter
|repository_ids|false|The `id`s of the repositories that the installation token can access. Providing repository `id`s restricts the access of an installation token to specific repositories. You can use the "[List repositories](https://developer.github.com/v3/apps/installations/#list-repositories)" endpoint to get the `id` of all repositories that an installation can access. For example, you can select specific repositories when creating an installation token to restrict the number of repositories that can be cloned using the token.
|permissions|false|The permissions granted to the access token. The permissions object includes the permission names and their access type. For a complete list of permissions and allowable values, see "[GitHub App permissions](https://developer.github.com/apps/building-github-apps/creating-github-apps-using-url-parameters/#github-app-permissions)."

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

