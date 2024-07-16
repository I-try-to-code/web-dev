const fs= require("fs")
//fs.writeFile("message.txt", "i am entering a string. Hellooooooo ",(err) => {
 //   if (err) throw err;
  //  console.log("The file has been saved!");
  //}); 
fs.readFile("./message.txt", "utf8", (err, data) => {//very important to mention utf8 or else we get numerical values 
    if (err) throw err;
    console.log(data);
});
  