# List a user's repository invitations

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/invitations/#list-a-users-repository-invitations

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/list-invitations-for-authenticated-user@master
  id: my_step_id
  with:
    token: <token value>
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
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
