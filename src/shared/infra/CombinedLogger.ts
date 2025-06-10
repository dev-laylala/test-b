import { ScriptLogger } from '../domain/ScriptLogger';
import { ConversionLogger } from '../domain/ConversionLogger';
import { PathLogger } from '../domain/PathLogger';

export class CombinedLogger implements ScriptLogger {
  constructor(
    private readonly conversionLoggers: ConversionLogger[],
    private readonly pathLoggers: PathLogger[],
  ) {
  }

  sendRequestOccuredLog(): void {
    this.conversionLoggers.forEach(logger => {
      logger.logConversionScript();
    });
  }

  sendPathApproachedLog(path: string): void {
    this.pathLoggers.forEach(logger => {
      logger.logPath(path);
    })
  }
}
