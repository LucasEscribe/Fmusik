import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Center from '../../components/Center/Center';
import styles from '../../index.module.css'

interface HomeProps {
  isArtistProfile: boolean;
}

function Home(_props: HomeProps) {
  return (
    <div className={styles.homeContainer}>
      <LeftSidebar />
      <Center />
    </div>
  );
}

export default Home;
