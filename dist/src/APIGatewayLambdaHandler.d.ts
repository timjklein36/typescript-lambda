import { APIGatewayProxyEvent } from 'aws-lambda';
import { GenericLambda } from './GenericLambda';
export declare class APIGatewayLambdaHandler {
    static generate<T extends GenericLambda>(type: {
        new (...args: any[]): T;
    }): import("../node_modules/@types/aws-lambda/index").Handler<APIGatewayProxyEvent, import("../node_modules/@types/aws-lambda/index").APIGatewayProxyResult>;
}
