const express = require('express')
const chalk = require('chalk')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Running on appB' })
})

app.listen(5001, () => console.log(chalk.green('App is running on port 5001')))