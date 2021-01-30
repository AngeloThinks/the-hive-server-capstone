'use strict';
const express = require('express');
const engineerServiceTools = require('./engineerService-tools');
const ServicesRouter = express.Router();

ServicesRouter
  .route('/')
  .get((req, res, next) => {
    engineerServiceTools.getAllServices(req.app.get('db'))
      .then(services => {
        res.json(services);
      })
      .catch(next);
  });

module.exports = ServicesRouter;