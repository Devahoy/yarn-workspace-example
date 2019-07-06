const express = require('express')
const chalk = require('chalk')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Running on appC' })
})

app.listen(5002, () => console.log(chalk.green('App is running on port 5002')))