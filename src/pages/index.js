import Redirect from 'umi/redirect';
import { defaultPage } from '@config';
export default () => <Redirect to={{ ...defaultPage }} />;
