import { createContext, useContext, useEffect, useState } from 'react';

const tweetContext = createContext();

const useTweetContext = () => useContext(tweetContext);

const TweetContextProvider = ({ children }) => {
  const [tweet, setTweet] = useState({
    image: '',
    name: '',
    username: '',
    content: '',
    time: '',
    comments: '0',
    retweets: '0',
    likes: '0',
    views: '0',
  });
  return (
    <tweetContext.Provider value={{ tweet, setTweet }} children={children} />
  );
};

export { useTweetContext, TweetContextProvider };
