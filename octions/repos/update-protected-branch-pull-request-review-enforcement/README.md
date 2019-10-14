# Update pull request review enforcement of protected branch

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/branches/#update-pull-request-review-enforcement-of-protected-branch

This action implements `PATCH` request to `/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    branch: <branch value>
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
|branch|true|branch parameter
|dismissal_restrictions|false|Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
|dismiss_stale_reviews|false|Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
|require_code_owner_reviews|false|Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) have reviewed.
|required_approving_review_count|false|Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

