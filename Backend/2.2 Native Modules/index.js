const fs = require("fs");

fs.writeFile("my_message.txt", "Hello from NodeJS!", (err) => {
    if(err) throw err;
    console.log("The file has been saved!!!");
});

fs.readFile("my_message.txt", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});