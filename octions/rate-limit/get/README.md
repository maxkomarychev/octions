# Get your current rate limit status

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/rate_limit/#get-your-current-rate-limit-status

**Note:** Accessing this endpoint does not count against your REST API rate limit.

**Understanding your rate limit status**

The Search API has a [custom rate limit](https://developer.github.com/v3/search/#rate-limit), separate from the rate limit governing the rest of the REST API. The GraphQL API also has a [custom rate limit](https://developer.github.com/v4/guides/resource-limitations/#rate-limit) that is separate from and calculated differently than rate limits in the REST API.

For these reasons, the Rate Limit API response categorizes your rate limit. Under `resources`, you'll see four objects:

*   The `core` object provides your rate limit status for all non-search-related resources in the REST API.
*   The `search` object provides your rate limit status for the [Search API](https://developer.github.com/v3/search/).
*   The `graphql` object provides your rate limit status for the [GraphQL API](https://developer.github.com/v4/).
*   The `integration_manifest` object provides your rate limit status for the [GitHub App Manifest code conversion](https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration) endpoint.

For more information on the headers and values in the rate limit response, see "[Rate limiting](https://developer.github.com/v3/#rate-limiting)."

The `rate` object (shown at the bottom of the response above) is deprecated.

If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/rate-limit/get@master
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
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal  `custom_outputs: |<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

