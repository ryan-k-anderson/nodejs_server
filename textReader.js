const fs = require('fs');
const zlib = require('zlib');
//'fs' is a built into node module and you would still import the module like self made ones.
const fileName = 'loremipsum.txt';
const gzip = zlib.createGzip();

//Synchronous Version
// const text = fs.readFileSync(fileName, 'utf8');
    //fs.readeFileName is a function in the fs module that will read specified files you tell it to
    //utf8 is the encoding needed to bring back what is needed

// console.log(text)



//Asynchronous Version
// fs.readFile(fileName, 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// });

// console.log('This will get logged to console first')



//Readable Stream Version
// const readStream = fs.createReadStream(fileName, 'utf8');
// const writeStream = fs.createWriteStream('output.txt', 'utf8');
// let myData = '';
// let totalChunks = 0;

// readStream.on('data', (chunk) => {
// myData += chunk;
// totalChunks +=1;
// console.log(totalChunks)
// writeStream.write(`Chunk#${totalChunks}: ${chunk}`)
// });

// readStream.on('end', () => {
//     console.log('Finished reading data')
// });

// readStream.on('error', (err) => {
//     throw err;
// });



//Compressing into a zip file
const readStream = fs.createReadStream(fileName, 'utf8');
const writeStream = fs.createWriteStream('output.txt.gz', 'utf8');

readStream.pipe(gzip).pipe(writeStream)
