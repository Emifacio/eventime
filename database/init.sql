CREATE TABLE IF NOT EXISTS `events` (
  `id` SERIAL PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` date,
  `time` time,
  `location` varchar(255),
) 

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);