var Loggers;
(function (Loggers) {
    function logMessage() {
        console.log('log');
    }
    Loggers.logMessage = logMessage;
})(Loggers || (Loggers = {}));
var Loggers;
(function (Loggers) {
    function printMessage() {
        console.log('print');
    }
    Loggers.printMessage = printMessage;
})(Loggers || (Loggers = {}));
///<reference path="./log.ts"/>
///<reference path="./print.ts"/>
Loggers.logMessage();
Loggers.printMessage();
