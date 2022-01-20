# Contributing to spotify-embed

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested. Add tests.
3. Update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

> Follow our [Pull Request Template]()

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](https://github.com/Gabb-c/spotify-embed/blob/main/LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs and suggest features using Github's [issues](https://github.com/Gabb-c/spotify-embed/issues)

We use GitHub issues to track public bugs and feature requests. Please, follow our templates:

- [Bug report template]()
- [Feature request template]()

## Code Style

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), so make sure your code lints:

```
# ESLint

$ yarn lint:fix

# Prettier

$ yarn format
```

> lint-staged will lint and format your code before every `git commit`

## Commit Style

To enhance the readability of the commits, this project uses [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/).
It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

> lint-staged will check your commit messages with [Commitlint](https://github.com/conventional-changelog/commitlint)

## License

By contributing, you agree that your contributions will be licensed under its [MIT License](https://github.com/Gabb-c/spotify-embed/blob/main/LICENSE).
