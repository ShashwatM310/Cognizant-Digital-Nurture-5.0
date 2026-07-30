# WEEK 6 Exercise 5 - Clean Up and Push Back to Remote Git

This walkthrough documents the steps requested in the "Explain how to clean up and push back to remote Git" lab exercise.

## Executing Remote Sync and Clean Up

After finalizing merges, resolving conflicts, and cleaning up old branches (as demonstrated in the previous labs), it is important to synchronize your local repository with the remote repository on GitLab/GitHub.

**1. Verify if master is in clean state**
Before pulling or pushing, always ensure your working directory does not contain unsaved changes. This prevents merge conflicts from remote changes overriding local untracked work.
```bash
git checkout master
git status
```
*Expected Output:* `nothing to commit, working tree clean`

**2. List out all the available branches**
Verify what branches currently exist in your local environment and their upstream configurations.
```bash
git branch -a
```
*Observation:* You should primarily see your main branch (`master` or `main`) without the obsolete branches deleted during previous cleanup tasks (e.g., `GitWork`, `GitNewBranch`). 

**3. Pull the remote git repository to the master**
Before pushing your latest local commits, you must fetch and merge any changes that might have occurred on the remote repository (perhaps authored by other developers) while you were working.
```bash
git pull origin master
```
*Expected Output:* Either `Already up to date` if no remote changes exist, or a summary of the merged objects.

**4. Push the changes to the remote repository**
Now that your local branch is synchronized with the remote, you can push the local commits generated during the previous merge conflict resolution lab ("Git-T03-HOL_002").
```bash
git push origin master
```
*Expected Output:* Git will display object compression statistics and confirm the URL to which the changes were pushed.

**5. Observe if the changes are reflected in the remote repository**
To verify the push visually:
1. Open your web browser.
2. Navigate to your GitLab/GitHub repository URL.
3. Refresh the `master` branch interface.
4. Check the commit history. You will see the latest commits, including the `Merge GitWork branch and resolve hello.xml conflict` commit pushed during step 4.
