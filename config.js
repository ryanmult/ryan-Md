const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256742810290 ";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "  SUHAIL_16_56_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm81RVdreHlaalR4VXQ0bWpJVjdBNTVybXM4UDBBeVZmUmNPTHdMYWt3amM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzY1MTg4ODYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NjAyRjdCQkY0MUZCQUE2M0ZCMDA5NERBOUM4MjlBRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM0NTkzNjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NjUxODg4NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA0NDkxMTI2RTUyOUE1NjFGMDI5NDMxNDFBQTZCNUYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxMzQ1OTM2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmc2VfdDB3NVFObXhVZkMxN1hzRkR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUxN2E3ZWYxLTE2NmUtNDk3YS1hMDFjLTRjMThkOWY1MzE2Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDMsXG4gICAgICA5NixcbiAgICAgIDkwLFxuICAgICAgMjIwLFxuICAgICAgNjMsXG4gICAgICAyMzMsXG4gICAgICA2NSxcbiAgICAgIDE0NSxcbiAgICAgIDE1MCxcbiAgICAgIDIzOSxcbiAgICAgIDI3LFxuICAgICAgMjAsXG4gICAgICAxNjAsXG4gICAgICAxMzYsXG4gICAgICA4MyxcbiAgICAgIDIwMSxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTA4LFxuICAgICAgMTI3LFxuICAgICAgMjUsXG4gICAgICAxODAsXG4gICAgICAyMjksXG4gICAgICA1MCxcbiAgICAgIDEzNyxcbiAgICAgIDI0NCxcbiAgICAgIDgwLFxuICAgICAgMjIzLFxuICAgICAgNjAsXG4gICAgICAxNzgsXG4gICAgICA5MSxcbiAgICAgIDI0MixcbiAgICAgIDIzMCxcbiAgICAgIDE5OCxcbiAgICAgIDIxNixcbiAgICAgIDk3LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRXMzREWjVLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NjUxODg4NjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJ5YW4gaW50ZXJuYXRpb25hbFwiLFxuICAgIFwibGlkXCI6IFwiMTU3MTMxODE0NzQ0MDkzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnExb3FzQkVLQ2hoYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRb051NnBzVVhaNmlSRDJMekU2YXhPQ2FiMHhINFJuTDRKTlpoci9xbEIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVIRU1lU0h1N1R6eUZkNXRBOC9yOTBPcldIZ0tBWVZGY01xdlIybTl3am5zOXFXeWREaGJCMy9qbmRGU0N6NHVZK20ybTU2VTRDNW4xZ3lDendKQ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRxZ2ZVeiswOG1rbVJ5dVBlelRxeElnOVQvbnJtb3A0Q0cvL0pYckw5OUgxNFVnZ3E3b2FRQkZuWmZyV1IzR0JlR1NGWUxGL0Z3ZjJaVWVhYTAxQWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc2NTE4ODg2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzQ1OTM2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=";


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Ryan 🇺🇬 ʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x RYAN 🇺🇬 ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
