# Docker container for PHP application

Basic container running Apache, PHP and xDebug. Ready to develop your webapplication!

## Pre-request

Docker and Docker Compose installed and running on your machine. More information here:

- [Install Docker](http://docs.docker.com/installation/ubuntulinux/)
- [Install Docker Compose](http://docs.docker.com/compose/install)

## Installation

Run the following command:

```
docker-compose up
```

Docker will create the image corresponding to the Dockerfile. Then it will use the configuration in 
docker-compose.yml to setup a container with the image.

## Docker cheat sheet

`docker exec -it container_id /bin/bash`, open a terminal session in the container
