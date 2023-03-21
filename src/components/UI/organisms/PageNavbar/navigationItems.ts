import {NavbarItem} from 'models/ui';
import {PagePaths} from 'routes/PagePaths';
import {IconCertificate, IconTools, IconUsers} from '@tabler/icons';

export const navigationItems: NavbarItem[] = [
  {link: PagePaths.CECTracker, label: 'CEC Requests', icon: IconCertificate},
  {link: PagePaths.Skills, label: 'Skills', icon: IconTools},
  {link: PagePaths.AccountDetails, label: 'Account Details', icon: IconUsers},
];
