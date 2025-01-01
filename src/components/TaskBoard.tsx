import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "Done";
}

interface TaskBoardProps {
  tasks: Task[];
}

const priorityColors = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-green-100 text-green-800",
};

const statusColors = {
  "To Do": "bg-gray-100 text-gray-800",
  "In Progress": "bg-amber-100 text-amber-800",
  "Done": "bg-green-100 text-green-800",
};

export const TaskBoard = ({ tasks }: TaskBoardProps) => {
  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {columns.map((column) => (
        <div key={column} className="space-y-4">
          <h3 className="font-semibold text-lg">{column}</h3>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-4 pr-4">
              {tasks
                .filter((task) => task.status === column)
                .map((task) => (
                  <Card key={task.id} className="glass-card p-4 hover-scale">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{task.title}</h4>
                        <span className={`status-chip ${priorityColors[task.priority]}`}>
                          {task.priority}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Assignee: {task.assignee}</span>
                        <span className={`status-chip ${statusColors[task.status]}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </ScrollArea>
        </div>
      ))}
    </div>
  );
};