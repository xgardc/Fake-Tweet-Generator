import { SelectLanguage, Tweet, Form } from './components';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full overflow-hidden">
      <div className="text-sm sm:hidden text-text px-3 mt-3">
        Tweet ekranınızda düzgün gözükmese bile kaydet dediğinizde düzgün bir
        şekilde indirilecektir.
      </div>
      <div className="mt-3" />
      <SelectLanguage />
      <div className="mt-6" />
      <Tweet />
      <div className="mt-6" />
      <Form />
    </div>
  );
};

export default App;
