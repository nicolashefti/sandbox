# Docker container for PHP application

Basic container for running Apache, PHP and xDebug. Ready to develop!

## Pre-request

Docker installed and running on your machine.

## Installation

Run the following command:

```
docker-compose up
```

Docker will create the image corresponding to the Dockerfile. Then it will use the configuration in 
docker-compose.yml to setup a container with the image.

## Cheat sheet

Open bash in the container of your choice:

```
docker exec -it container_name bash
```

For MacOs users, export boot2docker environment variables

```
eval "$(boot2docker shellinit)" 
```

## Ressources

- [Docker compose documentation](https://docs.docker.com/compose/)