# Search commits

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/search/#search-commits

Find commits via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

**Considerations for commit search**

Only the _default branch_ is considered. In most cases, this will be the `master` branch.

Suppose you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/search/commits@master
  id: my_step_id
  with:
    token: <token value>
    q: <q value>
    sort: <sort value>
    order: <order value>
    per_page: <per_page value>
    page: <page value>
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
|q|true|The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching commits](https://help.github.com/articles/searching-commits/)" for a detailed list of qualifiers.
|sort|true|Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
|order|true|Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

