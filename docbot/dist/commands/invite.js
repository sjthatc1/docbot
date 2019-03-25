"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class invite {
    constructor() {
        this._command = "invite";
    }
    help() {
        return "This will link the current invite link";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("https://discord.gg/DvHNMYQ");
    }
}
exports.default = invite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQWtCeEMsQ0FBQztJQWhCRyxJQUFJO1FBQ0EsT0FBTyx3Q0FBd0MsQ0FBQztJQUNwRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBQ3pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFHekQsQ0FBQztDQUlKO0FBcEJELHlCQW9CQyJ9