# Replace a provisioned user's information

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/scim/#replace-a-provisioned-users-information

Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update a user attribute](https://developer.github.com/v3/scim/#update-a-user-attribute) endpoint instead.

As shown in the following example, you must at least provide the required values for the user: `userName`, `name`, and `emails`.

**Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/scim/replace-provisioned-user-information@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    scim_user_id: <scim_user_id value>
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
|scim_user_id|true|scim_user_id parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

