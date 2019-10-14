# List check runs for a specific ref

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/checks/runs/#list-check-runs-for-a-specific-ref

This action implements `GET` request to `/repos/{owner}/{repo}/commits/{ref}/check-runs`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    ref: <ref value>
    check_name: <check_name value>
    status: <status value>
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
|owner|true|owner parameter
|repo|true|repo parameter
|ref|true|ref parameter
|check_name|true|Returns check runs with the specified `name`.
|status|true|Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
|filter|true|Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

