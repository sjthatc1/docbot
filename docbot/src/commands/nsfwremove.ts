//import discord library 
import * as Discord from "discord.js";
//import from api.ts 
import {iBotCommand} from "../api";

//allow testcommand to be called

export default class nsfwremove implements iBotCommand{

    private readonly _command = "nsfwremove"

    help(): string {
        return "This will remove the nsfw role";
    }    

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("This command is going to remove the NSFW role.");

        let mentionedUser = msgObject.author
        let suppliedReson = args.slice(1).join(" ") || ""; 
        let promoteLog = `${msgObject.author.username}: ${suppliedReson}`;

        if(!mentionedUser){
            msgObject.channel.send(`User is not valid please retry the command.  If error persists plz dm a member of the admin team`);
        }

        msgObject.guild.member(mentionedUser).removeRole('559248112573480960')
            .then(console.log)
            .catch(console.error);


    }



}


