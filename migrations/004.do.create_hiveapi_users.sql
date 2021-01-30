CREATE TABLE hiveapi_users (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_name TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  date_modified TIMESTAMP
);
ALTER TABLE appointments
  ADD COLUMN
    users_id INTEGER REFERENCES hiveapi_users(id)
    ON DELETE SET NULL;

    