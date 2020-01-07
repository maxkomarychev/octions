# Search code

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/search/#search-code

Find file contents via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

**Note:** You must [authenticate](https://developer.github.com/v3/#authentication) to search for code across all public repositories.

**Considerations for code search**

Due to the complexity of searching code, there are a few restrictions on how searches are performed:

*   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
*   Only files smaller than 384 KB are searchable.
*   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.

Suppose you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery). Your query would look something like this:

Here, we're searching for the keyword `addClass` within a file's contents. We're making sure that we're only looking in files where the language is JavaScript. And we're scoping the search to the `repo:jquery/jquery` repository.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/search/code@master
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
|q|true|The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching code](https://help.github.com/articles/searching-code/)" for a detailed list of qualifiers.
|sort|true|Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
|order|true|Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
|per_page|true|Results per page (max 100)
|page|true|Page number of the results to fetch.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

