import * as PACKAGE from './package.json';
import ci from 'ci-info';

export const myBanner = `
/**
 * - - - - - - - -
 * ${PACKAGE.name}
 * Author: ${PACKAGE.author.name}
 * License: ${PACKAGE.license}
 * Version: ${PACKAGE.version}
 * CI/CD: ${ci.name}
 * - - - - - - - -
 */
`;
