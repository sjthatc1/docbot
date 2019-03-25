"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class kick {
    constructor() {
        this._command = "kick";
    }
    help() {
        return "Kicks the mentioned user";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("Processing kick command");
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReson = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReson}`;
        if (!msgObject.member.hasPermission("KICK_MEMBERS")) {
            msgObject.channel.send(`Nice try STOOPID BOI ${msgObject.author.username}`);
        }
        if (!mentionedUser) {
            msgObject.channel.send(`User is not valid please retry the command.  If error persists plz dm a member of the admin team`);
        }
        msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBb0N0QyxDQUFDO0lBbENHLElBQUk7UUFDQSxPQUFPLDBCQUEwQixDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDekUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUVsRCxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQUUsQ0FBQztRQUUvRCxJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUM7WUFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUM5RTtRQUVELElBQUcsQ0FBQyxhQUFhLEVBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1NBQzlIO1FBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBSzdCLENBQUM7Q0FJSjtBQXRDRCx1QkFzQ0MifQ==