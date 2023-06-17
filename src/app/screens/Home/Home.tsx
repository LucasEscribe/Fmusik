import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Center from '../../components/Center/Center';

interface HomeProps {
  isArtistProfile: boolean;
}

function Home(_props: HomeProps) {
  return (
    <div>
      <LeftSidebar />
      <Center />
    </div>
  );
}

export default Home;
