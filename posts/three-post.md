---
title: 'Módulo 3'
date: '2022-11-17'
description: 'Primeros pasos por Git y Github, Herramientas poderosas que te ayudarán a mantener un control de versiones sobre tu proyectos de desarrollo.'
coverUrl: 'https://camo.githubusercontent.com/38f113b96a368dfb7f634d2f2da97e7b8c748042d2a284b97c3fad048bb3ff55/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323733322f312a6d74736b3366515f4252656d466964686b656c3364412e706e67'
tags: 'Git,GitHub'
---

## ¿Qué es Git?

Git es un software de control de versiones, te permite mantener  varias versiones de
un archivo e incluso un proyecto. Te permite  crear nuevas versiones y visitar versiones anteriores del proyecto. En otras palabras, !Git es una máquina del tiempo!



<img src="https://miro.medium.com/max/801/1*DhagidpZutkaCmAZobmzDQ.png" width="auto" border="0">

## ¿Qué es GitHub? 

GitHub es la plataforma web compatible con Git que te permite almacenar tus proyectos en la nube, tambíen te permite tener un monitoreo de tus proyectos e interactuar con proyectos de otros programadores u organizaciones. 


## Cómo instalar Git

Es una colección de herramientas que sirven para automatizar el proceso de instalación, actualización, configuración y eliminación de paquetes de software.


    [me@linuxbox ~]$ pkg install git


El comando pkg install nos permite instalar software que este dentro del repositorio donde estamos consultando.


## Cómo emepzar con GitHub 

Debemos crearnos una nueva cuenta en https://github.com/  
 
luego de eso debemos crearnos una 'token'  que será nuestra llave o la contraseña para autentificarnos con Git y poder subir nuestros proyectos a GitHub ( Nótese que es una contraseña diferente a la de la cuenta para iniciar sesión en github.com)

Para crear el token debemos seguir los siguentes pasos:

-   Verifique su dirección de correo electrónico , si aún no ha sido verificado.
<img src="https://imgur.com/MfOXZKi" width="auto" border="0">
-   En la esquina superior derecha de cualquier página, haga clic en su foto de perfil y luego en Configuración .
    
-   Icono de configuración en la barra de usuario

-   En la barra lateral izquierda, haz clic en Configuración del desarrollador .

-   En la barra lateral izquierda, en Tokens de acceso personal , haga clic en Tokens (clásico) .

-   Seleccione Generar nuevo token y luego haga clic en Generar nuevo token (clásico) .

-   Dale a tu token un nombre descriptivo.

-   Copia el token que se genera automáticamente.


Ahora con este Token ya podemos subir nuestros proyectos hechos con Git.



## Creando mi primer repositorio en GitHub:


-  Presionamos el botón "+" en la parte superior de la pagina web 

-   Click en "Nuevo repositorio"

-   Le ponemos un nombre y una descripcion a el repositorio a crear.

-   Seleccionamos la configuracion de privacidad del repositorio.   

-   Click en "Crear repositorio"


## En nuestro proyecto:

Primero debemos estar localizados en la carpeta que contiene nuestro proyecto. 

Para inicializar un proyecto de git en la termina ejecutamos el comando 

    
    git init 
    

luego configuramos nuestro correo y nombre con los comandos 

    git config --global user.mail "tuemail@ejemplo.com"
    git config --global user.name "tunombre"


creamos el archivo README.md que contendrá la descripción de nuestro proyecto.
    
    echo >> "Mi primer  proyecto en Git" >> READMI.md

Nos cambiamos a la rama main

    git branch -M main

Añadimos los cambios hechos en el archivo README.md con el comando 

    git add README.md

creamos un nuevo commit  con un mensaje descriptivo. 

    git commit -m "Mi primer commit" 

debemos enlazar nuestro repoitorio local con GitHub para eso copiamos la siguiente linea que nos porporciona github

    git remote add origin https://github.com/username/new_repo

Y subimos nuestros cambios a nuestro repositorio de GitHub

    git push -u origin main



## UH OH??!! ¿Qué ha ocurrido ?

En este instante Git quiere que nos autentifiquemos como usuario aquí es donde necesitamos el token que generamos anteriormente. 


Ingresa con el nombre que ingresaste en user.name  luego 
Pega el token generado en el lugar de 'Password'


Y listo! Has subido tu repositorio de git a la nube satisfactoriamente!


## Comandos basicos de Git
 
A continuación conocemos los comandos basicos. 

    git clone <url de repositorio>

El comando clone te permite clonar en tu dispositivo un respositorio existente en github, copiando su dirección URL

    
<hr>
    
    git add <archivo>

El comando add guardará el o los archivos que se pasen como parametro  en el area de staging. 

    git add .

Ya que en  el proyecto quieras añadir muchos archivos momdificados ingresando un punto "."  se añadiran todos los archivos en la carpeta y subcarpetas existentes.

<hr>
    
    git commit -m "mensaje"
    
Con este comando creamos un punto de guardado, un nuevo  nodo en nuestra linea del tiempo, nodo que podremos visitar en el futuro. Debes asegurarte que el mensaje se corto y que describa lo que se modificó enn esta versión 
    
    
<hr>
    git push -u origin <rama>
    
Push nos permite subir el estado actual de nuestro proyecto a la nube y así tener un respaldo de este accesible en cualquier parte del mundo.
<hr>


    git checkout <ID de commit>


checkout nos permite viajar en el tiempo y visitar commits anteriores. Pero primero debes verificar  haber guardado todos tus cambios en un commit.

<hr>

    git branch <nombre>

Branch nos permite crear nuevas lineas de tiempo. 

<hr>

    git checkout <nombre de rama>
    
Con Checkout podemos visitar el ultimo commit de otras ramas existentes en el proyecto. Nuevamente asegurate de tener todos tus cambios guardados en un commit o git no te permitira cambiar de rama.


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