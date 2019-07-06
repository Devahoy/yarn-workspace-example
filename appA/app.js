const express = require('express')
const chalk = require('chalk')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Running on appA' })
})

app.listen(5000, () => console.log(chalk.green('App is running on port 5000')))