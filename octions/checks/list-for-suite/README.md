# List check runs in a check suite

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/checks/runs/#list-check-runs-in-a-check-suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/checks/list-for-suite@master
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    check_suite_id: <check_suite_id value>
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


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|owner|true|owner parameter
|repo|true|repo parameter
|check_suite_id|true|check_suite_id parameter
|check_name|true|Returns check runs with the specified `name`.
|status|true|Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
|filter|true|Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

