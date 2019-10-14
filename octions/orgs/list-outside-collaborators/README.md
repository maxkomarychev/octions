# List outside collaborators

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/orgs/outside_collaborators/#list-outside-collaborators

This action implements `GET` request to `/orgs/{org}/outside_collaborators`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    filter: <filter value>
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
|org|true|org parameter
|filter|true|Filter the list of outside collaborators. Can be one of:   \* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.   \* `all`: All outside collaborators.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

