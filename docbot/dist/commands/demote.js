"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class demote {
    constructor() {
        this._command = "demote";
    }
    help() {
        return "This will take the mod role";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("Processing demotion #getfuktnerd");
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReson = args.slice(1).join(" ") || "";
        let promoteLog = `${msgObject.author.username}: ${suppliedReson}`;
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Nice try STOOPID BOI ${msgObject.author.username}`);
        }
        if (!mentionedUser) {
            msgObject.channel.send(`User is not valid please retry the command.  If error persists plz dm a member of the admin team`);
        }
        msgObject.guild.member(mentionedUser).removeRole('557369156027023381')
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = demote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2RlbW90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQWtDeEMsQ0FBQztJQWhDRyxJQUFJO1FBQ0EsT0FBTyw2QkFBNkIsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBQ3pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFM0QsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksVUFBVSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssYUFBYSxFQUFFLENBQUM7UUFFbEUsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFDO1lBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDOUU7UUFFRCxJQUFHLENBQUMsYUFBYSxFQUFDO1lBQ2QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0dBQWtHLENBQUMsQ0FBQztTQUM5SDtRQUVELFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRzlCLENBQUM7Q0FJSjtBQXBDRCx5QkFvQ0MifQ==