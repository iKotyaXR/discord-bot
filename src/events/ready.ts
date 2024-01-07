import createEvent from '../utils/createEvent';
import { mainConfig } from '../configs/main';
import { useLocalization } from '../utils/useLocalization';

export default createEvent('ready', (client) => {
  if (mainConfig.enableLogs) console.log(useLocalization().botStarted(client.user.username));
});

