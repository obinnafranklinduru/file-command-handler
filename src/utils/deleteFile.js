const fs = require("fs/promises");

const deleteFile = async (path) => {
    try {
      await fs.unlink(path);

      console.log("The file was successfully removed.");
    } catch (e) {
      if (e.code === "ENOENT") {
        console.log("No file at this path to remove.");
      } else {
        console.log("An error occurred while removing the file: " + e.message);
      }
    }
  };

module.exports = deleteFile;