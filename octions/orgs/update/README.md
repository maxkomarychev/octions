# Edit an organization

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/orgs/#edit-an-organization

**Note:** The new `members_allowed_repository_creation_type` replaces the functionality of `members_can_create_repositories`.

Setting `members_allowed_repository_creation_type` will override the value of `members_can_create_repositories` in the following ways:

*   Setting `members_allowed_repository_creation_type` to `all` or `private` sets `members_can_create_repositories` to `true`.
*   Setting `members_allowed_repository_creation_type` to `none` sets `members_can_create_repositories` to `false`.
*   If you omit `members_allowed_repository_creation_type`, `members_can_create_repositories` is not modified.


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
|has_organization_projects|false|Toggles whether organization projects are enabled for the organization.
|has_repository_projects|false|Toggles whether repository projects are enabled for repositories that belong to the organization.
|default_repository_permission|false|Default permission level members have for organization repositories:   \* `read` - can pull, but not push to or administer this repository.   \* `write` - can pull and push, but not administer this repository.   \* `admin` - can pull, push, and administer this repository.   \* `none` - no permissions granted by default.
|members_can_create_repositories|false|Toggles the ability of non-admin organization members to create repositories. Can be one of:   \* `true` - all organization members can create repositories.   \* `false` - only admin members can create repositories.   Default: `true`   **Note:** Another parameter can override the this parameter. See [this note](https://developer.github.com/v3/orgs/#members_can_create_repositories) for details. **Note:** Another parameter can override the this parameter. See [this note](https://developer.github.com/v3/orgs/#members_can_create_repositories) for details.
|members_allowed_repository_creation_type|false|Specifies which types of repositories non-admin organization members can create. Can be one of:   \* `all` - all organization members can create public and private repositories.   \* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on [GitHub Business Cloud](https://github.com/pricing/business-cloud).   \* `none` - only admin members can create repositories.   **Note:** Using this parameter will override values set in `members_can_create_repositories`. See [this note](https://developer.github.com/v3/orgs/#members_can_create_repositories) for details.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

