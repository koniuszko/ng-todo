interface Task {
  id: number
  description: string
  active: boolean
}

export const tasks: Task[] = [
  {
    id: 1,
    description: "Complete online JavaScript course",
    active: false,
  },
  {
    id: 2,
    description: "Jog around the park 3x",
    active: true,
  },
  {
    id: 3,
    description: "10 minutes meditation",
    active: true,
  },
  {
    id: 4,
    description: "Read for 1 hour",
    active: true,
  },
  {
    id: 5,
    description: "Pick up groceries",
    active: true,
  },
  {
    id: 6,
    description: "Complete Todo App on Frontend Mentor",
    active: true,
  },
]
