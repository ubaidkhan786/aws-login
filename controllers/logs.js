var exec = require('child_process').exec; // required for executing shell commands 

const getLogs = (type,res) => {
  exec(`cat /var/log/nginx/${type}.log`, function (error, stdout, stderr) {
    res.send(stdout)
  });
}

exports.accessLogs = function (req, res) {
  getLogs('access',res)
}

exports.errorLogs = function (req, res) {
  getLogs('error',res)
}

