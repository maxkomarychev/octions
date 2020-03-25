# List issues assigned to the authenticated user

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/issues/#list-issues-assigned-to-the-authenticated-user

List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not necessarily assigned to you. See the [Parameters table](https://developer.github.com/v3/issues/#parameters) for more information.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/issues/list@master
  id: my_step_id
  with:
    token: <token value>
    filter: <filter value>
    state: <state value>
    labels: <labels value>
    sort: <sort value>
    direction: <direction value>
    since: <since value>
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
|filter|true|Indicates which sorts of issues to return. Can be one of:   \* `assigned`: Issues assigned to you   \* `created`: Issues created by you   \* `mentioned`: Issues mentioning you   \* `subscribed`: Issues you're subscribed to updates for   \* `all`: All issues the authenticated user can see, regardless of participation or creation
|state|true|Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
|labels|true|A list of comma separated label names. Example: `bug,ui,@high`
|sort|true|What to sort results by. Can be either `created`, `updated`, `comments`.
|direction|true|The direction of the sort. Can be either `asc` or `desc`.
|since|true|Only issues updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
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

