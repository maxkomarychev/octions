# Toggle primary email visibility

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/users/emails/#toggle-primary-email-visibility

Sets the visibility for your primary email addresses.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/users/toggle-primary-email-visibility@master
  id: my_step_id
  with:
    token: <token value>
    email: <email value>
    visibility: <visibility value>
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
|email|true|Specify the _primary_ email address that needs a visibility change.
|visibility|true|Use `public` to enable an authenticated user to view the specified email address, or use `private` so this primary email address cannot be seen publicly.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

