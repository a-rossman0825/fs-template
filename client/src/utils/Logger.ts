import { dev } from '../env'

export type LoggerType = 'log' | 'error' | 'warn' | 'assert' | 'trace' | 'groupCollapsed' | 'groupEnd';

export interface LogFunction {
  (type: LoggerType, content: IArguments): void;
}

export interface LoggerInterface {
  log: (...args: any[])=> void;
  error: (...args: any[])=> void;
  warn: (...args: any[])=> void;
  assert: (...args: any[])=> void;
  trace: (...args: any[])=> void;
  groupCollapsed: (...args: any[])=> void;
  groupEnd: (...args: any[])=> void;
}

const log: LogFunction = function (type, content) {
  if (dev) {

    (console[type] as (...args: any[])=> void)(`[${type}] ${new Date().toLocaleTimeString()}\n`, ...content);
  } else {
    switch (type) {
      case 'log':
        case 'assert':
          return;
    }

    (console[type] as (...args: any[])=> void)(`[${type}] ${new Date().toLocaleTimeString()}\n`, ...content);
  }
};

export const logger = {
  log(string: string, content: IArguments) {
    log('log', arguments);
  },
  error(string: string, content: IArguments) {
    log('error', arguments)
  },
  warn(string: string, content: IArguments) {
    log('warn', arguments)
  },
  assert(string: string, content: IArguments) {
    log('assert', arguments)
  },
  trace(string: string, content: IArguments) {
    log('trace', arguments)
  },
  groupCollapsed(string: string, content: IArguments) {
    log('groupCollapsed', arguments)
  },
  groupEnd(string: string, content: IArguments) {
    log('groupEnd', arguments)
  },
};