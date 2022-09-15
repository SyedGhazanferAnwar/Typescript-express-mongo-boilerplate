import * as chalk from 'chalk'
import * as morgan from 'morgan'
export default morgan(function (tokens, req, res) {
    return [
        chalk.hex("#34ace0").bold(tokens.method(req, res)),
        chalk.hex("#ffb142").bold(tokens.status(req, res)),
        chalk.hex("#ff5252").bold(tokens.url(req, res)),
        chalk.hex("#2ed573").bold(tokens["response-time"](req, res) + " ms"),
        chalk.yellow(tokens["remote-addr"](req, res)),
        "",
    ].join(" ");
});