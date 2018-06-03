import {
    CloudFrontRequestCallback,
    CloudFrontRequestEvent,
    Context,
} from 'aws-lambda';
import { GenericLambda } from './GenericLambda';

export abstract class CloudFrontRequestLambda extends GenericLambda {
    protected event: CloudFrontRequestEvent;
    protected context: Context;
    protected callback: CloudFrontRequestCallback;
}
