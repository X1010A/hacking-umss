---
title: 'Módulo 4'
date: '2022-11-18'
description: 'En este módulo se deatallan ejercicios, recursos como libros, paginas, canales de YouTube y algunos retos'
coverUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20220831170024/GitPush3.jpg'
tags: 'Git,GitHub,Recursos'
---

## Ejercicio 1


Configurar Git definiendo el nombre del usuario, el correo electrónico y activar el coloreado de la salida. Mostrar la configuración final.

## Solución 
```bash
> git config --global user.name "Tu usuario"
> git config --global user.email "Tu correo electronico"
> git config --global color.ui auto
> git config --list
```
## Resolución

<img src="https://aprendeconalf.es/docencia/git/ejercicios/soluciones/creacion-actualizacion-repositorios/ejercicio1.gif" width="auto" border="0">

## Ejercicio 2


Crear un repositorio nuevo con el nombre **libro** y mostrar su contenido.

## Solución 
```bash
> mkdir libro
> cd libro
> git init
> ls -la1
```
## Resolución

<img src="https://aprendeconalf.es/docencia/git/ejercicios/soluciones/creacion-actualizacion-repositorios/ejercicio2.gif" width="auto" border="0">

## Ejercicio 3


1-. Comprobar el estado del repositorio.

2-. Crear un fichero indice.txt con el siguiente contenido:

    Capítulo 1: Introducción a Git
    Capítulo 2: Flujo de trabajo básico
    capítulo 3: Repositorios remotos

3-. Comprobar de nuevo el estado del repositorio.

4-. Añadir el fichero a la zona de intercambio temporal.

5-. Volver a comprobar una vez más el estado del repositorio.

## Solución 
```bash
> git status
> cat > indice.txt
Capítulo 1: Introducción a Git
Capítulo 2: Flujo de trabajo básico
Capítulo 3: Repositorios remotos
Ctrl+D
> git status
> git add indice.txt
> git status
```
## Resolución

<img src="https://aprendeconalf.es/docencia/git/ejercicios/soluciones/creacion-actualizacion-repositorios/ejercicio3.gif" width="auto" border="0">

## Ejercicio 4


1. Mostrar el historial de cambios del repositorio.
2. Crear la carpeta **capitulos** y crear dentro de ella el fichero **capitulo1.txt** con el siguiente texto.
    
    Git es un sistema de control de versiones ideado por Linus Torvalds.

3. Añadir los cambios a la zona de intercambio temporal.
4. Hacer un commit de los cambios con el mensaje “Añadido capítulo 1.”
5. Volver a mostrar el historial de cambios del repositorio.
6. Subir a un repositorio de GitHub.
## Solución 
```bash
> git log
> mkdir capitulos
> cat > capitulos/capitulo1.txt
    
    Git es un sistema de control de versiones ideado por Linus Torvalds.
    Ctrl+D
    
> git add .
> git commit -m "Añadido capítulo 1."
> git log
> git remote add origin https://github.com/username/new_repo
> git push -u origin main
```
## Resolución

<img src="https://aprendeconalf.es/docencia/git/ejercicios/soluciones/historial-cambios/ejercicio1.gif" width="auto" border="0">

## Ejercicio 5

Roberto tomó un curso de linux hace meses, aprendió bash y hace poco se postuló a un trabajo, hoy es su primer dia como encargado de mantenimiento del servidor de la empresa, dentro de este servidor está la página Web del cine center, tu primera tarea es buscar el archivo README.md del proyecto en GitHub, generalmente en este archivo se describe los pasos que debes seguir para instalar y ejecutar el proyecto ¡buscalo!.

1. Ir a este link: https://github.com/X1010A/cine-center.git

2. Clonar el proyecto.
		
        git clone https://github.com/X1010A/cine-center.git

3. Una vez que lo encuentres, agrega la siguiente línea “YA LO ENCONTRE”, crea un repositorio nuevo y sigue los pasos.

	    git remote add origin https://github.com/usuario/repositorio

        git branch -M main
     
        git push -u origin main

        git log


## Sigue aprendiendo, aqui encontraras recursos para que sigas tu camino, en BASH, LINUX, GIT, GITHUB.

**Al mundo no le importa donde estudiaste, si no lo que puedes hacer con lo que sabes**


## THE LINUX COMMAND LINE

<img src="https://m.media-amazon.com/images/I/51kjjarKXBL._AC_SY780_.jpg"  width="auto" border="0">

[Descargar libro PDF en español](https://ia803404.us.archive.org/14/items/la-linea-de-comandos-de-linux/La%20l%C3%ADnea%20de%20comandos%20de%20Linux.pdf)

## Hoja comando de Linux, git, Github.
### Autor: Aylin Nicol Garcia Mancilla

<img src="https://i.postimg.cc/kXcxjy9n/Captura-de-pantalla-2022-11-18-113722.jpg"  width="auto" border="0">

[Descargar PDF ](https://drive.google.com/file/d/1TwqwsJ5zgmJi6zLxDN7OpzBfU7785OLP/view?usp=sharing)

### Canales de YOUTUBE, que seguimos, aprendimos y seguimos aprendiendo.

# jhonmircha


## Descripción: 
### Cursos de Javascript, React, Frontend, PHP

<a href="https://www.youtube.com/c/jonmircha"> <img style="border-radius: 100px" src="https://yt3.ggpht.com/ytc/AMLnZu91inNTs3EajHckXFyHf7Zj-z9Qt770dTAglreFMw=s176-c-k-c0x00ffffff-no-rj"  width="auto" > </a>

# Veritasium

## Descripción: 
### Ciencia y tecnología doblados al español

<a href="https://www.youtube.com/c/Veritasiumenespa%C3%B1ol"><img style="border-radius: 100px" src="https://yt3.ggpht.com/ostJ8BjZbRXO3dgburOfFhKlAduy6q2NG_FvG-_BYFRiyF67e2TnXmy4vNE-God09MSGFUSQ5Q=s88-c-k-c0x00ffffff-no-rj"  width="auto" ></a>

[Guinxu](https://www.youtube.com/@Guinxu)
Acerca del desarrollo de videojuegos

[Fazt Code](https://www.youtube.com/c/FaztCode)
Cursos variados de programación

[Nate Gentile](https://www.youtube.com/@NateGentile7)
Hardware, optimización, personalización y programación

[midudev](https://www.youtube.com/c/midudev)
Desarrollo web, React, JavaScript

[LowSpecGamer](https://www.youtube.com/@lowspecgamerESP)
Curiosidades sobre hechos en el mundo tecnológico

[s4vitar](https://www.youtube.com/@s4vitar)
Ciberseguridad y hacking ético

[DotCSV](https://www.youtube.com/c/DotCSV)
Inteligencia Artificial

[Hola Mundo](https://www.youtube.com/@HolaMundoDev)
Programación y charlas sobre tecnología

[Pelado Nerd](https://www.youtube.com/@PeladoNerd)
Instructivos sobre tecnologías como Docker, Kubernetes y Linux

[Ringa Tech](https://www.youtube.com/@RingaTech)
Sobre software e inteligencia artificial

[HackWise](https://www.youtube.com/@hackwise)
Hacking