var fs = require("fs");

module.exports = {
    get: function fs_test(req, res, next) {
        fs.readFile('file.txt', 'utf-8', function(err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
        console.log("end");
    }
};