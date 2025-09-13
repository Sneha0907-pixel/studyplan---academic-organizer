import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Target, Clock, BookOpen, Award, Calendar1 as Calendar, Circle as BarChart3, Menu, Trophy, Star, Check as CheckCircle } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

export default function ProgressPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const overallStats = {
    studyStreak: 12,
    totalHours: 156,
    completedTasks: 48,
    averageScore: 87,
    weeklyGoal: 75,
    monthlyGoal: 85
  };

  const subjectProgress = [
  {
    subject: "Mathematics",
    progress: 85,
    hoursStudied: 42,
    tasksCompleted: 15,
    averageScore: 92,
    trend: "up",
    color: "bg-blue-500"
  },
  {
    subject: "History",
    progress: 78,
    hoursStudied: 28,
    tasksCompleted: 12,
    averageScore: 88,
    trend: "up",
    color: "bg-green-500"
  },
  {
    subject: "Chemistry",
    progress: 92,
    hoursStudied: 38,
    tasksCompleted: 10,
    averageScore: 94,
    trend: "up",
    color: "bg-purple-500"
  },
  {
    subject: "Physics",
    progress: 65,
    hoursStudied: 25,
    tasksCompleted: 8,
    averageScore: 79,
    trend: "down",
    color: "bg-orange-500"
  },
  {
    subject: "English",
    progress: 88,
    hoursStudied: 23,
    tasksCompleted: 3,
    averageScore: 91,
    trend: "up",
    color: "bg-red-500"
  }];


  const weeklyData = [
  { day: "Mon", hours: 3.5, tasks: 4 },
  { day: "Tue", hours: 4.2, tasks: 6 },
  { day: "Wed", hours: 2.8, tasks: 3 },
  { day: "Thu", hours: 5.1, tasks: 7 },
  { day: "Fri", hours: 3.9, tasks: 5 },
  { day: "Sat", hours: 6.2, tasks: 8 },
  { day: "Sun", hours: 4.5, tasks: 5 }];


  const achievements = [
  {
    id: 1,
    title: "Study Streak Master",
    description: "Maintained a 10-day study streak",
    icon: <Trophy className="h-6 w-6" />,
    earned: true,
    date: "Dec 20, 2023"
  },
  {
    id: 2,
    title: "Task Crusher",
    description: "Completed 50 tasks",
    icon: <CheckCircle className="h-6 w-6" />,
    earned: false,
    progress: 96
  },
  {
    id: 3,
    title: "Math Wizard",
    description: "Scored 90+ on 5 math assignments",
    icon: <Star className="h-6 w-6" />,
    earned: true,
    date: "Dec 18, 2023"
  },
  {
    id: 4,
    title: "Time Master",
    description: "Studied for 100+ hours",
    icon: <Clock className="h-6 w-6" />,
    earned: true,
    date: "Dec 15, 2023"
  },
  {
    id: 5,
    title: "Perfect Week",
    description: "Complete all weekly goals",
    icon: <Award className="h-6 w-6" />,
    earned: false,
    progress: 75
  }];


  const goals = [
  {
    id: 1,
    title: "Complete Final Exam Prep",
    description: "Finish all study plans before January 15",
    progress: 65,
    dueDate: "Jan 15, 2024",
    priority: "high"
  },
  {
    id: 2,
    title: "Improve Physics Grade",
    description: "Achieve 85+ average in Physics",
    progress: 40,
    dueDate: "Jan 30, 2024",
    priority: "medium"
  },
  {
    id: 3,
    title: "Study Consistency",
    description: "Study at least 3 hours daily for 30 days",
    progress: 80,
    dueDate: "Dec 31, 2023",
    priority: "high"
  }];


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
                <h1 className="text-2xl font-heading font-bold text-foreground">Progress</h1>
                <p className="text-muted-foreground">Track your academic achievements and growth</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.studyStreak} days</div>
                <p className="text-xs text-muted-foreground">Keep it going!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.totalHours}h</div>
                <p className="text-xs text-muted-foreground">Time invested in learning</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.completedTasks}</div>
                <p className="text-xs text-muted-foreground">Assignments finished</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.averageScore}%</div>
                <p className="text-xs text-muted-foreground">Across all subjects</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Weekly Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Progress</CardTitle>
                    <CardDescription>Your study activity this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weeklyData.map((day, index) =>
                      <div key={day.day} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium w-8">{day.day}</span>
                            <div className="flex-1">
                              <Progress value={day.hours / 6 * 100} className="h-2" />
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {day.hours}h • {day.tasks} tasks
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Goals Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Current Goals</CardTitle>
                    <CardDescription>Track your academic objectives</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Weekly Goal</span>
                        <span className="font-medium">{overallStats.weeklyGoal}%</span>
                      </div>
                      <Progress value={overallStats.weeklyGoal} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Monthly Goal</span>
                        <span className="font-medium">{overallStats.monthlyGoal}%</span>
                      </div>
                      <Progress value={overallStats.monthlyGoal} className="h-2" />
                    </div>
                    {goals.slice(0, 2).map((goal) =>
                    <div key={goal.id}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="truncate">{goal.title}</span>
                          <span className="font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="subjects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjectProgress.map((subject, index) =>
                <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{subject.subject}</CardTitle>
                        <div className="flex items-center space-x-1">
                          {subject.trend === 'up' ?
                        <TrendingUp className="h-4 w-4 text-green-500" /> :

                        <TrendingDown className="h-4 w-4 text-red-500" />
                        }
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Progress</span>
                          <span className="font-medium">{subject.progress}%</span>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Hours Studied</span>
                          <p className="font-medium">{subject.hoursStudied}h</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Tasks Done</span>
                          <p className="font-medium">{subject.tasksCompleted}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Average Score</span>
                        <Badge variant={subject.averageScore >= 90 ? 'default' : subject.averageScore >= 80 ? 'secondary' : 'outline'}>
                          {subject.averageScore}%
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) =>
                <Card key={achievement.id} className={`${achievement.earned ? 'border-primary' : 'border-border'}`}>
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription>{achievement.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {achievement.earned ?
                    <div className="flex items-center justify-between">
                          <Badge variant="default">Earned</Badge>
                          <span className="text-sm text-muted-foreground">{achievement.date}</span>
                        </div> :

                    <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span className="font-medium">{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                    }
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal) =>
                <Card key={goal.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{goal.title}</CardTitle>
                          <CardDescription>{goal.description}</CardDescription>
                        </div>
                        <Badge variant={goal.priority === 'high' ? 'destructive' : 'default'}>
                          {goal.priority}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span className="font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Due Date</span>
                        <span className="font-medium">{goal.dueDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>);

}