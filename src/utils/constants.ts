/* eslint-disable no-unused-vars */
import pkg from '../../package.json';

export const APP_VERSION = pkg.version;
export const APP_NAME = 'RAT'; // React App Template
export const DATE_TIME_FORMAT = 'HH:mm - MMM DD, YYYY';

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  CUSTOMER = 'CUSTOMER',
  REVIEWER = 'REVIEWER',
}
