export interface ActionOptions {
    playbacks: string;
    debug: boolean;
}
export declare abstract class Action {
    options: ActionOptions;
    setup(options: ActionOptions): this;
    debug(message: string): void;
    get_contructor_name(): any;
    abstract start(): void;
    abstract finish(): void;
}
