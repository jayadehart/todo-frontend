export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum Color {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  INDIGO,
  PURPLE,
  PINK,
  BROWN,
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
