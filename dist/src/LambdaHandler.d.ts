import { Handler } from 'aws-lambda';
import { GenericLambda } from './GenericLambda';
export declare class LambdaHandler {
    static generate<T extends GenericLambda>(type: {
        new (...args: any[]): T;
    }): Handler<any, any>;
}
