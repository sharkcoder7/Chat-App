const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString function should determine if input is a string', () => {
  it('should reject non-string value', () => {
    var res = isRealString(98)
    expect(res).toBe(false)
  });
  it('should reject strings with only spaces', () => {
    var res = isRealString('     ');
    expect(res).toBe(false)
  });
  it('should allow string wiht non-space characters', () => {
    var res = isRealString('jason');
    expect(res).toBe(true);
  });
});
