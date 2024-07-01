/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
const fs= require("fs")
console.log("enter the website whose qr code you want to genetrate: ");
fs.writeFile("message.txt", "i am entering a string. Hellooooooo ",(err) => {
   if (err) throw err;
  console.log("qr code is being generated");
}); 

var qr = require('qr-image');
fs.readFile("./message.txt", "utf8", (err, data) => {//very important to mention utf8 or else we get numerical values 
    if (err) throw err;
    var qr_svg = qr.image(data, { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('website.svg'));
 
var svg_string = qr.imageSync(data, { type: 'svg' });
});
  


//this wikl give you a webgage leading qr code