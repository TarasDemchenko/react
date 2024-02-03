import { GlobalStyled } from './GlobalStyled';
import { QuizList } from './QuizList/QuizList';
import { SwarchBar } from './SwarchBar';
import quizItems from './data.json';

export const App = () => {
  return (
    <>
      <SwarchBar />
      <QuizList items={quizItems} />
      <GlobalStyled />
    </>
  );
};
