import React from 'react'

function imdbcard() {

  const movies = [
    {
      rank: 1,
      name: "Superman",
      image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=200"
    },
    {
      rank: 2,
      name: "Weapons",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200"
    },
    {
      rank: 3,
      name: "Sinners",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=200"
    },
    {
      rank: 4,
      name: "One Battle After Another",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200"
    },
    {
      rank: 5,
      name: "Jurassic World: Rebirth",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200"
    },
    {
      rank: 6,
      name: "Frankenstein",
      image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=200"
    },
    {
      rank: 7,
      name: "Happy Gilmore 2",
      image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=200"
    },
    {
      rank: 8,
      name: "Thunderbolts*",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200"
    },
    {
      rank: 9,
      name: "Mission: Impossible - The Final Reckoning",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200"
    },
    {
      rank: 10,
      name: "F1",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=200"
    }
  ]

  return (

    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#244f91',
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        color: 'white'
      }}
    >

      {/* Heading */}

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>

        <h1
          style={{
            fontSize: '55px',
            margin: '0',
            fontWeight: 'bold'
          }}
        >
          IMDb
        </h1>

        <h2
          style={{
            fontSize: '38px',
            margin: '0',
            color: '#f3b6a8'
          }}
        >
          BEST OF 2025
        </h2>

        <h3
          style={{
            fontSize: '30px',
            margin: '10px 0',
            color: '#f3b6a8'
          }}
        >
          MOST POPULAR MOVIES
        </h3>

        <p style={{ fontSize: '15px' }}>
          AS OF 12/2/25
        </p>
      </div>
      <div
        style={{
          maxWidth: '1000px',
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '25px'
        }}
      >
        {movies.map((movie) => (

          <div
            key={movie.rank}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '10px'
            }}
          >
            <div
              style={{
                fontSize: '42px',
                fontWeight: 'bold',
                color: '#f3b6a8',
                width: '45px'
              }}
            >
              {movie.rank}
            </div>
            <img
              src={movie.image}
              alt={movie.name}
              style={{
                width: '95px',
                height: '95px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '3px solid white'
              }}
            />
            <div
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                maxWidth: '250px'
              }}
            >
              {movie.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default imdbcard