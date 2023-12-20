CREATE SCHEMA db_languages;
CREATE TABLE db_languages.words (
id_word INT NOT NULL AUTO_INCREMENT,
word VARCHAR(45) NOT NULL,
translation VARCHAR(45) NOT NULL,
tries INT,
successes INT, 
PRIMARY KEY (id_word));
INSERT INTO db_languages.words (word, translation, tries, successes) VALUES ('Hallo', 'hello', 0, 0);
