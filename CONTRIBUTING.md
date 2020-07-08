# Contributing

## Coding rules

### To ensure consistency throughout the source code, keep these rules in mind as you are working:

  - We follow the angular style guide so make sure you are up to date on that: https://angular.io/guide/styleguide

<br>

# Commit Message Guidelines
We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history.

### Commit mesage structure:

> <code> 'type (scope): subject (ticket number if exists)' </code>

## Where: 
  
  ### Type

    Must be one of the following:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system, CI configuration or external dependencies (example scopes: gulp, broccoli, npm)
- chore: Other changes that don't modify src or test files

### Scope

- The scope could be anything specifying place of the commit change. For example auth, leader board etc.

### Subject

 - The subject contains succinct description of the change:

    - use the imperative, present tense: "change" not "changed" nor "changes"
    - don't capitalize first letter
    - no dot (.) at the end
