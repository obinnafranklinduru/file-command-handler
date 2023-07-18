const fs = require("fs/promises");

let addedContent;

const addToFile = async (path, content) => {
  if (addedContent === content) {
    console.log('Enter a different value');
    return;
  };

  try {
    const fileHandle = await fs.open(path, "a");
    fileHandle.write(content);

    addedContent = content;
    
    console.log("The content was added successfully.");

    fileHandle.close();
  } catch (e) {
    fileHandle.close();

    console.log("An error occurred while removing the file: " + e.message);
  }
}

module.exports = addToFile;