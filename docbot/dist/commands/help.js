"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "This for them STOOPID BOIS";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("Current active commands:");
        msgObject.channel.send("?help - lists activated commands");
        msgObject.channel.send("?nsfw - adds you to the nsfw role and adds you to the nsfw channel");
        msgObject.channel.send("?nsfwremove - removes user from all nsfw related content");
        msgObject.channel.send("MOD commands (WIP) ");
        msgObject.channel.send("?kick @user");
        msgObject.channel.send("More to come, if you have any issues plz dm a mod");
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMEJ0QyxDQUFDO0lBeEJHLElBQUk7UUFDQSxPQUFPLDRCQUE0QixDQUFDO0lBQ3hDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDekUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQzNELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7UUFDN0YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUNuRixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7SUFLaEYsQ0FBQztDQUlKO0FBNUJELHVCQTRCQyJ9