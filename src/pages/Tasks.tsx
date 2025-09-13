import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check as CheckCircle, Clock, Circle as AlertCircle, Plus, Menu, CreditCard as Edit, Trash2, Calendar1 as Calendar } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

export default function Tasks() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    subject: '',
    dueDate: '',
    priority: 'medium',
    type: 'assignment'
  });

  const tasks = [
  {
    id: 1,
    title: "Complete Math Assignment",
    description: "Solve problems 1-20 from Chapter 5",
    subject: "Mathematics",
    dueDate: "2023-12-25",
    priority: "high",
    type: "assignment",
    completed: false,
    estimatedTime: "2 hours"
  },
  {
    id: 2,
    title: "Read History Chapter 8",
    description: "Read and take notes on World War II",
    subject: "History",
    dueDate: "2023-12-26",
    priority: "medium",
    type: "reading",
    completed: false,
    estimatedTime: "1.5 hours"
  },
  {
    id: 3,
    title: "Chemistry Lab Report",
    description: "Write lab report for acid-base titration experiment",
    subject: "Chemistry",
    dueDate: "2023-12-28",
    priority: "high",
    type: "report",
    completed: false,
    estimatedTime: "3 hours"
  },
  {
    id: 4,
    title: "Physics Problem Set",
    description: "Complete problems on momentum and energy",
    subject: "Physics",
    dueDate: "2023-12-24",
    priority: "low",
    type: "assignment",
    completed: true,
    estimatedTime: "1 hour"
  },
  {
    id: 5,
    title: "English Essay Draft",
    description: "First draft of literature analysis essay",
    subject: "English",
    dueDate: "2023-12-30",
    priority: "medium",
    type: "essay",
    completed: false,
    estimatedTime: "4 hours"
  }];


  const handleCreateTask = () => {
    console.log('Creating task:', newTask);
    setIsCreateDialogOpen(false);
    setNewTask({
      title: '',
      description: '',
      subject: '',
      dueDate: '',
      priority: 'medium',
      type: 'assignment'
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':return 'destructive';
      case 'medium':return 'default';
      case 'low':return 'secondary';
      default:return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'assignment':return <CheckCircle className="h-4 w-4" />;
      case 'reading':return <Clock className="h-4 w-4" />;
      case 'report':return <AlertCircle className="h-4 w-4" />;
      case 'essay':return <Edit className="h-4 w-4" />;
      default:return <CheckCircle className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString();
    }
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  const todayTasks = tasks.filter((task) => {
    const taskDate = new Date(task.dueDate);
    const today = new Date();
    return taskDate.toDateString() === today.toDateString();
  });
  const upcomingTasks = tasks.filter((task) => {
    const taskDate = new Date(task.dueDate);
    const today = new Date();
    return taskDate > today && !task.completed;
  });

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-background border-b border-border px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}>

                <Menu className="h-6 w-6" />
              </Button>
              <div>
                <h1 className="text-2xl font-heading font-bold text-foreground">Tasks</h1>
                <p className="text-muted-foreground">Manage your assignments and deadlines</p>
              </div>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Task</DialogTitle>
                  <DialogDescription>
                    Add a new task to your study schedule.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Task Title</Label>
                    <Input
                      id="title"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      placeholder="e.g., Complete Math Assignment" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newTask.description}
                      onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                      placeholder="Task details and requirements" />

                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={newTask.subject}
                        onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
                        placeholder="e.g., Mathematics" />

                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={newTask.dueDate}
                        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />

                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select value={newTask.priority} onValueChange={(value) => setNewTask({ ...newTask, priority: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Type</Label>
                      <Select value={newTask.type} onValueChange={(value) => setNewTask({ ...newTask, type: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assignment">Assignment</SelectItem>
                          <SelectItem value="reading">Reading</SelectItem>
                          <SelectItem value="report">Report</SelectItem>
                          <SelectItem value="essay">Essay</SelectItem>
                          <SelectItem value="project">Project</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleCreateTask}>Create Task</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{tasks.length}</div>
                <p className="text-xs text-muted-foreground">All tasks</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingTasks.length}</div>
                <p className="text-xs text-muted-foreground">To be completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Due Today</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayTasks.length}</div>
                <p className="text-xs text-muted-foreground">Urgent tasks</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedTasks.length}</div>
                <p className="text-xs text-muted-foreground">Finished tasks</p>
              </CardContent>
            </Card>
          </div>

          {/* Tasks Tabs */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Tasks</TabsTrigger>
              <TabsTrigger value="today">Due Today</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {tasks.map((task) =>
              <Card key={task.id} className={`hover:shadow-md transition-shadow duration-300 ${task.completed ? 'opacity-60' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Checkbox
                      checked={task.completed}
                      className="mt-1" />

                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`font-semibold ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="flex items-center gap-1">
                            {getTypeIcon(task.type)}
                            {task.type}
                          </Badge>
                          <Badge variant={getPriorityColor(task.priority)}>
                            {task.priority} priority
                          </Badge>
                          <Badge variant="secondary">
                            {task.subject}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Due {formatDate(task.dueDate)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {task.estimatedTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="today" className="space-y-4">
              {todayTasks.length === 0 ?
              <Card>
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">No tasks due today</h3>
                    <p className="text-muted-foreground">Great job staying on top of your schedule!</p>
                  </CardContent>
                </Card> :

              todayTasks.map((task) =>
              <Card key={task.id} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Checkbox checked={task.completed} />
                        <div className="flex-1">
                          <h3 className="font-semibold">{task.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge variant={getPriorityColor(task.priority)}>
                              {task.priority} priority
                            </Badge>
                            <Badge variant="secondary">{task.subject}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              )
              }
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingTasks.map((task) =>
              <Card key={task.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Checkbox checked={task.completed} />
                      <div className="flex-1">
                        <h3 className="font-semibold">{task.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <Badge variant={getPriorityColor(task.priority)}>
                            {task.priority} priority
                          </Badge>
                          <Badge variant="secondary">{task.subject}</Badge>
                          <span className="text-sm text-muted-foreground">
                            Due {formatDate(task.dueDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedTasks.length === 0 ?
              <Card>
                  <CardContent className="p-8 text-center">
                    <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">No completed tasks yet</h3>
                    <p className="text-muted-foreground">Complete some tasks to see them here!</p>
                  </CardContent>
                </Card> :

              completedTasks.map((task) =>
              <Card key={task.id} className="opacity-60">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Checkbox checked={true} />
                        <div className="flex-1">
                          <h3 className="font-semibold line-through text-muted-foreground">{task.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge variant="outline">Completed</Badge>
                            <Badge variant="secondary">{task.subject}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              )
              }
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>);

}