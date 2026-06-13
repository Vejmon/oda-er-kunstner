CREATE TABLE art
(
    id               UUID NOT NULL,
    name             VARCHAR(255),
    description      TEXT,
    CONSTRAINT pk_art PRIMARY KEY (id)
);

ALTER TABLE art
    ADD CONSTRAINT uc_art_name UNIQUE (name);
