# Members list

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/orgs/members/#members-list

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/orgs/list-members@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    filter: <filter value>
    role: <role value>
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
|org|true|org parameter
|filter|true|Filter members returned in the list. Can be one of:   \* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.   \* `all` - All members the authenticated user can see.
|role|true|Filter members returned by their role. Can be one of:   \* `all` - All members of the organization, regardless of role.   \* `admin` - Organization owners.   \* `member` - Non-owner organization members.
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

