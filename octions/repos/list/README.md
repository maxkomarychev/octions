# List your repositories

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/#list-your-repositories

This action implements `GET` request to `/user/repos`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    visibility: <visibility value>
    affiliation: <affiliation value>
    type: <type value>
    sort: <sort value>
    direction: <direction value>
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
|visibility|true|Can be one of `all`, `public`, or `private`.
|affiliation|true|Comma-separated list of values. Can include:   \* `owner`: Repositories that are owned by the authenticated user.   \* `collaborator`: Repositories that the user has been added to as a collaborator.   \* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
|type|true|Can be one of `all`, `owner`, `public`, `private`, `member`. Default: `all`      Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
|sort|true|Can be one of `created`, `updated`, `pushed`, `full_name`.
|direction|true|Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

