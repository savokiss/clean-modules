const fs = require('fs-extra')
const path = require('path')

// 获取所有子目录
function getSubDirectories(parentDirectory) {
  return fs.readdirSync(parentDirectory).filter(subDir => 
      fs.statSync(path.join(parentDirectory, subDir)).isDirectory()
  );
}

function deleteNodeModules(directory) {
  const nodeModulePath = path.join(directory, 'node_modules');

  if (fs.existsSync(nodeModulePath)) {
      fs.removeSync(nodeModulePath);
      console.log(`Deleted: ${nodeModulePath}`);
  }
}

function deleteSubNodeModules (directory) {
  const subDirs = getSubDirectories(directory);

  for (let subDir of subDirs) {
    deleteNodeModules(path.join(directory, subDir))
  }
}

module.exports = {
  getSubDirectories,
  deleteNodeModules,
  deleteSubNodeModules
}