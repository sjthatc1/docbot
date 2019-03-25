//import discord library 
import * as Discord from "discord.js";
//import from api.ts 
import {iBotCommand} from "../api";

//allow testcommand to be called

export default class help implements iBotCommand{

    private readonly _command = "help"

    help(): string {
        return "This for them STOOPID BOIS";
    }    

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("Current active commands:");
        msgObject.channel.send("?help - lists activated commands");
        msgObject.channel.send("?nsfw - adds you to the nsfw role and adds you to the nsfw channel");
        msgObject.channel.send("?nsfwremove - removes user from all nsfw related content");
        msgObject.channel.send("MOD commands (WIP) ");
        msgObject.channel.send("?kick @user");
        msgObject.channel.send("More to come, if you have any issues plz dm a mod");


        

    }



}


