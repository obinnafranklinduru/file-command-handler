const fs = require("fs/promises");

const renameFile = async (oldPath, newPath) => {
  try {
    await fs.rename(oldPath, newPath);
      
    console.log("The file was successfully renamed.");
  } catch (e) {
    if (e.code === "ENOENT") {
      console.log("No file at this path to rename, or the destination doesn't exist.");
    } else {
      console.log("An error occurred while removing the file: " + e.message);
    }
  }
}

module.exports = renameFile;