DROP DATABASE IF EXISTS sdc;
create database sdc;
\c sdc



create table questions (
  question_id       serial primary key,
  product_id        integer,
  body              text not null check (char_length(body) < 300),
  created_at        text,
  score             integer,
  reported          integer,
  username          text not null check (char_length(username) < 50),
  email             text not null
);

create table answers (
  answer_id         serial primary key,
  question_id       integer REFERENCES questions (question_id),
  body              text not null check (char_length(body) < 300),
  created_at        text,
  score             integer,
  reported          integer,
  username          text not null check (char_length(username) < 50),
  email             text not null
);


create table images (
  image_id           serial primary key,
  image_url          text not null,
  answer_id          integer REFERENCES answers (answer_id)
);