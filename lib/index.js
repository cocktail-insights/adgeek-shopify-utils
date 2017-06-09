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
  const signature = clone.signature || '';

  if (!signature) return false;

  delete clone.signature;
  const input = objectToQueryString(clone);

  const hash = crypto
    .createHmac('sha256', secret)
    .update(input)
    .digest('hex');

  return hash === signature;
}

export default {
  validateSignature,
};
