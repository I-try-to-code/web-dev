const fs = require('fs');
const pdf = require('pdf-parse');

const pdfFilePath = 'path/to/your/file.pdf'; // Update this path to your PDF file

const readPDF = (filePath) => {
    let dataBuffer = fs.readFileSync(filePath);
    return pdf(dataBuffer);
};

const convertToJSON = (pdfData) => {
    return {
        instruction: "Provide example text from an individual with the INFJ personality type.",
        input: "",
        output: pdfData.text // Assuming the PDF text is what you want in the output
    };
};

readPDF(pdfFilePath).then(data => {
    const jsonOutput = convertToJSON(data);
    console.log(JSON.stringify(jsonOutput, null, 2));
}).catch(err => {
    console.error("Error reading PDF:", err);
});
