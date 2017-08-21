const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message', () => {
    var from = 'Kris';
    var text = 'Some text';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message', () => {
    var from = 'Kris';
    var latitude = 12.213;
    var longitude = 32.123;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    // expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(message).toInclude({from, url});
  });
});
