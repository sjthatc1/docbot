//import discord library 
import * as Discord from "discord.js";
//import from api.ts 
import {iBotCommand} from "../api";

//allow testcommand to be called

export default class invite implements iBotCommand{

    private readonly _command = "invite"

    help(): string {
        return "This will link the current invite link";
    }    

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("https://discord.gg/DvHNMYQ");


    }



}


