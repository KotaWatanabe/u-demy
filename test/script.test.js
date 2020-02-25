const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];

it('it is a silly test', () => {
    expect('hello').toBe('hello')
    // googleSearch('testtest',dbMock);
})

it('it seaching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
})
