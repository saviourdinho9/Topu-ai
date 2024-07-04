//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "9160551001";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NQamZPWU52ZzlJQVhobjh6eXVMYWxCM0dyRGhOVEVFU3kxOERwTWxXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVJha01xU1hjV2JPZTI4aU9CYUk1RGRQaDJFbkJocmhLb2VqNmZHTmEydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSVI5ZWxjTjhzb2lpWlNVbURjV2hGZCtDSTVaYjJBSGNESmhBSXBwZUZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Y1lXMVJCTlNOOUp1b0N2OExpcTEyYWlrSVFNQlFIUmx6K2F5S0Z6RUhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndIT3BZVHhZZW5yQUxndmZjUkQwYzduVXR3NSt2K0w1MW9DZ0t2Qlp5MU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEzUmlWT0VTVVdCNWZXSFRjNHFXRkNVa2d1Y3RKSUtHWUtPVzJMUitNRzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0p5eWhiSW9vejAwQXpuRnBjb1VNSFhMMnd0VG91QjhadVpFZjVacm4zRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjdQOGttSjBzbFNJbHhzYnY2OVY2aE1US2dUWmo4YXE5Skk4cUd1NlNEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFXUHlBUHdhanllM1AyZEZFS3Q3N3ZhNTM4Si9UYnpEU3JacFFpU1ZUZW1pTEpJMEZobmpYMUQwU1VvWm9QTkhjSDE2aVN1c1YveGZnd3NEVlgremlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJNSEk1d01VTGV6UURQTnZmOXRyazQ3czFBK2RoVVhWVjZlY1VFalgrNmg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjA1NTEwMDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTZENTZDNzVEMjQxNTUyQjdDQ0YxN0FCQ0Q1ODdDRDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDA4NzQ5MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE2MDU1MTAwMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxODU0MjEzNUFDMDlCOTJDNzE1Nzc5NDhFMkQwQjkxQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMDg3NDkxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRZ05FMW95MFFlU1FqeXA4SW1PY1F3IiwicGhvbmVJZCI6ImNjZTNiNDE2LWQ2OTgtNDJiNi05N2Y0LWUxZGZjNDY3OTFkZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwMHRXY08rZlIxTzVaSys1Z2w2VDIwQkFrZHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFZ3eVhrSm1YR3F6MmZsWEliVGJYdjY1U0lnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikc2R0w0SlFNIiwibWUiOnsiaWQiOiIyMzQ5MTYwNTUxMDAxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2F2aW91ciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFBiKytJRkVMTG5tYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM1dGTUVqMVY0VmVyVVE3YkdvY1VQZWVCdEk3SWE4TWs0MG5VaVJaOElYYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieTN5TjVITUJFcXVpOGNuODF4TElwVC84TWp5ZjJSZWlWQVhuTDFwRXcycDY1MFM0Mmg0SmhKcVp0TEZ3SGtuS1ZCU1docFVZZU53VWh0NjlQczRSRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkFrbmlHM0p4cGlTQ0VUdkR0dnpXVE0yWllVWDVpZEp3NnBMMVB1Z1JFTXp4d0JWQU9zRURVMGN5Y0FZY01MM1FnTlBuaDVhbGZjZElKaXdkcjcvL2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE2MDU1MTAwMToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQxaFRCSTlWZUZYcTFFTzJ4cUhGRDNuZ2JTT3lHdkRKT05KMUlrV2ZDRjMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwODc0ODgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHlvIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
