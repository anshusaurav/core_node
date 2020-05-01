var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
  fs.readFile('theory.md','UTF-8', (err, buf)=>{   //UTF for character encoding
    console.log(buf);
  });
// 2. Write script to read file theory.md and convert resulted buffer using toString
// method and console the result.
  fs.readFile('theory.md', (err, buf)=>{   //UTF for character encoding
    console.log(buf.toString());
  });

// 3. Write script to read file Synchronously and console the output.
  let store = fs.readFileSync('theory.md');
  console.log(store);
  fs.readFile('theory.md', (err, store)=>{
    console.log(store)
  })

// 4. Write script to create a file 'write.js' and write content of read.js in there.
  fs.readFile('theory.md', (err, store)=>{
    console.log(store)
  })
// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close
fs.open('./write.js',(err, fd) => {
    if(err) {
      console.log('Error: ', err);
    } else {
        fs.truncate('./write.js',fd.length, (err) => {
          if(err) {
            console.log('Error: ', err);
          } else {
              fs.writeFile('./write.js', "File written", (err) => {
                if(err) {
                  console.log('Error: ', err);
                } else {
                    fs.close(fd, (err) => {
                      if(err) {
                        console.log('Error: ', err);
                      }
                    })
                }
              })
          }
        })
    }
  })
// 6. Delete the content of write.js using fs.unlink or unlinkSync method
