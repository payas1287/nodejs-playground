"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

/* ------------------------------------------------------- */
//! ROUTERS:

const router = require("express").Router();

const todo = require("../controllers/todo.controller");

router.route("/").get(todo.list).post(todo.create);

router
  .route("/:id")
  .get(todo.read)
  .put(todo.update)
  .patch(todo.update)
  .delete(todo.delete);

module.exports = router;