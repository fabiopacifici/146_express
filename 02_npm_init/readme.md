# Steps

- Run `npm init` in the terminal.
- Install the required dependencies by running `npm i axios`
- add the file `.gitignore` with the content `node_modules/`
- create the git ignore from the terminal with `touch .gitignore`

# Make a project a repo

- Run `git init` in the terminal.
- Add the files to the staging area with `git add .`
- Commit the changes with `git commit -m "Initial commit"`
- check the repo status with `git status`

## Nano (git bash editor in vscode)

- Open the terminal in VSCode.
- Type `nano .gitignore` and press Enter.
- to save: Press `CTRL + O`, then Enter.
- to exit: Press `CTRL + X`.

## Add the watch flag to the package.json

- Open the `package.json` file.
- Add the following line to the `scripts` section:

  ```json
  "dev": "node --watch server.js"
  ```

To run the script now you can use the command:

```bash
npm run dev
```

To stop the server you can use `CTRL + C` in the terminal.
