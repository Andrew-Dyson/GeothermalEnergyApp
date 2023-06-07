DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS depths;

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    region VARCHAR(255)
);

CREATE TABLE depths (
    id SERIAL PRIMARY KEY,
    value INT,
    temperature INT,
    location_id INT NOT NULL REFERENCES locations(id) ON DELETE CASCADE
);

