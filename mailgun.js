import dotenv from 'dotenv';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Mailgun = require('mailgun-js');
dotenv.config();

const API_KEY = process.env.API_KEY_MAILGUN;
const DOMAIN = process.env.DOMAIN;
export const mailgun = Mailgun({apiKey: API_KEY, domain: DOMAIN});