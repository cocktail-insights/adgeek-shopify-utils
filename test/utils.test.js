import utils from '../dist/index';
import test from 'tape';

test('validateSignature()', (t) => {
  const SECRET = '16a59867dad4acff40a4818cf9b52bbc';
  const query = {
    hmac: 'a6aa00a72acc8239c83f9ea3a25e57d86277118838f8ff81c159053c68861a1b',
    shop: 'teststore1234-53.myshopify.com',
    timestamp: '1489076957',
  };

  const result = utils.validateSignature(query, SECRET);

  t.equal(result, true);
  t.end();
});
