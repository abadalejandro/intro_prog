import {suma, multiplica} from "./controller.js";
import chalk from 'chalk';
const log = console.log;

const sum1 = suma(1,2);
const sum2 = suma(4,5)
const result = multiplica(sum1,sum2);

log(chalk.red(sum1));
log(chalk.yellow(sum2));
log(chalk.green(result));