const antiTrollsSecurity = (string) => string.replace(/[aeiouAEIOU]/g, '')
//! .replace => reemplaza lo pasado por "parámetros en array" por lo que hay después de la , 
//! (en este caso no le pasmos ni espacio por lo que solo las saca)

module.exports = antiTrollsSecurity;
