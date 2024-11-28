"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

/* ------------------------------------------------------- */
//* SEQUELIZE
// npm i sequelize sqlite3

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);

const Todo = seuelize.define("todos", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: DataTypes.TEXT,

  priorty: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

sequelize.sync();

sequelize
  .authenticate()
  .then(() => console.log("* DB Connected * "))
  .catch(() => console.log("* DB Not Connected * "));

module.exports = Todo;
