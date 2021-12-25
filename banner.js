import * as packageJson from './package.json';

export const myBanner = `
/**
 * - - - - - - - -
 * ${packageJson.name}
 * Author: ${packageJson.author.name}
 * License: ${packageJson.license}
 * Version: ${packageJson.version}
 * - - - - - - - -
 */
`;
