
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
--create tables
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "status_name" VARCHAR (100) UNIQUE NOT NULL
);

CREATE TABLE "skill" (
    "id" SERIAL PRIMARY KEY,
    "skill" VARCHAR (100) UNIQUE NOT NULL
);

CREATE TABLE "job" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (200),
    "post_url" VARCHAR (1000),
    "company" VARCHAR (200),
    "address" VARCHAR (300),
    "status_id" INT REFERENCES "status",
    "status_date" DATE DEFAULT CURRENT_DATE,
    "note" VARCHAR(2000),
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "job_skill" (
    "id" SERIAL PRIMARY KEY,
    "job_id" INT REFERENCES "job",
    "skill_id" INT REFERENCES "skill"
);

CREATE TABLE "aws_document" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR(20),
	"url" VARCHAR(200),
	"user_id" INT REFERENCES "user",
	"job_id" INT REFERENCES "job"
	);
