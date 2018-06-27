import { APIGatewayProxyEvent, APIGatewayProxyResult, Callback, Context } from 'aws-lambda';
import { LambdaOptions } from './LambdaOptions';
export declare function Lambda(options: LambdaOptions): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {
        event: APIGatewayProxyEvent;
        context: Context;
        callback: Callback<APIGatewayProxyResult>;
    };
} & T;
