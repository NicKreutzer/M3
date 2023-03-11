'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise (executor) {
    if(typeof executor !== "function") 
    throw TypeError("executor must be function");

    this._state = "pending";
    this._value = undefined;
    this._handlerGroups = [];

    executor(this._internalResolve.bind(this), this._internalReject.bind(this));

};

$Promise.prototype._internalResolve = function (value) {
    if(this._state === "pending") {
        this._state = "fulfilled";
        this._value = value;
        this._callHandlers()}
};

$Promise.prototype._internalReject = function (reason) {
if(this._state === "pending"){
    this._state = "rejected";
    this._value = reason;
    this._callHandlers()}
};

$Promise.prototype.then = function (successCb, errorCb){
    // if(typeof successCb !== "function") successCb = false;
    // if(typeof errorCb !== "function") errorCb = false;
    const downstreamPromise = new Promise (() => {})
    this._handlerGroups.push({
        successCb: typeof successCb === "function" ? successCb : false,
        errorCb: typeof errorCb === "function" ? errorCb : false,
        downstreamPromise: downstreamPromise
        // successCb: successCb,
        // errorCb: errorCb,
        // downstreamPromise: downstreamPromise
    });
    if(this._state !== "pending") this._callHandlers();
    return downstreamPromise;                           //! Con esto falla => .catch devuelve lo mismo que .then
};

$Promise.prototype._callHandlers = function(){
    while(this._handlerGroups.length){
        const hd = this._handlerGroups.shift();
        // if(this._state === "fulfilled"){
        //     if(hd.successCb){
        //         hd.successCb(this._value)
        //     }
        // }
        this._state === "fulfilled" && hd.successCb && hd.successCb(this._value)
        // else {
        //     if(hd.errorCb){
        //         hd.errorCb(this._value)
        //     }
        // }
        this._state === "rejected" && hd.errorCb && hd.errorCb(this._value)
    }
};

$Promise.prototype.catch = function (errorCb){
    return this.then(null, errorCb);
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
