# Search topics

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/search/#search-topics

Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.

Suppose you want to search for topics related to Ruby that are featured on [https://github.com/topics](https://github.com/topics). Your query might look like this:

In this request, we're searching for topics with the keyword `ruby`, and we're limiting the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.

**Note:** A search for featured Ruby topics only has 6 total results, so a [Link header](https://developer.github.com/v3/#link-header) indicating pagination is not included in the response.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/search/topics@master
  id: my_step_id
  with:
    token: <token value>
    q: <q value>
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
|q|true|The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

