# Get-or-create an authorization for a specific app and fingerprint

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint

This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication)."


<a name="quick start" ></a>
## Quick start

```yaml
- uses: /@v
  id: my_step_id
  with:
    token: <token value>
    client_id: <client_id value>
    fingerprint: <fingerprint value>
    client_secret: <client_secret value>
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
|client_id|true|client_id parameter
|fingerprint|true|fingerprint parameter
|client_secret|true|The 40 character OAuth app client secret associated with the client ID specified in the URL.
|scopes|false|A list of scopes that this authorization is in.
|note|false|A note to remind you what the OAuth token is for.
|note_url|false|A URL to remind you what app the OAuth token is for.

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

