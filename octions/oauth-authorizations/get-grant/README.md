# Get a single grant

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant

**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/oauth-authorizations/get-grant@master
  id: my_step_id
  with:
    token: <token value>
    grant_id: <grant_id value>
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
|grant_id|true|grant_id parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
