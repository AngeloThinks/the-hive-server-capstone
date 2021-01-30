CREATE TABLE services (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    type TEXT NOT NULL,
    price TEXT NOT NULL
);
ALTER TABLE Appointments
  ADD COLUMN
    services_id INTEGER REFERENCES services(id)
    ON DELETE SET NULL;

    