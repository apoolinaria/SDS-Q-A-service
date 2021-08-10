create schema questionsAndAnswers;

create table questionsAndAnswers.questions (
  question_id       serial primary key,
  body              text not null check (char_length(body) < 300),
  created_at        timestamp,
  score             integer,
  reported          integer,
  user-id           integer REFERENCES users (user-id)
);

create table questionsAndAnswers.answers (
  answer_id         serial primary key,
  body              text not null check (char_length(body) < 300),
  created_at        timestamp,
  score             integer,
  reported          integer,
  user-id           integer REFERENCES users (user-id)
);

create table questionsAndAnswers.users (
  user-id           serial primary key,
  username          text not null check (char_length(username) < 50),
  email             text not null unique,
);

create table questionsAndAnswers.images (
  image_id           serial primary key,
  image_url          text not null,
  answer_id          integer REFERENCES questions (answer_id)
);