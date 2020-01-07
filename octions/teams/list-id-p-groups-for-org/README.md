# List IdP groups in an organization

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/teams/team_sync/#list-idp-groups-in-an-organization

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/articles/github-s-products) in the GitHub Help documentation.

List IdP groups available in an organization.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/teams/list-id-p-groups-for-org@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
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
|org|true|org parameter
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

