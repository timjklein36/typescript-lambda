import {
    APIGatewayProxyEvent,
    Callback,
    Context,
    CustomAuthorizerEvent,
    Handler,
} from 'aws-lambda';
import { GenericLambda } from './GenericLambda';

export class APIGatewayLambdaHandler {
    static generate<T extends GenericLambda>(type: { new (...args: any[]): T }) {
        const handler: Handler = (
            event: APIGatewayProxyEvent | CustomAuthorizerEvent,
            context: Context,
            callback: Callback,
        ) => {
            new type(event, context, callback).handler();
        };
        return handler;
    }
}
