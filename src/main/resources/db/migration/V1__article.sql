CREATE TABLE article
(
    id               UUID NOT NULL,
    title            varchar (255) NOT NULL,
    subtitle         varchar (255),
    text             TEXT NOT NULL,
    created    TIMESTAMP NOT NULL,
    CONSTRAINT pk_article PRIMARY KEY (id)
);

