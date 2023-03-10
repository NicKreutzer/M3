# HW 01: Node | Ejercicios

## **馃晵 Duraci贸n estimada**

3 horas

---

<br />

## **馃搶 INTRO**

En esta homework vas a implementar comandos bash comunes usando Node.js.

---

<br />

## **鉀旓笍 ATENCI脫N 鉀旓笍**

Creemos que es importante que sepas que **`no`** encontrar谩s una relaci贸n directa entre lo que has visto en la lecture y lo que har谩s en esta homework.

**馃憖 What? Why?**

隆Esta es una decisi贸n hecha a prop贸sito! Creemos que con todo lo que sabes hasta este momento es suficiente para que realices esta homework. El nivel de dificultad fue testeado y es acorde para el momento en el que te encuentras.

Si los ejercicios no salen a la primera, o a la segunda, no te preocupes, es normal. Pero una vez que entiendas c贸mo hacer el primer ejercicio, ver谩s que todos son muy similares y que no era taaaan complicado xD!馃槈

---

<br />

## **馃摉 CONSIGNA**

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **鉁? Pasos b谩sicos para realizar la homework**

馃敼 Para poder ejecutar los `test` de esta homework, es necesario que abras la terminal dentro de la carpeta `01 - Exercises`.

Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

隆Listo! Ya puedes correr los test:

```bash
npm test
```

Si deseas correr por test, puedes utilizar:

```bash
npm run test:01
```

---

<br />

## **ESTRUCTURA**

馃敼 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

-  Una carpeta llamada `commands`.
-  Una carpeta llamada `test`.
-  Un archivo **bash.js**.
-  Un archivo **package.json**.
-  Y el archivo **README.md** que ahora mismo est谩s leyendo. 馃槞
-  Una carpeta llamada `utils` (no tocar, ya que dentro hay un archivo utilizado para los tests).
-  Un archivo **prueba.js** (Tampoco tocarlo a este archivo, que se utiliza para testear tu c贸digo tambi茅n).

---

<br />

## **馃懇鈥嶐煉? EJERCICIO 1**

### **PROCESS**

馃搷 Dir铆gete al archivo `bash.js`. Encontrar谩s las variables "**process**" y "**commands**" importados en este archivo. Trabajaremos con ambas.  
Tambi茅n estar谩 la funci贸n `bash` que es la que ejecutar谩 tu terminal.

馃搷 Lo que hay que hacer:

1. Crea una funci贸n con el nombre `print`. Esta funci贸n recibir谩 por par谩metro un **output**. Dentro de ella tendr谩s que utilizar el m茅todo **stdout.write** del objeto `process` dos veces. La primera vez le pasar谩s como argumento el **output** recibido. La segundo vez el argumento deber谩 ser: "\nprompt > ".

2. Luego, dentro de la funci贸n `bash` utiliza el m茅todo **stdout.write** del objeto `process` pas谩ndole como argumento el string: "prompt > ".

3. Agrega tambi茅n dentro `bash` el m茅todo **stdin.on** del objeto `process` al cual le deber谩s pasar dos par谩metros.

   -  El primero debe ser el string: "data".

   -  El segundo debe ser una funci贸n que recibe por par谩metro `data`.

      A) Dentro de la funci贸n crea una variable con el nombre "**args**".Ten en cuenta que el par谩metro que recibes no es un string, por lo que tendr谩s que convertirlo en uno. Tambi茅n ten en cuenta que si este string tiene espacios vac铆os al comienzo o al final deber谩s eliminarlos.

      B) Guarda en una variable llamada "**cmd**" la primer palabra del string, la cu谩l representar谩 el comando ingresado.

      C) Ahora verifica si dentro del objeto `commands` existe una propiedad con el valor que contiene la variable "**cmd**". En el caso que no existe, ejecuta la funci贸n `print` con el texto "command not found: **_cmd_**". En el caso de que si exista, ejecuta el siguiente c贸digo:

      ```bash
      commands[cmd](print, args);
      ```

---

<br />

## **馃懇鈥嶐煉? EJERCICIO 2**

馃搷 Dir铆gete al archivo `commands/index.js`. Encontrar谩s las variables "**utils**", "**process**" y "**fs**" importadas en este archivo. Trabajaremos con ambas.  
Tambi茅n estar谩n 8 funciones que deber谩s completar, junto a su `module.exports` al final del archivo.

馃搷 Lo que hay que hacer:

### **PWD**

_PWD_ permitir谩 imprimir la ruta hacia el directorio en el que est谩s trabajando.

1. Completa la funci贸n `pwd`. Esta recibir谩 por par谩metro el valor "print".
2. Utiliza la funci贸n `print`. Como argumento p谩sale el objeto `process` siendo ejecutado con el m茅todo **cwd**.

---

<br />

### **DATE**

_DATE_ imprimir谩 la fecha actual de tu m谩quina.

1. Completa la funci贸n `date`. Esta recibir谩 por par谩metro el valor "print".
2. Utiliza la funci贸n `print`. Como argumento p谩sale la funci贸n `Date` siendo ejecutada.

---

<br />

### **ECHO**

_ECHO_ imprimir谩 el texto que escribas en la consola.

1. Completa la funci贸n `echo`. Esta recibir谩 por par谩metro dos valores: "print" y "args".
2. Utiliza la funci贸n `print`. Como argumento p谩sale a la funci贸n el par谩metro `args`

