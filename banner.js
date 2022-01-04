import * as packageJson from './package.json';
import ci from 'ci-info';

export const myBanner = `
/**
 * - - - - - - - -
 * ${packageJson.name}
 * Author: ${packageJson.author.name}
 * License: ${packageJson.license}
 * Version: ${packageJson.version}
 * CI/CD: ${ci.name}
 * - - - - - - - -
 */
`;
