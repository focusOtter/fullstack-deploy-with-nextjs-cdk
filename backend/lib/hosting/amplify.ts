import { SecretValue } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as amplify from '@aws-cdk/aws-amplify-alpha'
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild'

type AmplifyHostingProps = {
	appName: string
	account: string
	branch: string
	ghOwner: string
	repo: string
	ghTokenName: string
}

export function createAmplifyHosting(
	scope: Construct,
	props: AmplifyHostingProps
) {
	const amplifyApp = new amplify.App(scope, `${props.appName}-hosting`, {
		appName: `${props.appName}`,
		sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
			owner: props.ghOwner,
			repository: props.repo,
			oauthToken: SecretValue.secretsManager(props.ghTokenName),
		}),
		platform: amplify.Platform.WEB_COMPUTE,
		autoBranchDeletion: true,
		customRules: [
			{
				source: '/<*>',
				target: '/index.html',
				status: amplify.RedirectStatus.NOT_FOUND_REWRITE,
			},
		],
		environmentVariables: {
			myAmplifyEnv: 'test', //process.env.myAmplifyEnv on frontend
		},
		buildSpec: BuildSpec.fromObjectToYaml({
			version: 1,
			frontend: {
				phases: {
					preBuild: {
						commands: [
							'npm ci', // install the frontend deps,
						],
					},
					build: {
						commands: ['npm run build'],
					},
				},
				artifacts: {
					baseDirectory: '.next',
					files: ['**/*'],
				},
				cache: {
					paths: ['node_modules/**/*'],
				},
			},
		}),
	})

	amplifyApp.addBranch(props.branch, {
		stage: props.branch === 'main' ? 'PRODUCTION' : 'DEVELOPMENT',
		branchName: props.branch,
	})

	return amplifyApp
}
