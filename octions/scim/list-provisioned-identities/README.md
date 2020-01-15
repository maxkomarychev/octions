# Get a list of provisioned identities

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/scim/#get-a-list-of-provisioned-identities

To filter for a specific email address, use the `email` query parameter and the `eq` operator:

Your filter would look like this cURL command:

Retrieves users that match the filter. In the example, we searched only for [octocat@github.com](mailto:octocat@github.com).

Retrieves a paginated list of all provisioned organization members, including pending invitations.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/scim/list-provisioned-identities@master
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
    echo ${{ steps.my_step_id.outputs.status }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|org|true|org parameter
|startIndex|true|Used for pagination: the index of the first result to return.
|count|true|Used for pagination: the number of results to return.
|filter|true|Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query: `?filter=userName%20eq%20\"Octocat\"`.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal  `custom_outputs: |<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

