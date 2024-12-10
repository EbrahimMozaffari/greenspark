export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  priority: "low" | "medium" | "high"; 
  status: "pending" | "in-progress" | "completed"; 
  }
  
  export interface Filters {
    priority: string | null;
    status: string | null;
    search: string;
  }
  