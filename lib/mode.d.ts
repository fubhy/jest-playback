import { Action } from './action';
export declare const enum Mode {
    /**
     * - http: `true`
     * - play: `true`
     * - record: `false`
     */
    Run = "run",
    /**
     * - http: `false`
     * - play: `true`
     * - record: `false`
     */
    Play = "play",
    /**
     * - http: `true`
     * - play: `false`
     * - record: `true`
     */
    Record = "record",
    /**
     * - http: `true`
     * - play: `false`
     * - record: `false`
     */
    Real = "real",
}
export declare function mode_to_action(mode: Mode, mode_env: string): Action;
