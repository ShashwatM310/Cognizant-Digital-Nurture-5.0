# WEEK 6 Exercise 2 - Git Ignore

This walkthrough documents the steps requested in the "Explain git ignore" lab exercise.

## What is `.gitignore`?
The `.gitignore` file is a plain text file where each line contains a pattern for files/directories to ignore.
When you build or run applications, temporary files, compiled binaries, and log files are often generated. Tracking these files in version control is unnecessary and can cause repository bloat and merge conflicts. By specifying patterns in `.gitignore`, Git knows to entirely skip tracking them, meaning they won't appear when you run `git status` or attempt to `git add` them.

## Ignoring `.log` Files and the `log` Folder

As per the lab exercise, we need to ignore any file with a `.log` extension, and an entire directory named `log`.

### 1. File Structure Setup
To test the ignore behavior, we create the following files inside our repository context (`GitDemo`):
1. `test.log` (in the root of the repository)
2. `log/another.log` (a file inside a directory named `log`)

### 2. Updating `.gitignore`
We create a `.gitignore` file in the root of the repository containing the following rules:
```text
*.log
log/
```
- `*.log`: The asterisk (`*`) is a wildcard character. This rule tells Git to ignore any file ending in `.log`, no matter where it is located.
- `log/`: The trailing slash indicates a directory. This tells Git to ignore the `log` folder entirely, including all of its contents.

### 3. Verification

Once these files are generated, we can verify that Git is successfully ignoring them by executing:
```bash
git status
```
When running `git status`, Git checks the working directory. Because of the `.gitignore` rules:
- `test.log` will **not** appear in the "Untracked files" section.
- The `log` folder will **not** appear in the "Untracked files" section.
- Only the `.gitignore` file itself will appear, waiting to be tracked and committed.

If we forcefully attempt to track a log file using `git add test.log`, Git will block the action and display a warning indicating that the file is ignored by one of your `.gitignore` patterns.

## Summary
The `.gitignore` configuration guarantees that the local repository and the Git remote repository remain clean of unwanted debug and runtime log traces, keeping source control focused purely on source code.
