import { dev } from '../env'

export type LoggerType = 'log' | 'error' | 'warn' | 'assert' | 'trace' | 'groupCollapsed' | 'groupEnd';

export interface LogFunction {
  (type: LoggerType, content: unknown[]): void;
}

export interface LoggerInterface {
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  assert: (...args: unknown[]) => void;
  trace: (...args: unknown[]) => void;
  groupCollapsed: (...args: unknown[]) => void;
  groupEnd: (...args: unknown[]) => void;
}

const log: LogFunction = function (type, content) {
  if (dev) {
    (console[type] as (...args: unknown[]) => void)(`[${type}] ${new Date().toLocaleTimeString()}\n`, ...content);
  } else {
    switch (type) {
      case 'log':
      case 'assert':
        return;
    }
    (console[type] as (...args: unknown[]) => void)(`[${type}] ${new Date().toLocaleTimeString()}\n`, ...content);
  }
};

export const logger: LoggerInterface = {
  log(...args: unknown[]) {
    log('log', args);
  },
  error(...args: unknown[]) {
    log('error', args);
  },
  warn(...args: unknown[]) {
    log('warn', args);
  },
  assert(...args: unknown[]) {
    log('assert', args);
  },
  trace(...args: unknown[]) {
    log('trace', args);
  },
  groupCollapsed(...args: unknown[]) {
    log('groupCollapsed', args);
  },
  groupEnd(...args: unknown[]) {
    log('groupEnd', args);
  },
};