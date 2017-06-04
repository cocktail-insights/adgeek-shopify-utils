import crypto from 'crypto';
import { objectToQueryString } from 'adgeek-utils';

/**
 * validateSignature
 * @description This util function validates a request from shopify
 * @param {Object} query - request query
 * @param {String} secret - Shopify api secret key
 * @return {Boolean}
 */
function validateSignature(query, secret) {
  const clone = Object.assign({}, query);
  const hmac = clone.hmac || '';

  if (!hmac) return false;

  delete clone.hmac;
  const input = objectToQueryString(clone);

  const hash = crypto
    .createHmac('sha256', secret)
    .update(input)
    .digest('hex');

  return hash === hmac;
}

export default {
  validateSignature,
};
