# The-Hive-Capstone

---------------------------------------------------------------------------------

 [Live Demo](https://the-hive-client-capstone.vercel.app)

 [Server Repo](https://github.com/AngeloThinks/the-hive-server-capstone.git)
 
 [Client Repo](https://github.com/AngeloThinks/the-hive-client-capstone.git)
 
user_name: 'user',
password: 'User1234!'
 
---------------------------------------------------------------------------------
## About:

The Hive is a service for musicians that are too busy to do it all. There's production, practicing, mixing, and mastering. Hive is here to help the user utilize the services of our Audio Engineers and Producers. This app will allow users to book a session with the Engineer of their choice through an appointment system.

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

app.use('/hiveapi/auth',authRouter);
app.use('/hiveapi/engineer',engineerRouter);
app.use('/hiveapi/services',serviceRouter);
app.use('/hiveapi/appointment',appointmentRouter);




### '/hive/' the Landing page route

This is the 'root' endpoint and does not post, fetch, nor delete any data.


### '/hiveapi/user' user route 

Allows one to post a new user with the required body data.

### '/hiveapi/auth/token' provides authentication tokens via post

###  '/hiveapi/engineer' provides get information from engineer database

### '/hiveapi/services' provides get information from services database

### '/hiveapi/appointment' provides information regarding to appointments

* Also provides :/appointment_id route to set and get appointment information from database# the-hive-server-capstone
