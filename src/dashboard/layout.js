import css from './style.module.css';
import Overlay from './provider/overlay';
import TopNavigation from './topnavigation';
import SideNavigation from './sidenavigation';
import DashboardProvider from './provider/context';

/*	w-[calc(100%-16rem)] class get the remain width of the main component from lg:viewport by subtracting
(the total width by the width of the side navigation component which is w-64 = 16rem)*/

const style = {
  content: `h-screen overflow-hidden relative lg:rounded-2xl`,
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:w-[calc(100%-16rem)] lg:space-y-4`,
  container: `bg-mac bg-center bg-cover h-screen overflow-hidden w-full lg:p-4`,
};

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className={`${style.content} ${css.content}`}>
          <div className="flex items-start">
            <Overlay />
            <SideNavigation mobilePosition="right" />
            <div className={style.mainContainer}>
              <TopNavigation />
              <main className={`${style.main} ${css.main}`}>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
