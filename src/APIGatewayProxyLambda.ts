import {
    APIGatewayProxyCallback,
    APIGatewayProxyEvent,
    Context,
} from 'aws-lambda';
import { GenericLambda } from './GenericLambda';

export abstract class APIGatewayProxyLambda extends GenericLambda {
    protected event: APIGatewayProxyEvent;
    protected context: Context;
    protected callback: APIGatewayProxyCallback;
}
