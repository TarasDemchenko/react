import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';

export const SwarchBar = () => {
  return (
    <div>
      <TopicFilter />
      <LevelFilter />
    </div>
  );
};
