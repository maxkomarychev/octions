# List check suites for a Git reference

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/checks/suites/#list-check-suites-for-a-git-reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/checks/list-suites-for-ref@master
  id: my_step_id
  with:
    token: <token value>
    ref: <ref value>
    app_id: <app_id value>
    check_name: <check_name value>
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
|owner|false|owner parameter
|repo|false|repo parameter
|ref|true|ref parameter
|app_id|true|Filters check suites by GitHub App `id`.
|check_name|true|Filters checks suites by the name of the [check run](https://developer.github.com/v3/checks/runs/).
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

