import createEvent from '../utils/createEvent';

export default createEvent('messageCreate', (message) => {
  if (message.author.bot) return;
  console.log(message.content);

  if (message.content.toLowerCase() === 'hello') message.channel.send('world');
});
