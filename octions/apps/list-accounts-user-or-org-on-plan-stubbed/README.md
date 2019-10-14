# List all GitHub accounts (user or organization) on a specific plan (stubbed)

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/apps/marketplace/#list-all-github-accounts-user-or-organization-on-a-specific-plan

This action implements `GET` request to `/marketplace_listing/stubbed/plans/{plan_id}/accounts`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    plan_id: <plan_id value>
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
|plan_id|true|plan_id parameter
|sort|true|Sorts the GitHub accounts by the date they were created or last updated. Can be one of `created` or `updated`.
|direction|true|To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

