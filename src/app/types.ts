export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum Color {
  RED = "RED",
  ORANGE = "ORANGE",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
  BLUE = "BLUE",
  INDIGO = "INDIGO",
  PURPLE = "PURPLE",
  PINK = "PINK",
  BROWN = "BROWN",
}

export type TaskType = {
  id: number;
  title: string;
  color: Color;
  priority: Priority;
  completed: Boolean;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  placeholder?: boolean;
};

export type SubmitValues = {
  title: string;
  color: string;
  priority: string;
};
