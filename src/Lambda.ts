import {
    Callback,
    Context,
} from 'aws-lambda';
import { LambdaOptions } from './LambdaOptions';

export function Lambda(options: LambdaOptions) {
    return <T extends { new (...args: any[]): {} }> (target: T) => {
        console.log(`Registered ${options.name} as a Lambda`);
        return class extends target {
            event: any;
            context: Context;
            callback: Callback<any>;

            constructor(...args: any[]) {
                super();
                this.event = args[0];
                this.context = args[1];
                this.callback = args[2];
            }
        };
    };
}
