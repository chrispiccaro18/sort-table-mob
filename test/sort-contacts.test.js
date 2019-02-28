import sortContacts from '../src/sort-contacts.js';

const test = QUnit.test;

QUnit.module('sort contacts');

const contacts = [
    { firstName: 'Donut', age: 7 },
    { firstName: 'Alabaster', age: 2 },
    { firstName: 'Lavender', age: 5 }
];

test('sort by first name', assert => {
    //arrange
    const sortChoices = { property: 'firstName' };
    //act
    const sorted = sortContacts(contacts, sortChoices);

    // assert
    assert.deepEqual(sorted, [
        { firstName: 'Alabaster', age: 2 },
        { firstName: 'Donut', age: 7 },
        { firstName: 'Lavender', age: 5 }
    ]);
});

test('sort by age', assert => {
    //arrange
    const sortChoices = { property: 'age' };
    //act
    const sorted = sortContacts(contacts, sortChoices);

    // assert
    assert.deepEqual(sorted, [
        { firstName: 'Alabaster', age: 2 },
        { firstName: 'Lavender', age: 5 },
        { firstName: 'Donut', age: 7 }
    ]);
});