# List all issues across owned and member repositories assigned to the authenticated user

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/issues/#list-issues

This action implements `GET` request to `/user/issues`


# Quick start

```yaml
- uses: /@v
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
```


# Inputs

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

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

