console.log('Server is starting...');
console.log('This is a simple server script.');
import chalk from "chalk";

console.log(chalk.blue('Server is running...'));

process.argv[2];

console.log(chalk.bgRed(process.env.SUPER_SERCRET_KEY));
