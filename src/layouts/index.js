import BasicLayout from './basic';
import PlatformLayout from './platform';
//umi搭建的项目入口
function Index(props) {
  const { location, children } = props;
  const { pathname } = location;
  if (pathname === '/' || pathname === '/login') {
    return <BasicLayout>{children}</BasicLayout>;
  }
  return <PlatformLayout {...props}>{children}</PlatformLayout>;
}

export default Index;
