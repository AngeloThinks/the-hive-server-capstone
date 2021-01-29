'use strict';
const express = require('express');
const engineerService = require('./engineerService');
const { requireAuth } = require('../middleware/jwt-auth');
const engineerRouter = express.Router();

engineerRouter
  .route('/')
  .get((req, res, next) => {
    engineerService.getAllEngineers(req.app.get('db'))
      .then(engineers => {
        res.json(engineers);
      })
      .catch(next);
  });
engineerRouter 
  .route('/:engineer_id')
  .all(requireAuth)
  .get((req,res)=>{
    engineerService.getById(req.app.get('db'),req.params.engineer_id)
      .then(engineer => {
        res.json(engineer);
      });

  });

module.exports = engineerRouter;