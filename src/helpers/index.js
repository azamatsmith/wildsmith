export const personLookup = name => {
  const people = [
    {
      authorAlias: ['Matthew Smith', 'Matt Smith'],
      email: 'azamatsmith@gmail.com',
      title: 'React Consultant',
      role: 'Developer, Co-owner Wildsmith Studio, LLC',
      twitterHandle: '@azamatsmith',
    },
    {
      authorAlias: ['Rachel Cope', 'Rachel Cope Smith', 'Rachel Smith'],
      email: 'rachelcope@gmail.com',
      title: 'UI/UX/Product Designer',
      role: 'Designer, Co-owner Wildsmith Studio, LLC',
      twitterHandle: '@rachelcope',
    },
  ];
  const [person] = people.filter(person => {
    return person.authorAlias.indexOf(name) >= 0;
  });
  return person;
};
