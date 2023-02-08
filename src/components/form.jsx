import { useTranslation } from 'react-i18next';
import { FormInput, FormInputFile } from '.';

const Form = () => {
  const { t } = useTranslation();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-[350px] flex-grow space-y-6 overflow-auto"
    >
      <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="name" className="pl-1">
          {t('tweet.name')}
        </label>
        <FormInput name="name" />
      </div>
      <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="username" className="pl-1">
          {t('tweet.username')}
        </label>
        <FormInput name="username" />
      </div>
      <div className="flex flex-row w-full justify-between items-center !mt-4">
        <label className="pl-1" htmlFor="image">
          {t('tweet.image')}
        </label>
        <label className="px-3.5 flex items-center justify-center h-10 bg-verify-blue/75 hover:bg-verify-blue/90 transition-colors ring-white/20 active:ring rounded-md cursor-pointer">
          <FormInputFile name="image" className="hidden" />
          {t('tweet.upload')}
        </label>
      </div>
      <div className="flex flex-col space-y-1 w-full !mt-4">
        <label htmlFor="content" className="pl-1">
          {t('tweet.content')}
        </label>
        <FormInput name="content" />
      </div>
      <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="time" className="pl-1">
          {t('tweet.time')}
        </label>
        <FormInput name="time" />
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col space-y-1 w-[170px]">
          <label htmlFor="comments" className="pl-1">
            {t('tweet.comments')}
          </label>
          <FormInput type="number" name="comments" />
        </div>
        <div className="flex flex-col space-y-1 w-[170px]">
          <label htmlFor="retweets" className="pl-1">
            {t('tweet.retweets')}
          </label>
          <FormInput type="number" name="retweets" />
        </div>
      </div>
      <div className="flex flex-row w-full justify-between !mt-4">
        <div className="flex flex-col space-y-1 w-[170px]">
          <label htmlFor="likes" className="pl-1">
            {t('tweet.likes')}
          </label>
          <FormInput type="number" name="likes" />
        </div>
        <div className="flex flex-col space-y-1 w-[170px]">
          <label htmlFor="views" className="pl-1">
            {t('tweet.views')}
          </label>
          <FormInput type="number" name="views" />
        </div>
      </div>
    </form>
  );
};

export default Form;
