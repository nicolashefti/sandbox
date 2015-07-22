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

## Cheat sheet

`docker exec -it container_id /bin/bash`, opens a terminal session in the container

`eval "$(boot2docker shellinit)"`, exports boot2docker environment variables (MacOs)




