const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');

// Read the text file
const text = fs.readFileSync(path.join(__dirname, 'public', 'portfolio-resume.txt'), 'utf8');

// Create a document
const doc = new PDFDocument();

// Pipe its output to a file
doc.pipe(fs.createWriteStream(path.join(__dirname, 'public', 'portfolio.pdf')));

// Add a title
doc.fontSize(25).text('Polina\'s UI/UX Design Portfolio', {
  align: 'center'
});

// Add content
doc.moveDown();
doc.fontSize(12).text(text, {
  paragraphGap: 10,
  indent: 20,
  align: 'justify',
  columns: 1
});

// Add a footer
doc.fontSize(10).text('© 2025 Polina Designs - All Rights Reserved', {
  align: 'center'
});

// Finalize the PDF and end the stream
doc.end(); 