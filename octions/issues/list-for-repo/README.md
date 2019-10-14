# List issues for a repository

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/issues/#list-issues-for-a-repository

This action implements `GET` request to `/repos/{owner}/{repo}/issues`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    milestone: <milestone value>
    state: <state value>
    assignee: <assignee value>
    creator: <creator value>
    mentioned: <mentioned value>
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
|owner|true|owner parameter
|repo|true|repo parameter
|milestone|true|If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
|state|true|Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
|assignee|true|Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
|creator|true|The user that created the issue.
|mentioned|true|A user that's mentioned in the issue.
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

