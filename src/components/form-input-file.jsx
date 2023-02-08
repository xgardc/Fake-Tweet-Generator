import { useCallback, useEffect, useState } from 'react';
import { useTweetContext } from '../context/tweet';

const FileInput = ({ className, name }) => {
  const [image, setImage] = useState(null);
  const { tweet, setTweet } = useTweetContext();

  useEffect(() => {
    image && setTweet((tweet) => ({ ...tweet, [name]: image }));
  }, [image]);

  const handleChange = useCallback((e) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.addEventListener('load', (file) => {
      setImage(file.target.result);
    });

    reader.readAsDataURL(e.target.files[0]);
  }, []);

  return (
    <input
      id={name}
      type="file"
      name={name}
      onChange={handleChange}
      className={className}
      accept="image/*"
    />
  );
};

export default FileInput;
