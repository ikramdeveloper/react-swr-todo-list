export type IdType = number;

export interface ITodo {
  id: IdType;
  todo: string;
  userId: number;
  completed: boolean;
}
