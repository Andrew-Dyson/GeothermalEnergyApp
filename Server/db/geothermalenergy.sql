DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS depths;

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    elevation INT
);

CREATE TABLE depths (
    id SERIAL PRIMARY KEY,
    value INT,
    temperature INT,
    location_id INT NOT NULL REFERENCES locations(id) ON DELETE CASCADE
);

