# SDS-Q-A-service

For this project I was given a set of CSV files with millions of records for the 'Questions and Answers' section of an growing e-commerce website.
My job in this team was to replace an existing database and produce a scalable API that will that will be able to serve at least 200 clients per second with 50ms average response times.

Technologies used:

- ![Node](https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge)
- ![Express](https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge)
- ![Docker](https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?&style=flat-square&logo=postgresql&logoColor=white)

Testing
-Loader.io

Deployment 
- ![AWS](https://img.shields.io/badge/AWS%20-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white)

While testing with loader.io (which is a load testing service that allows you to stress test your web aps by imitating clients connections) I was able to reach the goal.

My deployed service was able to achieve 600 requests per second with an aveage request time of 14ms and 0.003% error rate.
This stress testing was performed on my deployed service on AWS EC2 t2.micros with no scalling, load balancing, or caching.
The next step would be implementing horizontal scaling to be able to serve 1000 clients per second
