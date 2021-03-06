## Desarrollador ##
*  Nombre: Freddy Lezama
*  Funciones: React / React Native Developer
*  Direccion: Capital Federal
*  Conocimientos: React.js, React Native, CSS, SASS, HTML, Boostrap, Javascript, SQL, Postgre, C++

## ReactJS Challenge ##

Desarrollo para visualizar la información de conversaciones captada por bots para los clientes de Inceptia AI
Resultado

![image](https://user-images.githubusercontent.com/39780800/164718961-e9d4111c-f098-46c7-84c0-c2971a9c0a50.png)

## General Info ##
This project uses the following technologies:

  *  Docker & docker-compose
  *  React.js
  *  Boostrap
## Notas para Pruebas de Este Desarrollo ##
Se sugiere que luego de clonar el repositorio de manera local, se navegue hasta la dirección '\ChallengeReactJSDev\frontend' y en esta carpeta se ejecute el comando 'npm start' ya que acá es donde está configurada la ejecución de los scripts de node

## Docker & make instructions ##
To deploy locally or remotely you'll need [docker-compose](https://docs.docker.com/compose/install/) and [docker-engine](https://docs.docker.com/engine/installation/linux/ubuntulinux/)
You can just copy and paste the following commands:

```bash
sudo apt-get install apt-transport-https ca-certificates
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker $USER
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo gpasswd -a ${USER} docker
sudo service docker restart
newgrp docker
```

Once set up you can run `make [tab][tab]` to see a list of actions:

  *  `make build` to initially build the containers
  *  `make up` to deploy the containers
  *  `make stop` to turn off containers
  *  `make clean` to remove the containers
  *  `make shell-'container'` to drop into that container's shell
  *  `make log-'container'` to get a full log of the container
  
Normally you'll only run `make build` only once in a while, `make up` every time you start your env.

## Guidelines for this Challenge

  * Feel free to use the directory structure you find more convenient to solve this challenge, as well as install, through npm, 3rd party libraries that could aid you to fulfill the assignment.
  * The additional challenges of building a redux architechture and using routes inside the app are completely optional.
