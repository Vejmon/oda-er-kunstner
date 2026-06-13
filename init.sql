SELECT 'CREATE DATABASE kunstner'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'kunstner')\gexec
\c kunstner

CREATE USER kunstner_api_flyway WITH PASSWORD 'password';
GRANT ALL ON SCHEMA public TO kunstner_api_flyway;

CREATE USER kunstner_api_user WITH PASSWORD 'password';
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public to kunstner_api_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public to kunstner_api_user;
ALTER DEFAULT PRIVILEGES
    FOR USER kunstner_api_flyway
    IN SCHEMA public
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES
    TO kunstner_api_user;
