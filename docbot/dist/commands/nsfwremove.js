"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class nsfwremove {
    constructor() {
        this._command = "nsfwremove";
    }
    help() {
        return "This will remove the nsfw role";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("This command is going to remove the NSFW role.");
        let mentionedUser = msgObject.author;
        let suppliedReson = args.slice(1).join(" ") || "";
        let promoteLog = `${msgObject.author.username}: ${suppliedReson}`;
        if (!mentionedUser) {
            msgObject.channel.send(`User is not valid please retry the command.  If error persists plz dm a member of the admin team`);
        }
        msgObject.guild.member(mentionedUser).removeRole('559248112573480960')
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = nsfwremove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnNmd3JlbW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9uc2Z3cmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBOEI1QyxDQUFDO0lBNUJHLElBQUk7UUFDQSxPQUFPLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDekUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUV6RSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFBO1FBQ3BDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLGFBQWEsRUFBRSxDQUFDO1FBRWxFLElBQUcsQ0FBQyxhQUFhLEVBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1NBQzlIO1FBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHOUIsQ0FBQztDQUlKO0FBaENELDZCQWdDQyJ9