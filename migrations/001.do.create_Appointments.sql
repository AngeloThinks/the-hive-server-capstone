CREATE TABLE appointments(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    time TEXT NOT NULL,
    tomorrow TEXT,
    date_created TIMESTAMP DEFAULT now() NOT NULL
);
