# List your repositories

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/#list-your-repositories

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/list@master
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
    echo ${{ steps.my_step_id.outputs.status }}
```


<a name="inputs" ></a>
## Inputs

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
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

