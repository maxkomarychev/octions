# Edit

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/#edit

**Note**: To edit a repository's topics, use the [`topics` endpoint](https://developer.github.com/v3/repos/#replace-all-topics-for-a-repository).


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/update@master
  id: my_step_id
  with:
    token: <token value>
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
|owner|false|owner parameter
|repo|false|repo parameter
|name|false|The name of the repository.
|description|false|A short description of the repository.
|homepage|false|A URL with more information about the repository.
|private|false|Either `true` to make the repository private or `false` to make it public. Creating private repositories requires a paid GitHub account. Default: `false`.   **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
|visibility|false|Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header.
|has_issues|false|Either `true` to enable issues for this repository or `false` to disable them.
|has_projects|false|Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
|has_wiki|false|Either `true` to enable the wiki for this repository or `false` to disable it.
|is_template|false|Either `true` to make this repo available as a template repository or `false` to prevent it.
|default_branch|false|Updates the default branch for this repository.
|allow_squash_merge|false|Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
|allow_merge_commit|false|Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
|allow_rebase_merge|false|Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
|archived|false|`true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal  `custom_outputs: |<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

