const express = require('express');
const router = express.Router();
const db = require('../db');
const config = require('../config');
const mysql = require('mysql');

//  Get All categories
//  Get a cateogie by id
//  Add a categorie
//  Update a categorie

router.get('/categorie', (req, res, next)=>{
    const sql = "select * from categorie";
    const con =  mysql.createConnection(config.db);
    try {
        con.query(sql, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error("error getting a list of categories");
        next(err);
    }
})

router.get('/categorie/:id', (req, res, next)=>{
    const data = req.params;
    const sql = "select * from categorie where id=?";
    const con =  mysql.createConnection(config.db);
    try {
        con.query(sql, data.id, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error("error getting a list of categories");
        next(err);
    }

})

router.post('/categorie', (req, res, next)=>{
    const con =  mysql.createConnection(config.db);
    const data = req.body;
    const sql = "insert into categorie SET ?";
    try {
        con.query(sql, data, function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error(err);
        next(err);
    }
})

router.put('/categorie', (req, res, next)=>{
    const con =  mysql.createConnection(config.db);
    const data = req.body;
    const sql = "update categorie SET title=? where id=?";
    try{
        con.query(sql, [data.title, data.id], function(err, results, fields){
            if(err) throw new Error(err);
            res.end(JSON.stringify(results))
            con.end();
        });
    }
    catch(err){
        console.error(err);
        next(err);
    }
})


module.exports = router