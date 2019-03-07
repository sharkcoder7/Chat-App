const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'jon';
    var lat = '26.3380777';
    var long = '-80.1078862';
    var url = 'https://www.google.com/maps/?q=26.3380777,-80.1078862';
    var res = generateLocationMessage(from, lat, long);
    console.log(res);
    expect(res.from).toBe('jon');
    expect(res.createdAt).toBeA('number');
    expect(res.url).toBe(url);
    expect(res).toInclude({from, url});
  });
});
