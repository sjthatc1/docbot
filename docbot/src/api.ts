//import discord library 
import * as Discord from "discord.js";
//allow interface to be called
export interface iBotCommand {
    help(): string;
    isThisCommand(command: string): boolean; 
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void;
}