export const QuizCard = ({ item: { topic, level, time, questions } }) => {
  return (
    <>
      <h2>{topic}</h2>
      <p>Time: {time} min</p>
      <p>Questions: {questions}</p>
      <p>Level: {level}</p>
    </>
  );
};
