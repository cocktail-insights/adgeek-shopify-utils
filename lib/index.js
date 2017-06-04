import crypto from 'crypto';




/**
 * validateSignature
 * @description This util function validates a request from shopify
 * @param {Object} query - request query
 * @param {String} secret - Shopify api secret key
 * @return {Boolean}
 */
export function validateSignature(query, secret) {
  let clone = Object.assign({}, query);
  const hmac = clone.hmac || '';

  if (!hmac) return false;

  delete clone.hmac;
  const input = objectToUrlString(clone);

  const hash = crypto
    .createHmac('sha256', SHOPIFY_SHARED_SECRET)
    .update(input)
    .digest('hex');

  return hash === hmac;
}
