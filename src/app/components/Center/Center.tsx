import Artist from '../Artist/Artist';


const artists = [
    {
      img: "/src/app/assets/img/artistas/dillom/dillom_opa.jpg",
      name: "Dillom",
      song: "Opa",
      views: 10
    },
    {
      img: "/src/app/assets/img/artistas/dillom/dillom_pelotuda.jpg",
      name: "Dillom",
      song: "Pelotuda",
      views: 18
    },
    {
      img: "/src/app/assets/img/artistas/dillom/dillom_sauce.jpg",
      name: "Dillom",
      song: "Sauce",
      views: 6
    }
];
  

function Center() {
  return (
    <div>
      {artists.map((artist) => (
        <Artist
          key={artist.name}
          img={artist.img}
          name={artist.name}
          song={artist.song}
          views={artist.views}
        />
      ))}
    </div>
  );
}

export default Center;
