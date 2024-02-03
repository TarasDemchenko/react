import { QuizCard } from '../QuizCard';
import { List, ListItem } from './QuizList.styled';

export const QuizList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <QuizCard item={item} />
        </ListItem>
      ))}
    </List>
  );
};
