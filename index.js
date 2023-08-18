#!/usr/bin/env node

const prompts = require('prompts')
const path = require('path')
const { runCmd } = require('./utils/runCmd');
const { deleteNodeModules, deleteSubNodeModules } = require('./utils/folder');

(async () => {
  const answer = await prompts([{
    type: 'select',
    name: 'folder',
    message: 'Choose where to clean.',
    choices: [
      { title: 'Current Folder', value: 'current' },
      { title: 'Cancel', value: 'cancel' }
    ],
  }])

  if (answer.folder === 'current') {
    // delete current folder
    deleteNodeModules(process.cwd())
    // delete all subfolder
    deleteSubNodeModules(process.cwd())
  } else if (answer.folder === 'cancel') {
    console.log('Canceled.')
  }
})()