import { APIGatewayProxyResult } from 'aws-lambda';
import {
    APIGatewayLambdaHandler,
    APIGatewayProxyLambda,
    Lambda,
} from '../util/index';

@Lambda({
    name: 'My New Lambda',
})
export class MyNewLambda extends APIGatewayProxyLambda {
    public handler() {
        console.log('Hello world!');

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: 'Successfully, greeted world!',
        };

        this.callback(null, response);
    }
}

export const handler = APIGatewayLambdaHandler.generate(MyNewLambda);
