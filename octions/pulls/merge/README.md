# Merge a pull request (Merge Button)

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button

This action implements `PUT` request to `/repos/{owner}/{repo}/pulls/{pull_number}/merge`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    pull_number: <pull_number value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|owner|true|owner parameter
|repo|true|repo parameter
|pull_number|true|pull_number parameter
|commit_title|false|Title for the automatic commit message.
|commit_message|false|Extra detail to append to automatic commit message.
|sha|false|SHA that pull request head must match to allow merge.
|merge_method|false|Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

