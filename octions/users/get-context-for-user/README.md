# Get contextual information about a user

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/users/#get-contextual-information-about-a-user

This action implements `GET` request to `/users/{username}/hovercard`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    username: <username value>
    subject_type: <subject_type value>
    subject_id: <subject_id value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|username|true|username parameter
|subject_type|true|Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
|subject_id|true|Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

