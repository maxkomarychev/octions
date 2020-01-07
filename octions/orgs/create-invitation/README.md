# Create organization invitation

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/orgs/members/#create-organization-invitation

Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/orgs/create-invitation@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
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
|invitee_id|false|**Required unless you provide `email`**. GitHub user ID for the person you are inviting.
|email|false|**Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
|role|false|Specify role for new member. Can be one of:   \* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.   \* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.   \* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
|team_ids|false|Specify IDs for the teams you want to invite new members to.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

