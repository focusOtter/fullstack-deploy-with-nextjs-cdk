import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createAmplifyGraphQLAPI } from './api/appsync'
import { createAmplifyHosting } from './hosting/amplify'

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)
		const appName = 'sampleDeploy'
		const amplifyAPI = createAmplifyGraphQLAPI(this, {
			appName,
		})

		const amplifyHosting = createAmplifyHosting(this, {
			appName,
			account: this.account,
			branch: 'main',
			ghOwner: 'mtliendo',
			ghTokenName: 'github-token',
			repo: 'sample-deploy',
		})
	}
}
