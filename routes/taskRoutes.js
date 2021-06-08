const express = require('express');
const router = express.Router();
const db = require('../db');
const config = require('../config');
const mysql = require('mysql');


//  Get All tasks
//  Get a Task by id
//  Get only archived tasks
//  Get only done Tasks
//  Get tasks by categorie id
//  Add a Task
//  Update a Task

router.get('/task', (req, res, next)=>{
    const sql = "select * from task";
    const con =  mysql.createConnection(config.db);
    try {
        con.query(sql, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error("Error getting a list of tasks");
        next(err);
    }
});


router.get('/task/byCategorie/:id', (req, res)=>{
    const data = req.params;
    const sql = "select * from task where id_cat=?";
    const con =  mysql.createConnection(config.db);
    try {
        con.query(sql, data.id, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error("Error getting a list of tasks by categorie");
        next(err);
    }
});

router.get('/task/:id', (req, res)=>{
    const data = req.params;
    const sql = "select * from task where id_cat=?";
    const con =  mysql.createConnection(config.db);
    try {
        con.query(sql, data.id, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error("Error getting a task");
        next(err);
    }
});


router.get('/taskarchived', (req, res)=>{
    const sql = "select * from task where archived='1'";
    const con =  mysql.createConnection(config.db);
    try {
        con.query(sql, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error("Error getting a task");
        next(err);
    }
})

router.get('/taskdone', (req, res) => {
    const sql = "select * from task where done='1'";
    const con =  mysql.createConnection(config.db);
    try {
        con.query(sql, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error("Error getting a task");
        next(err);
    }
})


router.post('/task', (req, res)=>{
    const con =  mysql.createConnection(config.db);
    const data = req.body;
    const sql = "insert into task SET ?";
    try{
        con.query(sql, data, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }catch(err){
        console.error("Error adding a task");
        next(err);        
    }
});

router.put('/task', (req, res, next)=>{const con =  mysql.createConnection(config.db);
    const data = req.body;
    const sql = "update task SET ? where id=?";
    try{
        con.query(sql, [data, data.id], function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }catch(err){
        console.error("Error Modifying a task informations");
        next(err);        
    }
});


module.exports = router;