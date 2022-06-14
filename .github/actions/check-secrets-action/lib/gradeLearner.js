const core = require("@actions/core");
const github = require("@actions/github");

module.exports = async (owner, repo, token) => {
  try {
    const secretsContext = core.getInput("secrets-context");
    const keysFromCtx = Object.keys(JSON.parse(secretsContext));

    if (!repoHasExtraSecrets(keysFromCtx)) {
      return {
        reports: [
          {
            filename: ".github/workflows/use-secrets.yml",
            isCorrect: false,
            display_type: "actions",
            level: "fatal",
            msg: "Incorrect Solution",
            error: {
              expected: "Your repository should contain at least one secret.",
              got: "Your repository does not contain any secrets",
            },
          },
        ],
      };
    }

    const secretValueStatusCode = await properSecretValue(token, owner, repo);

    if (secretValueStatusCode !== 204) {
      return {
        reports: [
          {
            filename: ".github/workflows/use-secrets.yml",
            isCorrect: false,
            display_type: "actions",
            level: "warning",
            msg: "Solution COULD be incorrect",
            error: {
              expected: "HTTP response of 204",
              got: `HTTP response of ${secretValueStatusCode} which could indicate an internal error.  Please open an issue at: https://github.com/githubtraining/exercise-use-secrets and let us know!  Thank you`,
            },
          },
        ],
      };
    }

    return {
      reports: [
        {
          filename: ".github/workflows/use-secrets.yml",
          isCorrect: true,
          display_type: "actions",
          level: "info",
          msg: "Correct Solution",
          error: {
            expected: "",
            got: "",
          },
        },
      ],
    };
  } catch (error) {
    return error;
  }
};

function repoHasExtraSecrets(keysFromCtx) {
  return keysFromCtx.length > 1;
}

async function properSecretValue(token, owner, repo) {
  try {
    const octokit = github.getOctokit(token);
    const response = await octokit.rest.repos.createDispatchEvent({
      owner,
      repo,
      event_type: "token_check",
    });

    return response.status;
  } catch (error) {
    if (
      error.message !== "Bad credentials" &&
      error.message !== "Parameter token or opts.auth is required"
    ) {
      throw {
        reports: [
          {
            filename: ".github/workflows/use-secrets.yml",
            isCorrect: false,
            display_type: "actions",
            level: "fatal",
            msg: "",
            error: {
              expected: "",
              got: "An internal error occurred.  Please open an issue at: https://github.com/githubtraining/lab-use-secrets and let us know!  Thank you",
            },
          },
        ],
      };
    } else if (error.message === "Parameter token or opts.auth is required") {
      throw {
        reports: [
          {
            filename: ".github/workflows/use-secrets.yml",
            isCorrect: false,
            display_type: "actions",
            level: "fatal",
            msg: "Incorrect solution",
            error: {
              expected: "We expected your secret to contain a value",
              got: `A null value for the secret supplied at your-secret, which most likely means the secret doesn't exist.`,
            },
          },
        ],
      };
    } else {
      throw {
        reports: [
          {
            filename: ".github/workflows/use-secrets.yml",
            isCorrect: false,
            display_type: "actions",
            level: "fatal",
            msg: "Incorrect Solution",
            error: {
              expected:
                "Your secret to contain a Personal Access Token with the repo scope.",
              got: `${error.message}`,
            },
          },
        ],
      };
    }
  }
}
