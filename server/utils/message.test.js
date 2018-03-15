const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'keshav';
        var text =  'hello';
        var message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            "from": from,
            "text": text
        });
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'keshav';
        var latitude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1'
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(typeof locationMessage.createdAt).toBe('number');
        expect(locationMessage).toMatchObject({
            "from": from,
            "url": url
        });
        
    })
})