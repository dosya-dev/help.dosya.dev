import {existsSync} from 'node:fs';
// The public help.dosya.dev mirror ships this app alone. Tests that check it
// against the API migrations, the admin preview origin or the web app only
// mean something inside the monorepo, so they skip there.
export const inMonorepo=existsSync(new URL('../../api/package.json',import.meta.url));
