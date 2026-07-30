# WEEK 6 Exercise 3 - Git Branching and Merging

This walkthrough documents the steps requested in the "Explain branching and merging" lab exercise.

## Introduction to Branching and Merging
**Branching** in Git allows you to diverge from the main line of development (`master` or `main`) and continue to do work without messing with that main line. This is essential for feature development, bug fixing, and collaboration. 
**Merging** is the process of bringing the changes from your isolated branch back into the main line of development once your work is complete and tested.
In platforms like GitLab or GitHub, you accomplish merging via "Merge Requests" (or "Pull Requests"), which allow teams to review code visually before it is integrated.

---

## Part 1: Branching

**1. Create a new branch "GitNewBranch":**
```bash
git branch GitNewBranch
```

**2. List all local and remote branches:**
```bash
git branch -a
```
*Observation:* The output will display a list of branches. The current branch (e.g., `* master`) will have an asterisk `*` next to it indicating the active pointer (`HEAD`).

**3. Switch to the newly created branch, and add some files:**
```bash
git checkout GitNewBranch
```
*Alternatively, you can use `git switch GitNewBranch`.*

Create a file and add some content:
```bash
echo "Developing a new feature in the branch." > feature.txt
git add feature.txt
```

**4. Commit the changes to the branch:**
```bash
git commit -m "Add new feature file in GitNewBranch"
```

**5. Check the status:**
```bash
git status
```
*Output should reflect:* `On branch GitNewBranch. nothing to commit, working tree clean.`

---

## Part 2: Merging

**1. Switch back to the master (trunk):**
```bash
git checkout master
```

**2. List all the differences between trunk and branch (CLI):**
To see what changes exist on the branch that are not yet in `master`, execute:
```bash
git diff master..GitNewBranch
```

**3. List visual differences using P4Merge:**
Assuming you have configured P4Merge as your `difftool` (e.g., via `git config --global diff.tool p4merge`), you can open it visually by running:
```bash
git difftool master..GitNewBranch
```
This will open the P4Merge GUI showing side-by-side differences.

**4. Merge the source branch to the trunk:**
While actively on the `master` branch, merge the changes from `GitNewBranch`:
```bash
git merge GitNewBranch
```

**5. Observe the logging after merging:**
To view a visual command-line graph of your commit history and branches:
```bash
git log --oneline --graph --decorate
```
*Observation:* You will see the commit lines diverging for the branch and then coming back together into `master`, with labels (`HEAD -> master`) decorating the latest commit.

**6. Delete the branch after merging and observe git status:**
Since the feature is successfully merged, the branch pointer is no longer needed:
```bash
git branch -d GitNewBranch
```
Finally, verify the working directory is clean:
```bash
git status
```
