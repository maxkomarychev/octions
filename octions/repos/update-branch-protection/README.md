# Update branch protection

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/repos/branches/#update-branch-protection

This action implements `PUT` request to `/repos/{owner}/{repo}/branches/{branch}/protection`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    owner: <owner value>
    repo: <repo value>
    branch: <branch value>
    required_status_checks: <required_status_checks value>
    enforce_admins: <enforce_admins value>
    required_pull_request_reviews: <required_pull_request_reviews value>
    restrictions: <restrictions value>
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
|required_status_checks|true|Require status checks to pass before merging. Set to `null` to disable.
|enforce_admins|true|Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
|required_pull_request_reviews|true|Require at least one approving review on a pull request, before merging. Set to `null` to disable.
|restrictions|true|Restrict who can push to this branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

