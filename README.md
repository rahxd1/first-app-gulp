# Aplicación web con SASS y JADE

### Comandos para instalar node en una distribución basade en ubuntu

```sh
$ curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
```
```sh
$ sudo apt-get install --yes nodejs
```
```sh
$ sudo apt-get install --yes build-essential
```


### Comandos para crear la aplicación

Crear el directorio de la aplicación
```sh
$ mkdir miaplicacion
$ cd miaplicacion
```

Instalar gulp de manera global

```sh
$ npm install -g gulp
```

Inicializar el proyecto con node

```sh
$ npm init
```

Instalar las siguientes dependencias

```sh
$ npm install --save-dev gulp
```
```sh
$ npm install --save-dev gulp-sass
```
```sh
$ npm install --save-dev gulp-uglify
```
```sh
$ npm install --save-dev gulp-livereload
```
```sh
$ npm install --save-dev gulp-imagemin
```
```sh
$ npm install --save-dev gulp-autoprefixer
```
```sh
$ npm install --save-dev gulp-connect
```

Crear gulpfile y configurar el resto :P

```sh
$ touch gulpfile.js
```
