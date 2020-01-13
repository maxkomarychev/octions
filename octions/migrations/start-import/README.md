# Start an import

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/migrations/source_imports/#start-an-import

Start a source import to a GitHub repository using GitHub Importer.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/migrations/start-import@master
  id: my_step_id
  with:
    token: <token value>
    vcs_url: <vcs_url value>
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
|owner|false|owner parameter
|repo|false|repo parameter
|vcs_url|true|The URL of the originating repository.
|vcs|false|The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
|vcs_username|false|If authentication is required, the username to provide to `vcs_url`.
|vcs_password|false|If authentication is required, the password to provide to `vcs_url`.
|tfvc_project|false|For a tfvc import, the name of the project that is being imported.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

