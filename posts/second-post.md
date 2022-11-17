---
title: 'Módulo 2'
date: '2022-11-16'
description: 'Prim  eros pasos por Termux y Bash, herramientas útiles que estarán presentes en toda tu vida como desarrollador de software'
coverUrl: 'https://i.ibb.co/YcYzvjM/Termux.png'
tags: 'Android,Linux, Bash'
---

## ¿Qué es Bash?

Bash (acrónimo de Bourne-Again Shell) es un intérprete de comandos y lenguaje de programación integrado que corre bajo el macroprocesador Shell de Unix.

<img src="https://i.ibb.co/0qkJzWs/Captura-de-pantalla-37.png" width="350" alt="Captura-de-pantalla-37" border="0">
<img src="https://i.ibb.co/gvYzMpH/Captura-de-pantalla-35.png" width="350" alt="Captura-de-pantalla-35" border="0" center="auto">


## ¿Qué es la shell prompt? 

Es  donde empezamos a escribir los comandos que ingresamos a la shell.

Ejemplo

```bash
    [me@linuxbox ~]$
```

## Gestor de paquetes PKG, APT

Es una colección de herramientas que sirven para automatizar el proceso de instalación, actualización, configuración y eliminación de paquetes de software.

```bash
    [me@linuxbox ~]$ pkg install [nombreDelPaquete]
```

El comando pkg install nos permite instalar software que este dentro del repositorio donde estamos consultando.

Ejemplos:



```bash
    [me@linuxbox ~]$ pkg update
```

tree es una herramienta que nos va a permitir ver como un arbol nuestro sistema de archivos.
```bash
    [me@linuxbox ~]$ pkg install tree
```

cmatrix es una simulacion de caracteres.

```bash
```
El comando pkg search nombrePaquete, nos permite buscar en el repositorio si existe algun software con ese nombre.

Ejemplos:

```bash
    [me@linuxbox ~]$ pkg search python
```
```bash
    [me@linuxbox ~]$ pkg search git
```

## Comandos basicos y necesarios en BASH
 
 A continuación conocemos los comandos basicos. 

```bash
Acciones basicas en Bash
    Mover(mv)
	CrearCarpetas(mkdir)
	CrearArchivos(touch)
    Escribir(echo, nano)
    Ver (cat, more, less, file)
	Ver sistema de archivos(ls)
    Copiar(cp)
	Borrar(rm)
    Cotar(cut)
    Buscar(grep)      
    Moverse por el sistema de archivos(cd)
```

## PRIMER EJERCICIO

```bash
Autor: Jorge Alejandro García
Tema: Bash
Descripción:

- Crear un directorio llamado pruebas
- Copiar el archivo /etc/passwd en dicho directorio
- Listar los archivos existentes
- Extraer únicamente las 10 primeras líneas del documento
- Extraer únicamente las 10 últimas líneas del documento
- Cambiar los permisos del fichero a 000
- Probar a leer dicho fichero
- Buscar la palabra “root” dentro del fichero 

Comandos
      grep [búsqueda] [fichero] Búsqueda de información en un fichero
      grep -r [búsqueda] [directorio] Búsqueda recursiva de información 
      cut -d “[carácter]” -f [pos] Cortar una cadena mediante un caracter
```

## TAREA - para el 17-11-2022

```bash

	Pkg install git
	Pkg install python
    git clone https://github.com/DeepSociety/wiki-termux
    cd wiki-termux
    chmod 777 wiki
    ./wiki
Instalar personalizaciones para termux:
    Paso 1 : actualizar los paquetes de termux
    apt update -y (poner y a todo para actualizar las versiones de paquetes).
    apt upgrade -y (poner y a todo que instale las versiones mas recientes).
Paso 2: instalar paquetes
    pkg install python -y
    pkg install python2 -y
    pkg install git -y
    Pip install lolcat
Paso 3: clonar el repositorio
    git clone https://github.com/noob-hackers/T-LOAD
Paso 4: ejecutar los comandos 
    (cd $HOME) o (cd) 
      ls
    cd T-LOAD
      ls 
    bash t-load.sh (poner y a todos este paso puede demorar un tiempo).
Paso 5: una ves instalado todo.
    Pedirá un primer y segundo nombre ponerlo a gusto.
    Apretar enter
    Finalizar termux con el comando exit.
    y volver a entrar.

```