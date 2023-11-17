import React, { FC } from "react";

const Friends: FC = () => {
  const friendsList = [
    {
      id: 'pup',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      name: 'Petr Yan',
      isOnline: true,
    },
    {
      id: 'pupf',
      avatar: 'https://pbs.twimg.com/media/FjSMa9oXkAI13-H.jpg',
      name: 'Valentina Shevchenko',
      isOnline: true,
    },
    {
      id: 'pupr',
      avatar: 'https://pbs.twimg.com/media/FjXRjHWWIAAq9AF.jpg',
      name: 'Sergey Haritonov',
      isOnline: false,
    },
    {
        id: 'pups',
        avatar:'https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg',
        name:'Fedor Emelianenko',
        isOnline:false
      },
      {
        id: 'rups',
        avatar:'https://miro.medium.com/v2/resize:fit:1024/1*sGRBTgWKIj6YtSDHX8dDfg.png',
        name:'Oleg Taktarov',
        isOnline:true
      },
      {
        id: 'pupp',
        avatar:'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/Magic-AI-.png',
        name:'Anastasia Belyeva',
        isOnline:false
      }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Friends</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {friendsList.map((friend) => (
          <li key={friend.id} style={{ margin: '10px', display: 'inline-block' }}>
            <img
              src={friend.avatar}
              alt={friend.name}
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
            <p>{friend.name}</p>
            {friend.isOnline ? (
              <p style={{ color: 'green' }}> is Online</p>
            ) : (
              <p style={{ color: 'gray' }}> is Offline</p>
            )}
          </li>
        ))}
      </ul>
      <button
        disabled
        style={{
          marginTop: '10px',
          backgroundColor: '#FF66CC', 
          color: 'white',
          padding: '8px 16px', 
          fontSize: '14px',
          border: 'none',
          borderRadius: '4px',
          width: '200px', 
          height: '70px'
        }}
      >
        Add new friend
      </button>
    </div>
  );
};

export default Friends;