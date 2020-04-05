"use strict";
const mon = require("./mongooseWrap");
const mongoose = require("mongoose");
const Todo = require("./todo");
const dbServer = "localhost";
const dbName = "todo";

exports.upsertTodo = async function (req) {
    let user = 'anders'//req.params.todoer;    // udnytter todoer fra url i router(index.js
    let chk = { title: req.body.title };
    let todo = new Todo({
        overskrift: req.body.overskrift,
        indhold: req.body.indhold,
        prioritet: req.body.prioritet,
        startdato: req.body.startdato,
        slutdato: req.body.slutdato
    });
    try {
        let cs = await mon.upsert(dbServer, dbName, Todo, todo, chk);  // todo ændret fra toDo
        return;
} catch(e) {
    console.error(e);
    }
};

exports.getTodo = async function (query, sort) {
    try {
        let cs = await mon.retrieve(dbServer, dbName, Todo, query, sort);
        return cs;
    } catch (e) {
        console.error(e);
    }
};

exports.delTodo = async function (name) {
    try {
        let cs = await mon.remove(dbServer, dbName, Todo, name);
        return cs;
    } catch (e) {
        console.log(e);
    }
}
