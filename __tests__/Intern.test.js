const Intern = require('../lib/Intern');

test('create Intern object', () => {
  const employee = new Intern('Jane', 123456, 'jane.doe@email.com', 'Duke University');

  expect(employee.getName()).toBe('Jane');
  expect(employee.getId()).toEqual(123456);
  expect(employee.getEmail()).toBe('jane.doe@email.com');
  expect(employee.getSchool()).toBe('Duke University');

});

test('call Intern\'s getRole() method', () => {
  const employee = new Intern('Jane', 123456, 'jane.doe@email.com', 'Duke University');

  expect(employee.getRole()).toBe('Intern');

});



