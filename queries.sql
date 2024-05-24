USE htld;

CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100)
);

INSERT INTO people (firstname, lastname) VALUES ('Noel', 'Riedmann');
INSERT INTO people (firstname, lastname) VALUES ('Luca', 'Grabherr');
INSERT INTO people (firstname, lastname) VALUES ('Jonas', 'Kronabitter');
INSERT INTO people (firstname, lastname) VALUES ('Jonas', 'Nigg');


USE htld;
SELECT * FROM people 
