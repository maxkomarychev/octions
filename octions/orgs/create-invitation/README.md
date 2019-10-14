# Create organization invitation

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/orgs/members/#create-organization-invitation

This action implements `POST` request to `/orgs/{org}/invitations`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|org|true|org parameter
|invitee_id|false|**Required unless you provide `email`**. GitHub user ID for the person you are inviting.
|email|false|**Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
|role|false|Specify role for new member. Can be one of:   \* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.   \* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.   \* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
|team_ids|false|Specify IDs for the teams you want to invite new members to.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

