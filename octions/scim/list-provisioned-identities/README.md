# Get a list of provisioned identities

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/scim/#get-a-list-of-provisioned-identities

This action implements `GET` request to `/scim/v2/organizations/{org}/Users`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    org: <org value>
    startIndex: <startIndex value>
    count: <count value>
    filter: <filter value>
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
|startIndex|true|Used for pagination: the index of the first result to return.
|count|true|Used for pagination: the number of results to return.
|filter|true|Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query: `?filter=userName%20eq%20\"Octocat\"`.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

