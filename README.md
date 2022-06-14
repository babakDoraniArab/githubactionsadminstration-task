# Welcome to the Use Secrets exercise!

This is an exercise to check your knowledge on using secrets in GitHub Actions workflows. It is automatically graded via a workflow once you have completed the instructions.

## About this exercise

:warning: A grading script exists under `.github/workflows/grading.yml`. You do not need to use this workflow for any purpose and **altering its contents will affect the repository's ability to assess your exercise and give feedback.**

:warning: This exercise utilizes [GitHub Actions](https://docs.github.com/en/actions), which is free for public repositories and self-hosted runners, but may incur charges on private repositories. See _[About billing for GitHub Actions]_ to learn more.

:information_source: The use of GitHub Actions also means that it may take the grading workflow a few seconds and sometimes minutes to run.

:closed_lock_with_key: This exercise asks you to create a personal access token (PAT) with the `repo` scope. This step is a prerequisite of the exercise, and you should already be comfortable with PATs on GitHub before proceeding. The PAT is encrypted and used only by the local action [`check-secrets-action`](.github/actions/check-secrets-action) and does not leave your repository. GitHub has safeguards in place if the PAT is exposed by mistake, but you should know that if someone gains access to your PAT, they would have access to your GitHub repositories. To be safe, we recommend destroying or regenerating the token once you've completed this exercise. If you'd like to learn more about how [`check-secrets-action`](.github/actions/check-secrets-action) uses your PAT, check the action's [documentation](.github/actions/check-secrets-action/README.md). Check out _[Personal Access Token - GitHub Docs]_ and _[`repo` scope]_ for more information.

## Instructions

<!-- Specific instructions for your exercise -->

Please complete the instructions below:

1. Create your own copy of this repository by using the [Use this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) button.
2. Create a [personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with the `repo` scope selected.
3. Create a new secret in your copy of this repository that contains the value of the personal access token you created.
4. Pass the secret to the local action `check-secrets-action` using the input key `your-secret`. The action is used in a workflow titled `use-secrets.yml`.

<!-- Add your steps below starting with step 2 -->

## Seeing your result

Your exercise is graded automatically once you have completed the instructions. To see the result of your exercise, go to the **Actions** tab, and see the most recent run on the **Use secrets** or **Grading** workflows. <!-- specify expected Looking Glass display_type --><!-- specific place to look -->

![](https://user-images.githubusercontent.com/6351798/119396166-c0736580-bc91-11eb-8bd8-02abddbcf50a.png)

See _[Viewing workflow run history]_ if you need assistance.

## Troubleshooting

If you are stuck with a step in the exercise or the grading workflow does not automatically run after you complete the instructions, run the troubleshooter: in the **Actions** tab select the **Grading workflow**, click **Run workflow**, select the appropriate branch, and click the **Run workflow** button.

![](https://user-images.githubusercontent.com/6351798/119911013-b82b5c80-bf15-11eb-8feb-f2f838262f78.png)

The troubleshooter will either display useful information to help you understand what you might have done wrong in your exercise or redirect you to the documentation relevant to your exercise to help you out.

See _[Running a workflow on GitHub]_ if you need assistance.

## Useful resources

Use these to help you!

Resources specific to this exercise:

- [Personal Access Token - GitHub Docs]
- [Encrypted secrets - GitHub Docs]
- [Workflow syntax for GitHub Actions - GitHub Docs]

<!-- - Add further resources for the learner -->

Resources for working with exercises and GitHub Actions in general:

- [Creating a repository from a template]
- [Viewing workflow run history]
- [Running a workflow on GitHub]
- [About billing for GitHub Actions]
- [GitHub Actions]

<!--
Links used throughout this README:
-->
<!-- Edit the links below to be relevant -->

[events that trigger workflows - github docs]: https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#schedule
[cron examples - crontab.guru]: https://crontab.guru/examples.html
[creating a repository from a template]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[viewing workflow run history]: https://docs.github.com/en/actions/managing-workflow-runs/viewing-workflow-run-history
[running a workflow on github]: https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-on-github
[about billing for github actions]: https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
[github actions]: https://docs.github.com/en/actions
[personal access token - github docs]: https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
[`repo` scope]: https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes
[Encrypted secrets - Github Docs]: https://docs.github.com/en/actions/reference/encrypted-secrets
[Workflow syntax for GitHub Actions - GitHub Docs]: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith
