import { environment } from 'src/environments/environment';

export default
    {

        oidc: {
            clientId: '0oa58y3tluoMadKR45d7',
            issuer: 'https://dev-52161996.okta.com/oauth2/default',
            redirectUri: environment.redirectUrl,
            scopes: ['openid', 'profile', 'email']
        }

    }
