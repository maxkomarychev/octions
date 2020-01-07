const methodToSpec = require("../method-to-spec");
const fs = require("fs");
const path = require("path");

const METHOD = JSON.parse(
  fs.readFileSync(path.join(__dirname, "method.json")).toString()
);

describe("converting openapi method descriptor to action.yml structure", () => {
  const spec = methodToSpec(
    "post",
    "/repos/{owner}/{repo}/deployments",
    METHOD
  );

  it("sholud extract name and description", () => {
    expect(spec.name).toEqual(METHOD.summary);
    // expect(meta.description).toEqual(SPEC.description);
    expect(spec.description).toEqual(
      "Deployments offer a few configurable parameters with sane defaults.\n\nThe `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them before we merge a pull request.\n\nThe `environment` parameter allows deployments to be issued to different runtime environments. Teams often have multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter makes it easier to track which environments have requested deployments. The default environment is `production`.\n\nThe `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds, the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will return a failure response.\n\nBy default, [commit statuses](https://developer.github.com/v3/repos/statuses) for every submitted context must be in a `success` state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do not require any contexts or create any commit statuses, the deployment will always succeed.\n\nThe `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text field that will be passed on when a deployment event is dispatched.\n\nThe `task` parameter is used by the deployment system to allow different execution paths. In the web world this might be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an application with debugging enabled.\n\nUsers with `repo` or `repo_deployment` scopes can create a deployment for a given ref:\n\nA simple example putting the user and room into the payload to notify back to chat networks.\n\nA more advanced example specifying required commit statuses and bypassing auto-merging.\n\nYou will see this response when GitHub automatically merges the base branch into the topic branch instead of creating a deployment. This auto-merge happens when:\n\n*   Auto-merge option is enabled in the repository\n*   Topic branch does not include the latest changes on the base branch, which is `master`in the response example\n*   There are no merge conflicts\n\nIf there are no new commits in the base branch, a new request to create a deployment should give a successful response.\n\nThis error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.\n\nThis error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success` status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`."
    );
    expect(spec.api_details).toEqual(
      "This action implements `POST` request to `/repos/{owner}/{repo}/deployments`"
    );
  });
  it("should extarct link to external docs", () => {
    expect(spec.octokit_doc).toEqual(
      "https://developer.github.com/v3/repos/deployments/#create-a-deployment"
    );
  });
  it.skip("should parse inputs and add token as first input", () => {
    expect(spec.inputs).toHaveLength(5);

    expect(spec.inputs[0].name).toEqual("token");
    expect(spec.inputs[0].description).toEqual(
      "Token to authenticate the request"
    );
    expect(spec.inputs[0].required).toEqual(true);

    expect(spec.inputs[1].name).toEqual("owner");
    expect(spec.inputs[1].description).toEqual("owner parameter");
    expect(spec.inputs[1].required).toEqual(false);

    expect(spec.inputs[2].name).toEqual("repo");
    expect(spec.inputs[2].description).toEqual("repo parameter");
    expect(spec.inputs[2].required).toEqual(false);

    expect(spec.inputs[3].name).toEqual("ref");
    expect(spec.inputs[3].description).toEqual(
      "The ref to deploy. This can be a branch, tag, or SHA."
    );
    expect(spec.inputs[3].required).toEqual(true);

    expect(spec.inputs[4].name).toEqual("task");
    expect(spec.inputs[4].description).toEqual(
      "Specifies a task to execute (e.g., `deploy` or `deploy:migrations`)."
    );
    expect(spec.inputs[4].required).toEqual(false);
  });
  it("should create 2 outpus", () => {
    expect(spec.outputs[0].name).toEqual("id");
    expect(spec.outputs[0].description).toEqual(
      "`id` field of the response (if exists)"
    );

    expect(spec.outputs[1].name).toEqual("number");
    expect(spec.outputs[1].description).toEqual(
      "`number` field of the response (if exists)"
    );
  });
  it("should handle previews", () => {
    expect(spec.previews).toHaveLength(2);
    expect(spec.previews[0].name).toEqual("flash");
    expect(spec.previews[1].name).toEqual("ant-man");
  });
});
