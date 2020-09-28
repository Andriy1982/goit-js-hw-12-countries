import { defaultModules, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';

defaultModules.set(PNotifyMobile, {});

export default error;
