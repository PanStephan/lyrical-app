const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')

const models = require('./models')
const schema = require('./schema/schema')
const webpackConfig = require('../webpack.dev.config.js')

const app = express()
// damopem451@in4mail.net
const MONGO_URI = `mongodb+srv://stephan:R_U_MINE@cluster0.takbq.mongodb.net/5f312a3cdea41576024f7ec5?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to mongodb instance'))
  .catch(e => console.log('DB error', e)) 

app.use(express.json())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  }),
)

app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app