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

## Debug session

To set up CLI debugging with PHPStorm. In a nutshell:

```
export PHP_IDE_CONFIG="serverName=PHP_server_name"

export XDEBUG_CONFIG="remote_enable=1 remote_mode=req remote_port=9000 remote_host=192.168.33.1 remote_connect_back=0"
```

Notes:

- remote_port is the port on which xDebug connect to PHPStorm. Set it to 9000.
- remote_host is the IP address of the host (your computer), not the one of Apache server in the Docker container.


More in [this article](http://randyfay.com/content/remote-command-line-debugging-phpstorm-phpdrupal-including-drush)

## Cheat sheet

`docker exec -it container_id /bin/bash`, opens a terminal session in the container

`eval "$(boot2docker shellinit)"`, exports boot2docker environment variables (MacOs)




