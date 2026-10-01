CREATE TABLE article
(
    id               UUID NOT NULL,
    title            TEXT,
    subtitle         TEXT,
    CONSTRAINT pk_article PRIMARY KEY (id)
);

CREATE TABLE paragraph
(
    id               UUID NOT NULL,
    article_id       UUID NOT NULL,
    content          TEXT,
    CONSTRAINT pk_paragraph PRIMARY KEY (id),
    CONSTRAINT fk_article FOREIGN KEY (article_id) REFERENCES article (id)
);

