"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class promote {
    constructor() {
        this._command = "promote";
    }
    help() {
        return "This will give the mod role";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("Processing promotion");
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReson = args.slice(1).join(" ") || "";
        let promoteLog = `${msgObject.author.username}: ${suppliedReson}`;
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Nice try STOOPID BOI ${msgObject.author.username}`);
        }
        if (!mentionedUser) {
            msgObject.channel.send(`User is not valid please retry the command.  If error persists plz dm a member of the admin team`);
        }
        msgObject.guild.member(mentionedUser).addRole('557369156027023381')
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = promote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wcm9tb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBa0N6QyxDQUFDO0lBaENHLElBQUk7UUFDQSxPQUFPLDZCQUE2QixDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDekUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUvQyxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxVQUFVLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQUUsQ0FBQztRQUVsRSxJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUM7WUFDaEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUM5RTtRQUVELElBQUcsQ0FBQyxhQUFhLEVBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1NBQzlIO1FBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO2FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHOUIsQ0FBQztDQUlKO0FBcENELDBCQW9DQyJ9