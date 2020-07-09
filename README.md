# Apple ID Client Secret

The Apple ID REST API for exchanging authorization codes or refresh tokens for access tokens requires a client secret in the form of a signed JWT. This simple library will generate the signed JWT using minimal configuration.

Implementation based on [Generate and Validate Tokens](https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens) documentation from Apple and built using the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package from Auth0.

## Install

```bash
$ npm install apple-id-client-secret
```

or

```bash
$ yarn add apple-id-client-secret
```

## Usage

```typescript
import { createClientSecret } from "apple-id-client-secret"

const clientSecret: string = createClientSecret({
  keyId: "{key ID from Apple}",
  bundleId: "com.example",
  teamId: "{team ID frmo Apple}",
  privateKey: `-----BEGIN PRIVATE KEY-----
{your}
{private}
{key}
-----END PRIVATE KEY-----`;
});
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
