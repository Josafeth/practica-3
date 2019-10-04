const functions = require('firebase-functions');
exports.saludo = functions.https.onRequest((request, response) => {
    try {
      if (!request.query.Nombre) {
        throw new Error("Falta la Nombre");
      } else if (!request.query.Apellido) {
        throw new Error("Falta el Apellido ");
      }else if (!request.query.Fecha) {
        throw new Error("Falta el Fecha ");
      }else if (!request.query.Correo) {
        throw new Error("Falta el Correo ");
      }else if (!request.query.Facebook) {
        throw new Error("Falta el Facebook ");
      }else if (!request.query.Instagram) {
        throw new Error("Falta el Instagram ");
      }else if (!request.query.Twiter) {
        throw new Error("Falta el Twiter ");
      }
      response.send(`HOLA ${request.query.Nombre}${request.query.Apellido}TU NACISTE EL  ${request.query.Fecha}TU CORREO ES  ${request.query.Correo}Y TUS USUARIOS EN REDES SOCIALES SON FACEBOOK: ${request.query.Facebook} INSTAGRAM:${request.query.Instagram}TWITTER: ${request.query.Twiter}`);
    } catch (e) {
      response.send(e.message);
    }
   });