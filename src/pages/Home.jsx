

const Home = () => {
  return (
    <div className='container'>
      <h2 className='fade-in'>Welcome to the best all-in-one math problem solver ever made</h2>
      <iframe
      className='iframe'
        src="https://www.youtube.com/embed/xdm0eH5vyaM?autoplay=1" // Add loop=1 to the src URL
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
      <p style={{textAlign: 'center', marginTop: '50px'}}> I love that lil guy, also hes literally me <hr></hr> Zaid Ahmed</p>
    </div>
  );
};

export default Home;
