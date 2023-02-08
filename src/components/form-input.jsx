import { useCallback } from 'react';
import { useTweetContext } from '../context/tweet';

const Input = ({ type = 'text', name }) => {
  const { tweet, setTweet } = useTweetContext();

  const handleChange = useCallback((e) => {
    e.preventDefault();
    if (type === 'number') {
      e.target.value.length !== 1 &&
        e.target.value.startsWith('0') &&
        (e.target.value = e.target.value.substring(1));

      e.target.value = +e.target.value >= 0 ? e.target.value : 0;
    }
    setTweet((tweet) => ({ ...tweet, [name]: e.target.value }));
  }, []);

  return (
    <input
      value={tweet[name]}
      type={type}
      name={name}
      id={name}
      onChange={handleChange}
      autoComplete="off"
      className="h-12 border border-white/20 border-b-white/40 rounded-md px-3"
    />
  );
};

export default Input;
