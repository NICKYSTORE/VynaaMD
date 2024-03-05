import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "yuhumina.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(bot|vynaa|hay|hai|p|sayang|pina)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"./vn/yuhumina.mp3",
];