# Creates a new repository for the authenticated user

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/#create

This action implements `POST` request to `/user/repos`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    name: <name value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|name|true|The name of the repository.
|description|false|A short description of the repository.
|homepage|false|A URL with more information about the repository.
|private|false|Either `true` to create a private repository or `false` to create a public one. Creating private repositories requires a paid GitHub account.
|has_issues|false|Either `true` to enable issues for this repository or `false` to disable them.
|has_projects|false|Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
|has_wiki|false|Either `true` to enable the wiki for this repository or `false` to disable it.
|is_template|false|Either `true` to make this repo available as a template repository or `false` to prevent it.
|team_id|false|The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
|auto_init|false|Pass `true` to create an initial commit with empty README.
|gitignore_template|false|Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
|license_template|false|Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
|allow_squash_merge|false|Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
|allow_merge_commit|false|Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
|allow_rebase_merge|false|Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

