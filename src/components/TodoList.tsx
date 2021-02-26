import React, { useState } from 'react';
import { Section, Tab } from 'rbx';
import { useTypedSelector } from '../selectors';

import { TodoStatus } from '../models/todos';
import { getTodosByStatus } from '../selectors/todos';
import TodoCard from './TodoCard';

interface TodoListTab {
  index: TodoListTabIndex;
  title: string;
  status: TodoStatus;
}

enum TodoListTabIndex {
  TODO = 0,
  AWAIT = 1,
  DONE = 2,
}

function TodoList() {
  const [activeTabIndex, setActiveTabIndex] = useState<TodoListTabIndex>(
    TodoListTabIndex.TODO
  );

  const tabConfig: TodoListTab[] = [
    {
      index: TodoListTabIndex.TODO,
      title: 'Todo',
      status: TodoStatus.TODO,
    },
    {
      index: TodoListTabIndex.AWAIT,
      title: 'Awaiting',
      status: TodoStatus.AWAITING,
    },
    {
      index: TodoListTabIndex.DONE,
      title: 'Done',
      status: TodoStatus.DONE,
    },
  ];

  const isTabSelected = (index: number) => activeTabIndex === index;

  const todos = useTypedSelector((state) =>
    getTodosByStatus(state, tabConfig[activeTabIndex].status)
  );

  return (
    <Section>
      <Tab.Group fullwidth kind="toggle">
        {tabConfig.map((item, index) => (
          <Tab
            key={`${item.title}-tab`}
            active={isTabSelected(item.index)}
            onClick={() => setActiveTabIndex(item.index)}
          >
            {item.title}
          </Tab>
        ))}
      </Tab.Group>
      {todos.map(
        (todo) => todo && <TodoCard key={`${todo.id}-card`} todo={todo} />
      )}
    </Section>
  );
}

export default TodoList;
