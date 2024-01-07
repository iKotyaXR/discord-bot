import createEvent from '../utils/createEvent';

export default createEvent('ready', (client) => {
  console.log(`${client.user.username} Ready!`);
});
