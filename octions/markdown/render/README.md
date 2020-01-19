# Render an arbitrary Markdown document

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/markdown/render@master
  id: my_step_id
  with:
    token: <token value>
    text: <text value>
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
|text|true|The Markdown text to render in HTML. Markdown content must be 400 KB or less.
|mode|false|The rendering mode. Can be either:   \* `markdown` to render a document in plain Markdown, just like README.md files are rendered.   \* `gfm` to render a document in [GitHub Flavored Markdown](https://github.github.com/gfm/), which creates links for user mentions as well as references to SHA-1 hashes, issues, and pull requests.
|context|false|The repository context to use when creating references in `gfm` mode. Omit this parameter when using `markdown` mode.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

