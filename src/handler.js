const createFile = require("./utils/createFile");
const deleteFile = require("./utils/deleteFile");
const renameFile = require("./utils/renameFile");
const addToFile = require("./utils/addToFile");

// commands
const CREATE_FILE = "create a file";
const DELETE_FILE = "delete the file";
const RENAME_FILE = "rename the file";
const ADD_TO_FILE = "add to the file";

const handleCommand = (command) => {

    // Validating the command format
    if (!command.includes(" ")) {
        console.log("Invalid command format.");
        return;
    }
    
    // create a file:
    // create a file <path>
    if (command.includes(CREATE_FILE)) {
        const filePath = command.substring(CREATE_FILE.length + 1);
        createFile(filePath);
    }

    // delete a file
    // delete the file <path>
    if (command.includes(DELETE_FILE)) {
        const filePath = command.substring(DELETE_FILE.length + 1);
        deleteFile(filePath);
    }

    // rename file:
    // rename the file <path> to <new-path>
    if (command.includes(RENAME_FILE)) {
        const _idx = command.indexOf(" to ");
        const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx);
        const newFilePath = command.substring(_idx + 4);

        renameFile(oldFilePath, newFilePath);
    }

    // add to file:
    // add to the file <path> this content: <content>
    if (command.includes(ADD_TO_FILE)) {
      const _idx = command.indexOf(" this content: ");
      const filePath = command.substring(ADD_TO_FILE.length + 1, _idx);
      const content = command.substring(_idx + 15);

      addToFile(filePath, content);
    }
}

module.exports = handleCommand;