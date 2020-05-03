7. // Write respective headers object below.
const url = require("url");

let obj = url.parse("https://altcampus.http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4");

console.log(JSON.stringify(obj, undefined, 4));

//     "protocol": "https:",
//     "slashes": true,
//     "auth": null,
//     "host": "altcampus.http",
//     "port": null,
//     "hostname": "altcampus.http",
//     "hash": null,
//     "search": "?token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "query": "token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "pathname": "//localhost:3000/api/v3",
//     "path": "//localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "href": "https://altcampus.http//localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4"


8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4


obj = url.parse("https://altcampus.http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4");

console.log(JSON.stringify(obj, undefined, 4));

//     "protocol": "https:",
//     "slashes": true,
//     "auth": null,
//     "host": "altcampus.http",
//     "port": null,
//     "hostname": "altcampus.http",
//     "hash": null,
//     "search": "?token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "query": "token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "pathname": "//localhost:3000/api/v3",
//     "path": "//localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "href": "https://altcampus.http//localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4"


9. // Write parsed query object

obj = url.parse("https://altcampus.http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4", true);

console.log(JSON.stringify(obj, undefined, 4));

// {
//     "protocol": "https:",
//     "slashes": true,
//     "auth": null,
//     "host": "altcampus.http",
//     "port": null,
//     "hostname": "altcampus.http",
//     "hash": null,
//     "search": "?token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "query": {
//         "token": "8372fcb8y2874b2t478t6t48cbtbc72t4"
//     },
//     "pathname": "//localhost:3000/api/v3",
//     "path": "//localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4",
//     "href": "https://altcampus.http//localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4"
// }