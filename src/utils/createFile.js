const fs = require("fs/promises");

const createFile = async (path) => {
  try {
    // we want to check whether or not we already have that file
    const existingFileHandle = await fs.open(path, "r");
    existingFileHandle.close();

    // we already have that file...
    return console.log(`The file ${path} already exists.`);
  } catch (error) {
    // we don't have the file, now we should create it
    const newFileHandle = await fs.open(path, "w");
    console.log("A new file was successfully created.");
      
    newFileHandle.close();
  }
}

module.exports = createFile;