//import discord library 
import * as Discord from "discord.js";
//import from api.ts 
import {iBotCommand} from "../api";

//allow testcommand to be called

export default class testCommand implements iBotCommand{

    private readonly _command = "testCommand"

    help(): string {
        return "This for them STOOPID BOIS";
    }    

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("This is for them STOOPID BOIS");
    }



}


