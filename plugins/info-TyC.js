const handler = async (m, {conn}) => {
  m.reply(global.terminos);
};
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i;
handler.command = new RegExp;
export default handler;

global.terminos = `
*=> El desconocimiento de lo que aqui se menciona no exime al propietario del Bot, Sub Bot o usuario del bot de la sanciones que se puedan derivar❗*

*⚠️ Términos de privacidad*
_1.- La información que reciba el Bot NO se comparte con ningún tercero ni con nadie_
_2.- Las imágenes/videos/sticker/audios/etc no son compartidos con nadie_
_3.- Su numero de teléfono no es compartido con absolutamente nadie_
_4.- Datos de tarjetas, ubicaciones, direcciones, etc son eliminados inmediatamente y no se comparten con absolutamente nadie_
_5.- Todas las conversaciones son eliminadas cada determinado tiempo y no se hace backup (no se guarda) de ningún tipo de información/conversación_

*⚠️ Términos de uso*
_1.- No nos hacemos responsables de un mal uso que se le pueda dar al Bot_
_2.- No nos hacemos responsables de la ignorancia y/o desconocimiento del tema_
_3.- El Bot no esta activo las 24 horas al menos de que el propietario decida lo contrario_
_4.- La "empresa" no se hace responsable del uso de un Sub Bot o Bot no oficial, ya que son personas (terceros) y no tenemos control sobre ell@s_
_5.- No nos hacemos responsables de los números que se puedan ir a soporte por el uso del Bot, es aconsejable siempre usar números virtuales para usos de Bots_
_6.- Los audios/notas de voz/imágenes/videos o cualquier otro archivo multimedia que sean de propiedad de 𝗝𝗼𝘀𝘀 𝗕𝗼𝘁  🤺 son únicamente y exclusivamente de este Bot, si se detecta a otro Bot con alguno o algunos de los archivos multimedia antes mencionado se tomarán cartas en el asunto._


*𝗝𝗼𝘀𝘀 𝗕𝗼𝘁  🤺*`;
