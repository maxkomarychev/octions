# List feeds

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/activity/feeds/#list-feeds

GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub global public timeline
*   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/activity/list-feeds@master
  id: my_step_id
  with:
    token: <token value>
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

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

