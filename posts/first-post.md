---
title: 'Módulo 1'
date: '2022-11-14'
description: 'En este post encontraras las instrucciones necesarias para instalar las apliaciones de: TERMUX, ACODE, AIDE, Java N-IDE'
coverUrl: 'https://i.ibb.co/XpT8F87/Dise-o-sin-t-tulo.png'
tags: 'Android,Linux'
---

# TERMUX

Una aplicación de emulador de terminal para el sistema operativo Android ampliable por una variedad de paquetes. 

[Haz click aqui para descargar TERMUX](https://github.com/termux/termux-app/releases/tag/v0.118.0)

<p align="center">
  <img src="https://termux.dev/assets/globals/home/htop_framed.png" width="350" alt="accessibility text">
</p>

## HAPPYMOD

Happymod se enfoca en proporcionar 100% mods de trabajo para los fanáticos de juegos y aplicaciones. 

[Haz click aqui para descargar HAPPYMOD](https://www.happymodapkdescargar.com/)

<p align="center">
  <img src="https://imag.malavida.com/mvimgbig/download-fs/happymod-21643-4.jpg" width="350" alt="accessibility text">
</p>

## PRIMER EJERCICIO
 
 A continuación vamos extraer codigo de hecho en BLUEJ en clases de MBLC modificandolo para que funcione en AIDE Java N-IDE.

[Haz click aqui, para los ejercicios propuestos](https://drive.google.com/drive/folders/1yHoVMlqG6QlunVNG8MVqwpdAJOorxqva?usp=sharing)

Descargar el archivo Progr9.zip

```java
/**
 * Write a description of class IndicadorPeso here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class IndicadorPeso
{
    public double calcularPeso(Nino nino){
        double pesoActual;
        pesoActual = nino.getPesoNac();
        if(nino.edadMeses()){
            pesoActual = pesoActual + calcularPesoMeses(nino);
        }else{
            pesoActual = 2*pesoActual + 5 * pesoActual/4; 
            pesoActual = pesoActual + calcularPesoAnios(nino);
        }
        return pesoActual;
    }
    
    private double calcularPesoMeses(Nino nino){
        double pesoAumento;
        double incremento;
        double y,x;
        x = nino.getPesoNac();
        y = 5*nino.getPesoNac()/4;
        if(nino.edad() <= 6){
            incremento = x/6;
            pesoAumento = incremento*nino.edad();
        }else{
            incremento = y/6;
            pesoAumento = x + (nino.edad()-6)*incremento;
        }
        return pesoAumento;
    }
    
    private double calcularPesoAnios(Nino nino){
        double pesoAumento;
        if(nino.edad()>1){
            pesoAumento = (nino.edad()-1) * 2.2;
        }else{
            pesoAumento = 0;
        }
        return pesoAumento;
    }
}
```

```java
/**
 * Write a description of class Nino here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class Nino
{
    private int edad;
    private String medida;
    private double pesoNac;
    
    public Nino(int edad, String medida, double pesoNac){
        this.edad = edad;
        this.medida = medida;
        this.pesoNac = pesoNac;
    }
    public double getPesoNac(){
        return pesoNac;
    }
    public int edad(){
        return edad;
    }
    public boolean edadMeses(){
        return medida.equals("MESES");
    }
}
```