CREATE TABLE boat (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    coord_x INT NOT NULL,
    coord_y INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE tile (
    id INT AUTO_INCREMENT NOT NULL,
    type VARCHAR(255) NOT NULL,
    coord_x INT NOT NULL,
    coord_y INT NOT NULL,
    PRIMARY KEY (id),
    has_treasure BOOLEAN NOT NULL DEFAULT 0
);