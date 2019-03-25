//imports discord dependancies 
import * as Discord from "discord.js";
//imports token and prefix from config file located in src file 
import * as ConfigFile from "./config";
//import bot interface 
import {iBotCommand} from "./api"


const botclient: Discord.Client = new Discord.Client();


let commands: iBotCommand[]=[];


//import commands from file 
loadCommands(`${__dirname}/commands`);

//turns the bot on
botclient.on("ready", () => {

    // lets user know bot has come online 
    console.log("Bot is now running!");
})

botclient.on("message", msg => {
    //ignore all bot messages 
    if(msg.author.bot){return;}

    //ignore certain messages that dont start with a prefix 
    if(!msg.content.startsWith(ConfigFile.config.prefix)){return;}

    //tells the bot to tell the user that the bot regocnizewd the command request 
    msg.channel.send(`${msg.author.username} command received `);
    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message){

    //split the command from the arguments 
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for(const commandsClass of commands){

        //attempt to execute user command
        try{
            //check commands class for command 
            if(!commandsClass.isThisCommand(command)){
                // go to the next command if not valid 
                continue;
            }
            //pause execution to wait for command completetion
            await commandsClass.runCommand(args, msg, botclient); 
        }
        catch(exception){
            
            //if error found then post this message ^_^
            console.log(exception);
            msg.channel.send(`${msg.author.username} tell an admin to check the log files STOOPID BOI`);
        }
    }
}

function loadCommands(commandsPath: string){
    if(!ConfigFile.config || (ConfigFile.config.commands as string []).length === 0){
        return;
    }
    //loop through config file commands 
    for(const commandName of ConfigFile.config.commands as string[  ]){

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as iBotCommand;

        commands.push(command);
    }
}

//logs the bot into server 
botclient.login(ConfigFile.config.token);