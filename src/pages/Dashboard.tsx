import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar1 as Calendar, Target, TrendingUp, Clock, Check as CheckCircle, Circle as AlertCircle, Plus, Menu, Bell, Settings, User } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const upcomingTasks = [
  { id: 1, title: "Complete Math Assignment", subject: "Mathematics", dueDate: "Today", priority: "high" },
  { id: 2, title: "Read Chapter 5", subject: "History", dueDate: "Tomorrow", priority: "medium" },
  { id: 3, title: "Lab Report", subject: "Chemistry", dueDate: "Dec 28", priority: "low" }];


  const studyPlans = [
  { id: 1, title: "Final Exams Preparation", progress: 65, subjects: 4, dueDate: "Jan 15" },
  { id: 2, title: "Midterm Review", progress: 90, subjects: 3, dueDate: "Dec 30" },
  { id: 3, title: "Project Deadlines", progress: 40, subjects: 2, dueDate: "Jan 10" }];


  const todayStats = {
    studyTime: "4h 30m",
    tasksCompleted: 8,
    streakDays: 12,
    weeklyGoal: 75
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Header */}
      <div className="lg:pl-64">
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
                <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's your study overview.</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Time Today</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayStats.studyTime}</div>
                <p className="text-xs text-muted-foreground">+20% from yesterday</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayStats.tasksCompleted}</div>
                <p className="text-xs text-muted-foreground">Great progress!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayStats.streakDays} days</div>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayStats.weeklyGoal}%</div>
                <Progress value={todayStats.weeklyGoal} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Your next assignments and deadlines</CardDescription>
                </div>
                <Link to="/tasks">
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task) =>
                <div key={task.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{task.title}</h4>
                      <p className="text-sm text-muted-foreground">{task.subject}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                      variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}>

                        {task.priority}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{task.dueDate}</span>
                    </div>
                  </div>
                )}
                <Link to="/tasks">
                  <Button variant="ghost" className="w-full">
                    View All Tasks
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Study Plans */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Active Study Plans</CardTitle>
                  <CardDescription>Your current study schedules</CardDescription>
                </div>
                <Link to="/study-plans">
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Plan
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {studyPlans.map((plan) =>
                <div key={plan.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{plan.title}</h4>
                      <span className="text-sm text-muted-foreground">Due {plan.dueDate}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{plan.subjects} subjects</span>
                      <span className="text-sm font-medium">{plan.progress}%</span>
                    </div>
                    <Progress value={plan.progress} className="h-2" />
                  </div>
                )}
                <Link to="/study-plans">
                  <Button variant="ghost" className="w-full">
                    View All Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks to help you stay organized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/study-plans">
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                    <BookOpen className="h-6 w-6" />
                    <span>Create Study Plan</span>
                  </Button>
                </Link>
                <Link to="/tasks">
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                    <CheckCircle className="h-6 w-6" />
                    <span>Add Task</span>
                  </Button>
                </Link>
                <Link to="/calendar">
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                    <Calendar className="h-6 w-6" />
                    <span>Schedule Session</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>);

}