---

<br />

### **LS**

_LS_ va a imprimir los archivos y carpetas que est茅n disponibles en tu directorio actual.

1. Completa la funci贸n `ls`. Esta recibir谩 por par谩metro un valor: "print".
2. Invoca el m茅todo `readdir` de la constante `fs` para leer los archivos actuales.  
   tendr谩s que pasarle como argumento un string con un valor de `.` (El punto hace referencia a tu directorio actual)  
    y un callback, que recibir谩 a su vez 2 par谩metros, `error` (Posible error que pueda devolver el callback)  
    y `files` (un array de string conteniendo los archivos y carpetas encontrados).
3. Si `fs.readdir` devuelve un error arr贸jalo. (Puedes usar `throw error`)
4. Invoca la funci贸n `print` y p谩sale como argumentos los archivos encontrados.  
   _IMPORTANTE_: 隆Debes pasarlos como un string, sino se imprimir谩 un arreglo y arrojar谩 un error!

---

<br />

### **CAT**

_CAT_ Imprimir谩 en la consola cualquier archivo que le indiques. Recuerda que si quieres imprimir un archivo  
por fuera del directorio que est谩s parado, deber谩s indicar la ruta hacia el mismo.

1. Completa la funci贸n `cat`. Esta recibir谩 por par谩metro dos valores: "print" y "args".
2. Invoca el m茅todo `readFile` de `fs` y p谩sale los siguientes argumentos:

-  `args` (El par谩metro que recibes en la funci贸n `cat`)
-  Un string `'utf-8'` (El formato Unicode que deber谩 tener el texto)
-  Un callback con los par谩metros `error` y `data`

3. Si `fs.readFile` devuelve un error arr贸jalo. (Puedes usar `throw error` como se mencion贸 antes)
4. Invoca la funci贸n `print` y p谩sale como argumento el par谩metro `data` (Que es el archivo encontrado)

---

<br />

### **HEAD**

_HEAD_ Imprimir谩 las primeras _8_ l铆nea de cualquier archivo que indiques, ten en cuenta los mismos puntos  
descritos en la funci贸n de _CAT_ para utilizarlo correctamente.

1. Completa la funci贸n `head`. Esta recibir谩 por par谩metro dos valores: "print" y "args".
2. Invoca el m茅todo `fs.readFile` y p谩sale los siguientes argumentos:

-  `args` (El par谩metro que recibes en la funci贸n `head`)
-  Un string `'utf-8'` (El formato Unicode que deber谩 tener el texto)
-  Un callback con los par谩metros `error` y `data`

3. Si `fs.readFile` devuelve un error arr贸jalo. (Puedes usar `throw error` como se mencion贸 antes)
4. Invoca la funci贸n `print` y p谩sale como argumento la primera l铆nea del archivo `data` (隆Te toca pensar c贸mo hacerlo!)

---

<br />

### **TAIL**

_TAIL_ Permitir谩 imprimir la 煤ltima l铆nea de cualquier archivo que indiques, ten en cuenta las mismas anotaciones descritas en el ejercicio de _CAT_ para utilizarlo correctamente.

1. Completa la funci贸n `tail`. Esta recibir谩 por par谩metros dos valores: "print" y "args".
2. Invoca el m茅todo `fs.readFile` y p谩sale los siguientes argumentos:

-  `args` (El par谩metro que recibes en la funci贸n `tail`)
-  Un string `'utf-8'` (El formato Unicode que deber谩 tener el texto)
-  Un callback con los par谩metros `error` y `data`

3. Si `fs.readFile` devuelve un error arr贸jalo. (Puedes usar `throw error` como se mencion贸 antes)
4. Invoca la funci贸n `print` y p谩sale como argumento la 煤ltima l铆nea del archivo `data` (隆Te toca tambi茅n pensar c贸mo hacerlo!)

---

<br />

### **CURL**

_CURL_ Imprimir谩 cualquier respuesta de una url que le puedas proveer, tiene que tener el prefijo `https://` antes de  
ingresar la direcci贸n.

1. Completa la funci贸n `head`. Esta recibir谩 por par谩metros dos valores: "print" y "args".
2. Invoca la funci贸n `request` que se encuentra importada m谩s arriba y p谩sale los siguientes argumentos:

   -  `args` (El par谩metro que recibes en la funci贸n `curl`).
   -  un callback con los par谩metros `error` y `response`.

3. Si `request` devuelve un error, arrojarlo (Puedes usar `throw error` como se mencion贸 antes).
4. Invoca la funci贸n `print` pas谩ndole como argumento el par谩metro `response`.

---

<br />

## **馃攷 Recursos adicionales**

-  Documentaci贸n [**VARIABLES GLOBALES DE NODE**](https://apuntes.de/nodejs-desarrollo-web/globals/#gsc.tab=0)
-  Documentaci贸n [**VARIABLE GLOBAL PROCESS**](https://nodejs.org/docs/latest-v16.x/api/process.html)
-  Documentaci贸n [**NODE**](https://nodejs.org/en/docs/)
-  Documentaci贸n [**FILE SYSTEM**](https://nodejs.org/api/fs.html)

---

<br />

隆Listo! Aprendiste a crear los comandos m谩s b谩sicos de una terminal bash.馃コ
