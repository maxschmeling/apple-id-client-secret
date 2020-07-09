import { sign } from "jsonwebtoken";

export type ClientSecretConfig = {
  keyId: string;
  bundleId: string;
  teamId: string;
  privateKey: string;
};

export function createClientSecret(config: ClientSecretConfig): string {
  return sign({}, config.privateKey, {
    algorithm: "ES256",
    expiresIn: "1d",
    audience: "https://appleid.apple.com",
    subject: config.bundleId,
    issuer: config.teamId,
    keyid: config.keyId,
  });
}
