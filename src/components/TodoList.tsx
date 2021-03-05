import React, { useState } from 'react';
import { Section, Tab, Icon } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faClock } from '@fortawesome/free-regular-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import { useTypedSelector } from '../selectors';
import { TodoStatus } from '../models/todos';
import { getTodosByStatus } from '../selectors/todos';
import TodoCard from './TodoCard';

interface TodoListTab {
  index: TodoListTabIndex;
  title: string;
  icon?: IconProp;
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
      icon: faInbox,
    },
    {
      index: TodoListTabIndex.AWAIT,
      title: 'Awaiting',
      status: TodoStatus.AWAITING,
      icon: faClock,
    },
    {
      index: TodoListTabIndex.DONE,
      title: 'Done',
      status: TodoStatus.DONE,
      icon: faCheckSquare,
    },
  ];

  const isTabSelected = (index: number) => activeTabIndex === index;

  const todos = useTypedSelector((state) =>
    getTodosByStatus(state, tabConfig[activeTabIndex].status)
  );

  return (
    <Section>
      <Tab.Group fullwidth>
        {tabConfig.map((item, index) => (
          <Tab
            key={`${item.title}-tab`}
            active={isTabSelected(item.index)}
            onClick={() => setActiveTabIndex(item.index)}
          >
            {item.icon && (
              <Icon size="small">
                <FontAwesomeIcon icon={item.icon} />
              </Icon>
            )}
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
