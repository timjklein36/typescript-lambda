import {
    Context,
    CustomAuthorizerCallback,
    CustomAuthorizerEvent,
} from 'aws-lambda';
import { GenericLambda } from './GenericLambda';

export abstract class APIGatewayAuthorizerLambda extends GenericLambda {
    protected event: CustomAuthorizerEvent;
    protected context: Context;
    protected callback: CustomAuthorizerCallback;
}
