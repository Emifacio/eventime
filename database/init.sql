CREATE TABLE IF NOT EXISTS `events` (
  id SERIAL PRIMARY KEY,
  name varchar(255) UNIQUE NOT NULL,
  description text NOT NULL,
  date date,
  time time,
  location varchar(255),
) 

ALTER TABLE events ADD COLUMN user_id INTEGER REFERENCES users(id);
-- remove unique from name
ALTER TABLE events DROP CONSTRAINT events_name_unique;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users ADD COLUMN gravatar VARCHAR(255);