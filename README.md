# The-Hive-Capstone

---------------------------------------------------------------------------------

 Live Demo: 
 
 Client Repo: 
 Server Repo: 
 
---------------------------------------------------------------------------------
## About:



---------------------------------------------------------------------------------

## Technologies Used

### Backend

   * Postgres
   * NodeJs
   * Express
   * Knex
   * Postgrator
   * JWT
   * bcryptjs
   * morgan
   
### FrontEnd

   * JavaScript
   * React
   * React-Router
   * jwt-decode
---------------------------------------------------------------------------------

## Routes

app.use('/hive/auth',authRouter);
app.use('/hive/engineer',engineerRouter);
app.use('/hive/services',serviceRouter);
app.use('/hive/appointment',appointmentRouter);




### '/hive/' the Landing page route

This is the 'root' endpoint and does not post, fetch, nor delete any data.


### '/hive/user' user route 

Allows one to post a new user with the required body data.

### '/hive/auth/token' provides authentication tokens via post

###  '/hive/engineer' provides get information from dog engineer database

### '/hive/services' provides get information from services database

### '/hive/appointment' provides information regarding to appointments

* Also provides :/appointment_id route to set and get appointment information from database# the-hive-server-capstone
