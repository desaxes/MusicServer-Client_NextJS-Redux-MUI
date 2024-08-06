import DrawerComponent from '../components/drawer';
import s from './main.module.scss'

import MainContainer from '@/components/main-container';
const Home = () => {
  return (
    <>
      <MainContainer>
        <div>
          {/* <DrawerComponent /> */}
          <div className={s.center}>
            <h1>Welcome</h1>
            <h3>The best tracks are already here</h3>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
export default Home
