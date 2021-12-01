process.stdout.write('hello from spinner1.js... \rheyyy\n');
const animations = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', 
'\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '  ];
let time = 100
for (const char of animations) {
    setTimeout(() => {
        process.stdout.write(char);
    }, time)
    time += 200;
  };
  setTimeout(() => {
      
  })