/// <reference types="jest" />
import { Action, ActionOptions } from './action';
import { Mode } from './mode';
export interface ReporterOptions extends ActionOptions {
    mode: Mode;
    mode_env: string;
}
export declare class Reporter implements jest.Reporter {
    global_config: jest.GlobalConfig;
    options: ReporterOptions;
    action: Action;
    constructor(global_config: jest.GlobalConfig, options?: Partial<ReporterOptions>);
    init_action(): void;
    init_options(options: Partial<ReporterOptions>): void;
    onRunStart(): void;
    onRunComplete(): void;
}
