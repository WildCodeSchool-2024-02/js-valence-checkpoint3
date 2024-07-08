CREATE TABLE boat (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE tile (
  id INT AUTO_INCREMENT NOT NULL,
  type VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  PRIMARY KEY(id)
);





CREATE TABLE album (
    id_album INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(25) NOT NULL,
    genre VARCHAR(25) NOT NULL,
    image VARCHAR(255),
    artiste VARCHAR(255) NOT NULL
);


CREATE TABLE piste (
    id_piste INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(25) NOT NULL,
    url_youtube VARCHAR(255) NOT NULL,
    id_album INT,
    FOREIGN KEY (id_album) REFERENCES album(id_album)
);


CREATE TABLE contient (
    id_album INT,
    id_piste INT,
    PRIMARY KEY (id_album, id_piste),
    FOREIGN KEY (id_album) REFERENCES album(id_album),
    FOREIGN KEY (id_piste) REFERENCES piste(id_piste)
);