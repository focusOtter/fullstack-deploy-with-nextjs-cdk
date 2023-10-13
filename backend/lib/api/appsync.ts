import { Construct } from 'constructs'
import {
	AmplifyGraphqlApi,
	AmplifyGraphqlDefinition,
} from '@aws-amplify/graphql-api-construct'
import * as path from 'path'
import { AuthorizationType } from 'aws-cdk-lib/aws-appsync'
import { Duration } from 'aws-cdk-lib'

type AmplifyGraphQLAPIProps = {
	appName: string
}

export const createAmplifyGraphQLAPI = (
	scope: Construct,
	props: AmplifyGraphQLAPIProps
) => {
	const api = new AmplifyGraphqlApi(scope, `${props.appName}`, {
		apiName: `${props.appName}`,
		definition: AmplifyGraphqlDefinition.fromFiles(
			path.join(__dirname, 'schema.graphql')
		),
		authorizationModes: {
			defaultAuthorizationMode: AuthorizationType.API_KEY,
			apiKeyConfig: {
				expires: Duration.days(7),
				description: 'Example fullstack Deploy deploy API',
			},
		},
	})

	return api
}
