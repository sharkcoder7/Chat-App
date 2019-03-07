const expect = require('expect');

var {generateMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'jason';
    var text = 'Some message';
    var res = generateMessage(from, text);
    expect(res.from).toBe('jason');
    expect(res.text).toBe('Some message');
    expect(res.createdAt).toBeA('number');
  });
});
