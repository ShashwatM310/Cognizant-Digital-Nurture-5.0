# WEEK 6 Exercise 1 - Git Basics

This walkthrough documents the steps requested in the "Familiar with Git commands" lab exercise.

## Step 1: Setup your machine with Git Configuration

To verify that Git is installed on your local machine, open the Git Bash terminal and execute:
```bash
git --version
```
This should output the installed version of Git (e.g., `git version 2.39.1.windows.1`).

Next, configure your user ID and email ID globally so that your commits are accurately attributed:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
You can verify that these have been set correctly by listing your configuration variables:
```bash
git config --list
```

## Step 2: Integrate notepad++.exe to Git and make it a default editor

To integrate Notepad++ with Git bash, ensure that its path is present in your Windows System Environment Variables.
Once added to the `Path` variable, you can create a Git bash alias to launch it quickly:
```bash
alias npp='notepad++'
```

Next, configure Notepad++ as your default text editor for Git (used when merging or writing multi-line commit messages):
```bash
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```
Verify the global editor configuration by executing:
```bash
git config --global -e
```
This will open your `.gitconfig` file inside Notepad++.

## Step 3: Add a file to source code repository

First, initialize a new Git repository named `GitDemo`:
```bash
mkdir GitDemo
cd GitDemo
git init
```
This initializes a local `.git` hidden folder. You can verify it exists by running `ls -la`.

Next, create a new text file named `welcome.txt` and populate it with text:
```bash
echo "Welcome to Git repository!" > welcome.txt
cat welcome.txt
```

At this stage, Git sees the new file but is not tracking it. Verify this status:
```bash
git status
```
It will display `welcome.txt` under "Untracked files". 

To begin tracking the file and stage it for a commit, run:
```bash
git add welcome.txt
```
To commit the file into the local repository using a multi-line commit message, execute:
```bash
git commit
```
This opens your default editor (Notepad++ if configured). Type your commit message, save, and close the editor.

After committing, checking `git status` will show `nothing to commit, working tree clean`.

Finally, link to your remote GitLab/GitHub repository and push the changes:
```bash
git remote add origin <your_remote_repository_url>
git pull origin master
git push origin master
```
