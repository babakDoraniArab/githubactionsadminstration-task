# Check Secrets Action

This local action runs whenever a change to the `.github/workflows/use-secrets.yml` workflow is pushed to your repository.

There are two inputs necessary for this action to run and provide a grade for this exercise:

| Input           | Description                                                                                                                                                                                                                             | Required |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------: |
| `secrets-context` | JSON-formatted object containing the [secrets context](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#contexts) for the repository from which the `use-secrets.yml` workflow was triggered |         Yes         |
| `your-secret`     | The value of this input should be a personal access token (PAT) with a repo scope. This PAT should be passed in the form of a repository secret in the `use-secrets.yml` workflow . **Do not** place the raw value of the PAT into the `use-secrets.yml` workflow!  |         Yes         |

## What checks does this action conduct?

- Counts the number of secrets the repository has to ensure the learner added a secret.
- Attempts to perform an HTTP request using Octokit and the provided secret to validate that the secret contains a valid PAT.
- Reports errors and failures in the actions runner of the `use-secrets.yml` workflow
- Sends certain error and success messages to the `grading.yml` workflow

## What happens with your personal access token?

A personal access token is needed to allow the `use-secrets.yml` workflow to communicate to the `grading.yml` workflow using a [`repository_dispatch`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#repository_dispatch) event.

A built-in feature of GitHub Actions prevents one workflow from triggering another, even through the use of a `repository_dispatch` event, if the authentication for the workflow is provided by the `GITHUB_TOKEN`.

However, if the first workflow is supplied a [properly scoped](https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event) PAT, GitHub Actions will allow this workflow to trigger other workflow runs.

In the `check-secrets-action` we use [Octokit](https://github.com/octokit) to create the repository dispatch using your PAT as the authentication that allows for one workflow to trigger another. You can read more about the [Octokit method](https://octokit.github.io/rest.js/v18#repos-create-dispatch-event) being used to make this HTTP request if you'd like to learn more.

## Summary

- The PAT you create **stays in your repo**.
- The `check-secrets-action` never exposes the value of the secret you pass into the action.
- An HTTP request is made using Octokit with the supplied PAT for authentication.
- A report is generated and displayed in the actions runner.
