# si docker no está prendido, prenderlo
pgrep dockerd > /dev/null || sudo systemctl start docker

# si el container no está corriendo, arrancarlo
docker inspect --format="{{.State.Status}}" mongodb-vl | grep -q running || docker start mongodb-vl

# si no estamos usando node v8, cambiar a esa
node -v | grep -q v8 || nvm use v8.17.1

# finalmente, levantar el sistema (bws=build watch serve)
NODE_PATH=. DEBUG=democracyos* gulp bws
# NODE_PATH=. DEBUG=democracyos* ./node_modules/.bin/gulp bws