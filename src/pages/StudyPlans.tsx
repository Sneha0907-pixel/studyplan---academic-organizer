import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Calendar1 as Calendar, Clock, Target, Plus, Menu, CreditCard as Edit, Trash2, Play, Pause } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

export default function StudyPlans() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newPlan, setNewPlan] = useState({
    title: '',
    description: '',
    subject: '',
    duration: '',
    difficulty: 'medium'
  });

  const studyPlans = [
  {
    id: 1,
    title: "Final Exams Preparation",
    description: "Comprehensive review for all subjects",
    subject: "Multiple Subjects",
    progress: 65,
    totalHours: 40,
    completedHours: 26,
    dueDate: "Jan 15, 2024",
    status: "active",
    difficulty: "high",
    sessions: 12
  },
  {
    id: 2,
    title: "Calculus Mastery",
    description: "Deep dive into calculus concepts",
    subject: "Mathematics",
    progress: 90,
    totalHours: 20,
    completedHours: 18,
    dueDate: "Dec 30, 2023",
    status: "active",
    difficulty: "high",
    sessions: 8
  },
  {
    id: 3,
    title: "History Essay Research",
    description: "Research and outline for major essay",
    subject: "History",
    progress: 40,
    totalHours: 15,
    completedHours: 6,
    dueDate: "Jan 10, 2024",
    status: "paused",
    difficulty: "medium",
    sessions: 6
  },
  {
    id: 4,
    title: "Chemistry Lab Prep",
    description: "Preparation for upcoming lab sessions",
    subject: "Chemistry",
    progress: 100,
    totalHours: 12,
    completedHours: 12,
    dueDate: "Dec 20, 2023",
    status: "completed",
    difficulty: "medium",
    sessions: 4
  }];


  const handleCreatePlan = () => {
    // Handle plan creation logic here
    console.log('Creating plan:', newPlan);
    setIsCreateDialogOpen(false);
    setNewPlan({
      title: '',
      description: '',
      subject: '',
      duration: '',
      difficulty: 'medium'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':return 'default';
      case 'paused':return 'secondary';
      case 'completed':return 'outline';
      default:return 'default';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':return 'outline';
      case 'medium':return 'default';
      case 'hard':return 'destructive';
      default:return 'default';
    }
  };

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
                <h1 className="text-2xl font-heading font-bold text-foreground">Study Plans</h1>
                <p className="text-muted-foreground">Organize and track your learning journey</p>
              </div>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Study Plan</DialogTitle>
                  <DialogDescription>
                    Set up a structured plan to achieve your learning goals.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Plan Title</Label>
                    <Input
                      id="title"
                      value={newPlan.title}
                      onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
                      placeholder="e.g., Final Exam Preparation" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newPlan.description}
                      onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
                      placeholder="Brief description of your study plan" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={newPlan.subject}
                      onChange={(e) => setNewPlan({ ...newPlan, subject: e.target.value })}
                      placeholder="e.g., Mathematics, History" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="duration">Duration (hours)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={newPlan.duration}
                      onChange={(e) => setNewPlan({ ...newPlan, duration: e.target.value })}
                      placeholder="Total study hours" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="difficulty">Difficulty Level</Label>
                    <Select value={newPlan.difficulty} onValueChange={(value) => setNewPlan({ ...newPlan, difficulty: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleCreatePlan}>Create Plan</Button>
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
                <CardTitle className="text-sm font-medium">Total Plans</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{studyPlans.length}</div>
                <p className="text-xs text-muted-foreground">Active learning paths</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {studyPlans.filter((plan) => plan.status === 'active').length}
                </div>
                <p className="text-xs text-muted-foreground">Currently in progress</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {studyPlans.filter((plan) => plan.status === 'completed').length}
                </div>
                <p className="text-xs text-muted-foreground">Successfully finished</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {studyPlans.reduce((total, plan) => total + plan.completedHours, 0)}
                </div>
                <p className="text-xs text-muted-foreground">Hours studied</p>
              </CardContent>
            </Card>
          </div>

          {/* Study Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyPlans.map((plan) =>
            <Card key={plan.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{plan.title}</CardTitle>
                      <CardDescription className="mt-1">{plan.description}</CardDescription>
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
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant={getStatusColor(plan.status)}>
                      {plan.status}
                    </Badge>
                    <Badge variant={getDifficultyColor(plan.difficulty)}>
                      {plan.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{plan.progress}%</span>
                    </div>
                    <Progress value={plan.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Subject</span>
                      <p className="font-medium">{plan.subject}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Due Date</span>
                      <p className="font-medium">{plan.dueDate}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Hours</span>
                      <p className="font-medium">{plan.completedHours}/{plan.totalHours}h</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Sessions</span>
                      <p className="font-medium">{plan.sessions}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    {plan.status === 'active' ?
                  <Button variant="outline" size="sm" className="flex-1">
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </Button> :
                  plan.status === 'paused' ?
                  <Button size="sm" className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Resume
                      </Button> :
                  null}
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>);

}