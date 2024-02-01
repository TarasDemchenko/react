import { QuizList } from './QuizList';
import { SwarchBar } from './SwarchBar';
import quizItems from './data.json';

export const App = () => {
  return (
    <>
      <SwarchBar />
      <QuizList items={quizItems} />
    </>
  );
};
