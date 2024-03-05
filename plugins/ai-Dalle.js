import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*This command generates images from text prompts*\n\n*xample usage*\n* ${usedPrefix + command} Beautiful anime girl*\n* ${usedPrefix + command} Elon Musk in pink output*`;

  try {
    m.reply('*Please wait, generating images...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['aiv2'];
handler.command = ['dalle', 'gen', 'gimg', 'openai2'];
handler.limit = 10;
export default handler;
