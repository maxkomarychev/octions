const methodToSpec = require('../method-to-spec')
const fs = require('fs')
const path = require('path')

const METHOD = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'method.json')).toString(),
)

describe('converting openapi method descriptor to action.yml structure', () => {
    const spec = methodToSpec(
        'post',
        '/repos/{owner}/{repo}/deployments',
        METHOD,
    )

    it('sholud extract name and description', () => {
        expect(spec.name).toEqual(METHOD.summary)
        // expect(meta.description).toEqual(SPEC.description);
        expect(spec.description).toEqual(
            'This action implements `POST` request to `/repos/{owner}/{repo}/deployments`',
        )
    })
    it('should extarct link to external docs', () => {
        expect(spec.octokit_doc).toEqual(
            'https://developer.github.com/v3/repos/deployments/#create-a-deployment',
        )
    })
    it('should parse inputs and add token as first input', () => {
        expect(spec.inputs).toHaveLength(5)

        expect(spec.inputs[0].name).toEqual('token')
        expect(spec.inputs[0].description).toEqual(
            'Token to authenticate the request',
        )
        expect(spec.inputs[0].required).toEqual(true)

        expect(spec.inputs[1].name).toEqual('owner')
        expect(spec.inputs[1].description).toEqual('owner parameter')
        expect(spec.inputs[1].required).toEqual(false)

        expect(spec.inputs[2].name).toEqual('repo')
        expect(spec.inputs[2].description).toEqual('repo parameter')
        expect(spec.inputs[2].required).toEqual(false)

        expect(spec.inputs[3].name).toEqual('ref')
        expect(spec.inputs[3].description).toEqual(
            'The ref to deploy. This can be a branch, tag, or SHA.',
        )
        expect(spec.inputs[3].required).toEqual(true)

        expect(spec.inputs[4].name).toEqual('task')
        expect(spec.inputs[4].description).toEqual(
            'Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).',
        )
        expect(spec.inputs[4].required).toEqual(false)
    })
    it('should create 2 outpus', () => {
        expect(spec.outputs[0].name).toEqual('id')
        expect(spec.outputs[0].description).toEqual(
            '`id` field of the response (if exists)',
        )

        expect(spec.outputs[1].name).toEqual('number')
        expect(spec.outputs[1].description).toEqual(
            '`number` field of the response (if exists)',
        )
    })
    it('should handle previews', () => {
        expect(spec.previews).toHaveLength(2)
        expect(spec.previews[0].name).toEqual('flash')
        expect(spec.previews[1].name).toEqual('ant-man')
    })
})
