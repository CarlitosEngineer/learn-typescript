
# Temario

- Introduction to TypeScript
    - TypeScript vs JavaScript
    - TS and JS Interoperability
    - Installation and Configuration
        - tsconfig.json
        - Compiler Options
    - Running TypeScript
        - tsc
        - ts-node
        - TS Playground

---
# Desarrollo
---

# Introduction to TypeScript - (Introducción a TypeScript)

- **TypeScript** es un lenguaje de programación.
- Es un **SuperSet** de JavaScript.
- **desarrollado y mantenido** por Microsoft.

# TypeScript vs JavaScript:

- **TypeScript** es mejor que **JavaScript** porque provee ventajas que si tiene y el otro no.
    - **Tipado estático** de variables.
    - **Sintaxis** mejorada al agregar nuevas funcionalidades como (interfaces, clases y más).
    - **Herramientas (Tools)**
    - **Retrocompatibilidad** O sea, que puede ejecutar versiones viejas, tanto de **JavaScript** como de **TypeScript**

# TS and JS Interoperability

- La **Interoperability** entre **TS** y **JS** simplemente significa. que ambos códigos tienen la capacidad de funcionar entre si, sin afectar al otro. Esto también aplica a **herramientas** y **dependencias**

# Installation and Configuration

- Instalar **TypeScript** de forma **global** con el comando ´npm install -g typescript´
- Instalar **TypeScript** de forma **local - Projecto** con el comando ´npm install --save-dev typescript´
- Verificar si lo **tengo** y que **version** tengo ´tsc -v´



- Empezar un proyecto ´npm init´
- Instalar dependencia ´npm install --save-dev typescript´

## tsconfig.json

- ´tsconfig.json´ Es un archivo que sirve y ayuda a configurar la forma en que queremos **Compilar el código** de **TS** a **JS**.

## Compiler Options

- Opciones del Compilador ´tsc --target ES5 --module commonjs´

# Running TypeScript

## tsc

- Sirve para compilar código de **TS** a **JS** Command: 'tsc FileNameExample.ts'

## ts-node

- **NodeJs** no puede ejecutar directamente **TS** por lo que puedes hacerlo si instalas una dependencia llamada ´npm install -D ts-node´
- Ya puedes ejecutar con el comando: ´npx ts-node src\FileNameExample.ts´

## TS Playground

- Herramienta para aprender { ts }: https://www.typescriptlang.org/play
