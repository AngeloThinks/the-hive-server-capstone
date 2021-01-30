/* eslint-disable no-unused-vars */
'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const {NODE_ENV} = require('./config');

const usersRouter = require('./users/userRouter');
const authRouter = require('./auth/auth-router');
const engineerRouter = require('./engineers/engineerRouter');
const serviceRouter = require('./engineerServices/engineerService-router');
const appointmentRouter = require('./Appointments/Appointment-router');
const app = express();

app.use(morgan((NODE_ENV === 'production')
  ? 'tiny'
  : 'common', {
  skip: () => NODE_ENV === 'test',
}));
app.use(cors());
app.use(helmet());

app.use('/hiveapi/user',usersRouter);
app.use('/hiveapi/auth',authRouter);
app.use('/hiveapi/engineer',engineerRouter);
app.use('/hiveapi/services',serviceRouter);
app.use('/hiveapi/appointment',appointmentRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

app.get('/', (req, res) => {
  res.send('Welcome to The Hive Server!')
})

module.exports = app;