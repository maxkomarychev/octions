# Edit an organization

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/orgs/#edit-an-organization



**Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/orgs/update@master
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
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
|billing_email|false|Billing email address. This address is not publicized.
|company|false|The company name.
|email|false|The publicly visible email address.
|location|false|The location.
|name|false|The shorthand name of the company.
|description|false|The description of the company.
|has_organization_projects|false|Toggles whether an organization can use organization projects.
|has_repository_projects|false|Toggles whether repositories that belong to the organization can use repository projects.
|default_repository_permission|false|Default permission level members have for organization repositories:   \* `read` - can pull, but not push to or administer this repository.   \* `write` - can pull and push, but not administer this repository.   \* `admin` - can pull, push, and administer this repository.   \* `none` - no permissions granted by default.
|members_can_create_repositories|false|Toggles the ability of non-admin organization members to create repositories. Can be one of:   \* `true` - all organization members can create repositories.   \* `false` - only organization owners can create repositories.   Default: `true`   **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
|members_can_create_internal_repositories|false|Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud. Can be one of:   \* `true` - all organization members can create internal repositories.   \* `false` - only organization owners can create internal repositories.   Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
|members_can_create_private_repositories|false|Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:   \* `true` - all organization members can create private repositories.   \* `false` - only organization owners can create private repositories.   Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
|members_can_create_public_repositories|false|Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:   \* `true` - all organization members can create public repositories.   \* `false` - only organization owners can create public repositories.   Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
|members_allowed_repository_creation_type|false|Specifies which types of repositories non-admin organization members can create. Can be one of:   \* `all` - all organization members can create public and private repositories.   \* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.   \* `none` - only admin members can create repositories.   **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See [this note](https://developer.github.com/v3/orgs/#members_can_create_repositories) for details.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal  `custom_outputs: |<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

