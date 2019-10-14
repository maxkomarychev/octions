# Toggle primary email visibility

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/users/emails/#toggle-primary-email-visibility

This action implements `PATCH` request to `/user/email/visibility`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    email: <email value>
    visibility: <visibility value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|email|true|Specify the _primary_ email address that needs a visibility change.
|visibility|true|Use `public` to enable an authenticated user to view the specified email address, or use `private` so this primary email address cannot be seen publicly.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

