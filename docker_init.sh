#!/bin/bash


sudo apt-get update -q

sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common -q

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -


sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
sudo apt-get update -q

sudo apt-get install docker-ce docker-ce-cli containerd.io -y

sudo curl -sL "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose