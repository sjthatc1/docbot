"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class nsfw {
    constructor() {
        this._command = "nsfw";
    }
    help() {
        return "This will give the mod role";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("This command is going to assign the NSFW role.");
        let mentionedUser = msgObject.author;
        let suppliedReson = args.slice(1).join(" ") || "";
        let promoteLog = `${msgObject.author.username}: ${suppliedReson}`;
        if (!mentionedUser) {
            msgObject.channel.send(`User is not valid please retry the command.  If error persists plz dm a member of the admin team`);
        }
        msgObject.guild.member(mentionedUser).addRole('559248112573480960')
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = nsfw;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnNmdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9uc2Z3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBOEJ0QyxDQUFDO0lBNUJHLElBQUk7UUFDQSxPQUFPLDZCQUE2QixDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDekUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUV6RSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFBO1FBQ3BDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLGFBQWEsRUFBRSxDQUFDO1FBRWxFLElBQUcsQ0FBQyxhQUFhLEVBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1NBQzlIO1FBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO2FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHOUIsQ0FBQztDQUlKO0FBaENELHVCQWdDQyJ9