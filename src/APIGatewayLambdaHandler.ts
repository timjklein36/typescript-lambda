import {
    APIGatewayProxyCallback,
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    Context,
} from 'aws-lambda';
import { GenericLambda } from './GenericLambda';

export class APIGatewayLambdaHandler {
    public static generate<T extends GenericLambda>(type: { new (...args: any[]): T }) {
        const handler: APIGatewayProxyHandler = (
            event: APIGatewayProxyEvent,
            context: Context,
            callback: APIGatewayProxyCallback,
        ) => {
            new type(event, context, callback).handler();
        };
        return handler;
    }
}
