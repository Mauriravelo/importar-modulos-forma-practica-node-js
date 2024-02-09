/*
Sí, al incluir la declaración "type": "module" en tu archivo package.json, estás indicando que estás utilizando módulos de ES6 en tu proyecto de Node.js. Esto permite que puedas usar la sintaxis import y export de ES6 en lugar de require() y module.exports.

Al importar express después de haber configurado "type": "module" en tu proyecto, estarás importando el módulo de express de acuerdo con las reglas de los módulos ES6. La sintaxis sería algo así:
*/

import { Express } from 'express'