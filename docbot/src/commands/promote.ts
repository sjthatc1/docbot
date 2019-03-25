//import discord library 
import * as Discord from "discord.js";
//import from api.ts 
import {iBotCommand} from "../api";

//allow testcommand to be called

export default class promote implements iBotCommand{

    private readonly _command = "promote"

    help(): string {
        return "This will give the mod role";
    }    

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("Processing promotion");

        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReson = args.slice(1).join(" ") || ""; 
        let promoteLog = `${msgObject.author.username}: ${suppliedReson}`;

        if(!msgObject.member.hasPermission("ADMINISTRATOR")){
            msgObject.channel.send(`Nice try STOOPID BOI ${msgObject.author.username}`)
        }

        if(!mentionedUser){
            msgObject.channel.send(`User is not valid please retry the command.  If error persists plz dm a member of the admin team`);
        }

        msgObject.guild.member(mentionedUser).addRole('557369156027023381')
            .then(console.log)
            .catch(console.error);


    }



}


