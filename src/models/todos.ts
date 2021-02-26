export interface Todo {
  id: string;
  created: Date;
  content: string;
  status: TodoStatus;
}

export enum TodoStatus {
  TODO = 'TODO',
  AWAITING = 'AWAITING',
  DONE = 'DONE',
}

export type TodoState = {
  allIds: string[];
  byIds: { [key: string]: Todo };
};
