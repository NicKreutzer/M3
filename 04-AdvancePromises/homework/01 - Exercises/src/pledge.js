'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
class $Promise{
    constructor(executor){
        if(typeof executor !== 'function') throw TypeError('Executor must be a function')
        this._state = 'pending';
        this._value = undefined;
        this._handlerGroups = [];

        const resolve = (value) => {this._internalResolve(value)};
        const reject = (reason) => {this._internarlReject(reason)};

        executor(resolve, reject)
    }

    _internalResolve(value){
        if(this._state !== 'pending') return;
        this._state = 'fullfiled';
        this._value = value;
        this._callHandlers (this._value);
    };

    _internarlReject(reason){
        if(this._state !== 'pending') return;
        this._state = 'rejected';
        this._value = reason;
        this._callHandlers (this._value);
    };

    then(successCb, errorCb){
        const handlerGroup = {
            successCb: typeof successCb === 'function' 
            ? successCb 
            : null,                                 //! Tambien puede ser false o 0.
            errorCb: typeof errorCb === 'function' 
            ? errorCb 
            : null,                                 //! Tambien puede ser false o 0.
        }
        this._handlerGroups.push(handlerGroup);     //! Guardamos el obj de grupos de handler en el array handlerGroups.
        this._state !== 'pending' && this._callHandlers(this._value)  //! Si el estado es distinto a pendiente ejecuto callHandlers.
    };

    _callHandlers(value){
        while(this._handlerGroups.length){
            const currentHandler = this._handlerGroups.shift();
            this._state === 'fullfiled' && currentHandler.successCb && currentHandler.successCb(value)
            //! Si esto es true             y esto es true               se ejecuta esto.
            this._state === 'rejected' && currentHandler.errorCb && currentHandler.errorCb(value)
        }
    };

    catch(errorHandler){
        this.then(null, errorHandler)
    };
};



module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
