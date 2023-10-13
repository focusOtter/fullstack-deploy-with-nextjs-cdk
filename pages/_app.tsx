import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import cdkOutputs from '../outputs.json'

Amplify.configure({
	aws_appsync_graphqlEndpoint: cdkOutputs.BackendStack.AppSyncAPIURL,
	aws_appsync_region: cdkOutputs.BackendStack.awsAppsyncRegion,
	aws_appsync_authenticationType: cdkOutputs.BackendStack.AppSyncAuthType,
	aws_appsync_apiKey: cdkOutputs.BackendStack.AppSyncAPIKey,
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
