"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "testCommand";
    }
    help() {
        return "This for them STOOPID BOIS";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("This is for them STOOPID BOIS");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFnQjdDLENBQUM7SUFkRyxJQUFJO1FBQ0EsT0FBTyw0QkFBNEIsQ0FBQztJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBQ3pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUlKO0FBbEJELDhCQWtCQyJ9