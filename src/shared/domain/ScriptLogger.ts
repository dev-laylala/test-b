export const SCRIPT_LOGGER = Symbol('SCRIPT_LOGGER');

export interface ScriptLogger {
  sendRequestOccuredLog(): void;
  // sendPathApproachedLog(path: string): void;
}
