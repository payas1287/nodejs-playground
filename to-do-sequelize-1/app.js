"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- *
$ sudo npm init -y
$ sudo npm i express dotenv / express-async-errors
$ sudo echo PORT=8000 > .env
$ sudo npm i sequelize sqlite3
/* ------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// express-async-errors: catch async-errors and send to errorHandler:
require('express-async-errors')

// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })

/* ------------------------------------------------------- */
//* SEQUELIZE
// sudo npm i sequelize sqlite3

const { Sequelize, DataTypes } = require('sequelize')

//! DB Connection Settings:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

//! Model:
//* Her model, veritabanında bir tabloya karşılık gelir.
//* sequelize.define('tableName', { tableDetails })

//* Model isimleri PascalCase:
const Todo = sequelize.define('todos', {

    // sequelize'da id tanımlamaya gerek yoktur. Otomatik tanımlanır.
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false, // default: true
    //     unique: true, // default: false
    //     comment: 'description',
    //     primaryKey: true, // default: false
    //     autoIncrement: true, // default: false
    //     field: 'custom_name', 
    //     defaultValue: 0 // default: null
    // },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // description: {
    //     type: DataTypes.TEXT,
    //     allowNul: false
    // },
    description: DataTypes.TEXT, // ShortHand 

    priority: { // -1: Low, 0: Normal, 1: Yüksek
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    // createdAt: {},
    // updatedAt: {},
    // createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik yönetir.

})

//* Syncronization:
//? Model'i veritabanına uygula:
// sequelize.sync() // CREATE TABLE (ilk uygulama)
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE (Dikkat! Data var ise silinir.)
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP 
//! sync() methodu 1 kere uygulanır ((modelde değişiklik var ise tekrar uygulanır.)

//! Connect to DB:
sequelize.authenticate()
    .then(() => console.log('* DB Connected * '))
    .catch(() => console.log('* DB Not Connected * '))

/* ------------------------------------------------------- */
//! ROUTERS:

const router = express.Router()

//? https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

//! LIST TODOS:
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    // const data = await Todo.findAll({
    //     attributes: ['title', 'description', 'priority'], // Select Filelds
    //     where: { priority: -1 } // Filters
    // })
    const data = await Todo.findAndCountAll()

    res.status(200).send({
        error: false,
        result: data
    })

})

//? CRUD -> 

//! CREATE TODO:
router.post('/', async (req, res) => {
    
    // const receivedData = req.body
    // console.log(receivedData)

    // const data = await Todo.create({
    //     title: receivedData.title,
    //     description: receivedData.description,
    //     priority: receivedData.priority,
    //     isDone: receivedData.isDone
    // })
     const data = await Todo.create(req.body)

    res.status(201).send({
        error: false,
        result: data
    })
    
})

// READ TODO:
// UPDATE TODO:
// DELETE TODO:

app.use(router)

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));