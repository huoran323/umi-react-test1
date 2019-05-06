import Redirect from 'umi/redirect';
import { sysDefaultPage } from '@config';

export default () => <Redirect to={{ ...sysDefaultPage }} />;
