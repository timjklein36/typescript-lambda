import {
    Callback,
    Context,
    Handler,
} from 'aws-lambda';
import { GenericLambda } from './GenericLambda';

export class LambdaHandler {
    static generate<T extends GenericLambda>(type: { new (...args: any[]): T }) {
        const handler: Handler = (
            event: any,
            context: Context,
            callback: Callback<any>,
        ) => {
            new type(event, context, callback).handler();
        };
        return handler;
    }
}
