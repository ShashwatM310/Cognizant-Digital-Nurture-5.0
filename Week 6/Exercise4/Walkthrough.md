# WEEK 6 Exercise 4 - Resolving Merge Conflicts

This walkthrough documents the steps required to simulate and resolve a Git merge conflict as requested in the "Explain how to resolve the conflict during merge" lab exercise.

## Step-by-Step Conflict Simulation and Resolution

**1. Verify if master is in a clean state**
Before branching, ensure you don't have any uncommitted changes on your main branch.
```bash
git checkout master
git status
```
*Expected Output:* `nothing to commit, working tree clean`

**2. Create a branch "GitWork" and add a file "hello.xml"**
Create and immediately switch to a new isolated branch for development:
```bash
git checkout -b GitWork
```
Create the file:
```bash
echo "<message>Hello from GitWork branch</message>" > hello.xml
```

**3. Update the content of "hello.xml" and observe the status**
```bash
git status
```
*Expected Output:* `Untracked files: hello.xml`

**4. Commit the changes to reflect in the branch**
Add the file to the staging area and commit it to save the snapshot locally to the `GitWork` branch.
```bash
git add hello.xml
git commit -m "Add hello.xml in GitWork branch"
```

**5. Switch back to master**
```bash
git checkout master
```

**6. Add a file "hello.xml" to the master with different content**
Create the exact same file, but with conflicting content on the master branch.
```bash
echo "<message>Hello from Master branch</message>" > hello.xml
git add hello.xml
```

**7. Commit the changes to the master**
```bash
git commit -m "Add conflicting hello.xml in master branch"
```

**8. Observe the log**
Check the diverging paths of both branches.
```bash
git log --oneline --graph --decorate --all
```
*Observation:* You will see two diverging paths. One pointing to `master` and another pointing to `GitWork`, both containing different commits editing `hello.xml`.

**9. Check the differences with Git diff**
Compare the raw command line textual differences between the two branches:
```bash
git diff master..GitWork
```

**10. Visual visualization with P4Merge**
If configured, launch the visual diffing tool to review the conflicts side-by-side:
```bash
git difftool master..GitWork
```

**11. Merge the branch to the master**
Attempt to merge the branch into master. Since the exact same lines of the exact same file were modified differently in both branches, Git will halt the merge and throw a Conflict Error.
```bash
git merge GitWork
```
*Expected Output:* `CONFLICT (add/add): Merge conflict in hello.xml. Automatic merge failed; fix conflicts and then commit the result.`

**12. Observe the git markup**
If you open `hello.xml` in a standard text editor, you will see Git's conflict markers injection:
```xml
<<<<<<< HEAD
<message>Hello from Master branch</message>
=======
<message>Hello from GitWork branch</message>
>>>>>>> GitWork
```

**13. Use 3-way merge tool to resolve the conflict**
Launch the graphical merge tool (like P4Merge) to decide which code to keep visually.
```bash
git mergetool
```
*In the tool, select the changes you want to keep, save the file, and close the tool.*

**14. Commit the changes to the master to finalize conflict resolution**
Git leaves the merge in an open state until you commit the resolution.
```bash
git commit -m "Merge GitWork branch and resolve hello.xml conflict"
```

**15. Observe the git status and add backup file to `.gitignore`**
When `git mergetool` resolves conflicts, it usually leaves a backup file with a `.orig` extension (e.g. `hello.xml.orig`). Check this:
```bash
git status
```
Ignore these backup files permanently by adding them to `.gitignore`:
```bash
echo "*.orig" >> .gitignore
```

**16. Commit the changes to `.gitignore`**
```bash
git add .gitignore
git commit -m "Ignore mergetool backup .orig files"
```

**17. List out all available branches**
```bash
git branch -a
```

**18. Delete the merged branch**
Since `GitWork` is fully integrated, the pointer can be safely deleted.
```bash
git branch -d GitWork
```

**19. Observe the final repository log**
```bash
git log --oneline --graph --decorate
```
*Observation:* The graph will show a clean structural loop where the branch diverged, a commit occurred, and then it looped back into the master branch with the merge commit.
