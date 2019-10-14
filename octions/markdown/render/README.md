# Render an arbitrary Markdown document

"Oction" is a GitHub Action that implements a single call with 
[@octokit/request](https://www.npmjs.com/package/@octokit/request)
allowing easy interaction with GitHub REST APIs from your workflow.

Original documentation: https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document

This action implements `POST` request to `/markdown`


# Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    text: <text value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|text|true|The Markdown text to render in HTML. Markdown content must be 400 KB or less.
|mode|false|The rendering mode. Can be either:   \* `markdown` to render a document in plain Markdown, just like README.md files are rendered.   \* `gfm` to render a document in [GitHub Flavored Markdown](https://github.github.com/gfm/), which creates links for user mentions as well as references to SHA-1 hashes, issues, and pull requests.
|context|false|The repository context to use when creating references in `gfm` mode. Omit this parameter when using `markdown` mode.

# Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

