import * as Icons from './icons';
import { createRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTweetContext } from '../context/tweet';
import { useScreenshot } from 'use-react-screenshot';

const Tweet = () => {
  const { tweet } = useTweetContext();
  const { t } = useTranslation();
  const tweetRef = createRef();
  const [image, takeScreenshot] = useScreenshot();

  useEffect(() => {
    console.log('image', image);
  }, [image]);

  const getImage = () => takeScreenshot(tweetRef.current);

  const abbrNum = useCallback((number) => {
    const abbreviations = [t('thousand'), t('million')];

    for (let i = abbreviations.length - 1; i >= 0; i--) {
      const size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
        number = Math.round(number / size);
        if (number == 1000 && i < abbreviations.length - 1) {
          number = 1;
          i++;
        }
        number += ' ' + abbreviations[i];
        break;
      }
    }

    return number;
  }, []);

  return (
    <>
      <div
        ref={tweetRef}
        className="text-white bg-black w-[600px] px-4 py-3 flex gap-x-3 border border-border text-[0.938rem]"
      >
        <div className="h-12 w-12 min-w-[3rem] rounded-full overflow-hidden">
          <img
            src={tweet.image}
            alt="PP"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-center justify-between h-[22px] w-full">
            <div className="flex items-center space-x-0.5">
              <h1 className="font-bold">{tweet.name}</h1>
              <Icons.VerifiedBlue className="h-[18.75px] w-[18.75px] text-verify-blue" />
              <div className="ml-2 font-normal text-text flex space-x-1">
                <span className="ml-1">{tweet.username}</span>
                <span className="flex items-center h-4">.</span>
                <span>{tweet.time}</span>
              </div>
            </div>
            <Icons.ThreeDot className="h-[18.75px] w-[18.75px] text-text" />
          </div>
          <div className="break-words">{tweet.content}</div>
          <div className="flex flex-row justify-between mt-2 w-[425px]">
            <div className="text-text flex items-center justify-center gap-x-2 -tracking-wide">
              <Icons.Comment className="h-[18.75px] w-[18.75px]" />
              {abbrNum(tweet.comments)}
            </div>
            <div className="text-text flex items-center justify-center gap-x-2 -tracking-wide">
              <Icons.Retweet className="h-[18.75px] w-[18.75px]" />
              {abbrNum(tweet.retweets)}
            </div>
            <div className="text-text flex items-center justify-center gap-x-2 -tracking-wide">
              <Icons.Like className="h-[18.75px] w-[18.75px]" />
              {abbrNum(tweet.likes)}
            </div>
            <div className="text-text flex items-center justify-center gap-x-2 -tracking-wide">
              <Icons.View className="h-[18.75px] w-[18.75px]" />
              {abbrNum(tweet.views)}
            </div>
            <div className="text-text flex items-center justify-center gap-x-3">
              <Icons.Share className="h-[18.75px] w-[18.75px]" />
            </div>
          </div>
        </div>
      </div>
      <button
        className="h-10 px-6 bg-indigo-500/25 rounded-md mt-4"
        onClick={getImage}
      >
        {t('tweet.download')}
      </button>
    </>
  );
};

export default Tweet;
