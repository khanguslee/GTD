import React, { useState } from 'react';
import { Section, Tab } from 'rbx';

interface TodoListTab {
  index: TodoListTabIndex;
  title: string;
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
    },
    {
      index: TodoListTabIndex.AWAIT,
      title: 'Awaiting',
    },
    {
      index: TodoListTabIndex.DONE,
      title: 'Done',
    },
  ];

  const isTabSelected = (index: number) => activeTabIndex === index;

  return (
    <Section>
      <Tab.Group>
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
    </Section>
  );
}

export default TodoList;
