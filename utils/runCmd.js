const { exec, execSync } = require('child_process')

function runCmd(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout) => {
      if (err) {
        reject(err)
      } else {
        resolve(stdout.trim())
      }
    })
  })
}

function runCmdSync(cmd) {
  return execSync(cmd).toString()
    .trim()
}

module.exports = {
  runCmd,
  runCmdSync,
};
