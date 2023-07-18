const fs = require("fs/promises");

const handleCommand = require("./handler");

const main = async () => {
  const filePath = "command.txt"; // file path
  const flags = 'r'; // file is opened for reading
  const mode = 0o644; //  readable and writable file mode
  
  try {
    const commandFileHandler = await fs.open(filePath, flags, mode);

    commandFileHandler.on("change", async () => {
      const size = (await commandFileHandler.stat()).size; // get the size of our file
      const buff = Buffer.alloc(size); // allocate our buffer with the size of the file
      const offset = 0; // the location at which we want to start filling our buffer
      const length = buff.byteLength; // how many bytes we want to read
      const position = 0; // the position that we want to start reading the file from

      // we always want to read the whole content (from beginning all the way to the end)
      await commandFileHandler.read(buff, offset, length, position);

      const command = buff.toString("utf-8").trimStart();

      handleCommand(command);
    });

    // file watcher
    const watcher = fs.watch(filePath);

    console.log(`\nThe App has starting running\n`)

    // Once a change is made, emit the event to call the commandFileHandler function
    for await (const event of watcher) {
      if (event.eventType === "change") {
        commandFileHandler.emit("change");
      }
    }
  } catch (error) {
    commandFileHandler.close();
    console.error("Unexpected error:", error.message)

    process.exit(1)
  }
}

main()