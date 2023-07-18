# File Command Handler

File Command Handler written in Node.js using JavaScript. This file-command-handler allows users to perform various operations on files, such as creating, deleting, renaming, and adding content to them. The handler continuously monitors a specified file named "command.txt" for changes and executes commands based on the content of that file.

## Table of Contents

1. [Introduction](#introduction)
2. [Commands](#commands)
3. [Function Descriptions](#function-descriptions)
4. [Usage](#usage)
5. [Installation](#installation)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The file command handler utilizes the `fs/promises` module, which is a built-in module in Node.js, to interact with the file system. It employs asynchronous functions to handle file operations efficiently. It reads commands from a designated file called "command.txt" and performs the corresponding actions based on the command type.

## Commands

The file-command-handler supports the following commands:

- **Create a file:** To create a file, use the command `create a file <path>`. Replace `<path>` with the desired file absolute path.

- **Delete a file:** To delete a file, use the command `delete file <path>`. Replace `<path>` with the absolute path of the file you want to delete.

- **Rename a file:** To rename a file, use the command `rename file <old-path> to <new-path>`. Replace `<old-path>` with the current file absolute path and `<new-path>` with the desired new file absolute path.

- **Add content to a file:** To add content to a file, use the command `add to file <path> this content: <content>`. Replace `<path>` with the file absolute path and `<content>` with the content you want to add.

## Importance Note

1.  The path must be the absolute path, which is the exact location of a file or directory in a file system. Examples: - Unix-based systems: `/home/user/documents/file.txt` - Windows systems: `C:\Users\User\Documents\file.txt`

2.  Currently, You can only write one command in the `command.txt`. If you write more than one command, it will not process it. In the future, there will be an implementation of multiple command handling.

## Function Descriptions

The utils folder contain the following functions:

- `createFile.js`: Creates a new file at the specified `path` if it doesn't already exist.

- `deleteFile.js`: Deletes the file at the specified `path` if it exists.

- `renameFile.js`: Renames the file from `oldPath` to `newPath` if the original file exists and the new path is valid.

- `addToFile.js`: Appends the specified `content` to the file at the given `path`.

## Usage

To use the file command handler, follow these steps:

1. Ensure that you have Node.js (v14 or higher) installed on your machine.

2. Clone the repository:

   ```bash
   https://github.com/obinnafranklinduru/file-command-handler
   ```

3. Navigate to the project directory:

   ```bash
   cd file-command-handler
   ```

4. Execute the file-command-handler by running the command: `npm run start` or `yarn run start`

5. The file-command-handler will continuously monitor the "command.txt" file for changes and execute the corresponding commands.

6. Create, delete, rename, or add content to files by modifying the "command.txt" file with the supported commands.

## Installation

Since the file-command-handler uses the built-in `fs/promises` module, there are no additional dependencies to install.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to open a GitHub issue or submit a pull request.

## License

This project is licensed under the MIT License
