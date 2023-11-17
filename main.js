const people = ['Ivan', 'Maria', 'Stoyan', 'Stoyan', 'Petar', 'Iva'];

const result = people.find(function(person) {
    return person.startsWith('S');
});
console.log(result);