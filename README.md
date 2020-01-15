# Octions

## What is an _oction_?

**O**ctokit + A**ction** = **Oction** - it is a [GitHub Action](https://github.com/features/actions) that exposes single REST API call from [@octokit/routes](https://github.com/octokit/routes)

## API

Explore [catalog](#catalog) for API relevant for every specific oction.

Common API are listed below:

### Common inputs

| Name        | Type   | Description                                  |
| ----------- | ------ | -------------------------------------------- |
| token       | string | Valid token to authorize API calls           |
| file_output | string | Store result of the action in specified file |

### Common outputs

| Name   | Description                                |
| ------ | ------------------------------------------ |
| id     | `id` field of the response (if exists)     |
| number | `number` field of the response (if exists) |
| status | HTTP status of underlying API call         |

## Catalog

[Catalog](CATALOG.md)

## Examples

### Close every issue immediatelly once it is opened

```yaml
on:
  issues:
    types:
      - opened

jobs:
  close-issue:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - run: echo "${{ toJson(github.event) }}"
      - uses: maxkomarychev/octions/octions/issues/update@master
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          issue_number: ${{ github.event.issue.number }}
          state: closed
      - uses: maxkomarychev/octions/octions/issues/create-comment@master
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          issue_number: ${{ github.event.issue.number }}
          body: You can't create issues here!
```
