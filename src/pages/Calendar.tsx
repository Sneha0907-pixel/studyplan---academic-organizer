import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar1 as CalendarIcon, Clock, Plus, Menu, ChevronLeft, ChevronRight, BookOpen, Target, Circle as AlertCircle } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

export default function Calendar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    subject: '',
    date: '',
    time: '',
    duration: '60',
    type: 'study'
  });

  const events = [
  {
    id: 1,
    title: "Math Study Session",
    description: "Review calculus concepts",
    subject: "Mathematics",
    date: "2023-12-25",
    time: "10:00",
    duration: 120,
    type: "study",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "History Assignment Due",
    description: "Submit World War II essay",
    subject: "History",
    date: "2023-12-26",
    time: "23:59",
    duration: 0,
    type: "deadline",
    color: "bg-red-500"
  },
  {
    id: 3,
    title: "Chemistry Lab",
    description: "Acid-base titration experiment",
    subject: "Chemistry",
    date: "2023-12-27",
    time: "14:00",
    duration: 180,
    type: "class",
    color: "bg-green-500"
  },
  {
    id: 4,
    title: "Physics Review",
    description: "Momentum and energy problems",
    subject: "Physics",
    date: "2023-12-28",
    time: "16:00",
    duration: 90,
    type: "study",
    color: "bg-purple-500"
  },
  {
    id: 5,
    title: "English Literature Exam",
    description: "Final exam on Shakespeare",
    subject: "English",
    date: "2023-12-29",
    time: "09:00",
    duration: 120,
    type: "exam",
    color: "bg-orange-500"
  }];


  const handleCreateEvent = () => {
    console.log('Creating event:', newEvent);
    setIsCreateDialogOpen(false);
    setNewEvent({
      title: '',
      description: '',
      subject: '',
      date: '',
      time: '',
      duration: '60',
      type: 'study'
    });
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDate = (day: number) => {
    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter((event) => event.date === dateString);
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'study':return <BookOpen className="h-4 w-4" />;
      case 'class':return <Target className="h-4 w-4" />;
      case 'exam':return <AlertCircle className="h-4 w-4" />;
      case 'deadline':return <Clock className="h-4 w-4" />;
      default:return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'study':return 'default';
      case 'class':return 'secondary';
      case 'exam':return 'destructive';
      case 'deadline':return 'outline';
      default:return 'default';
    }
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get today's events
  const today = new Date();
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const todayEvents = events.filter((event) => event.date === todayString);

  // Get upcoming events (next 7 days)
  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const weekFromNow = new Date();
    weekFromNow.setDate(weekFromNow.getDate() + 7);
    return eventDate >= today && eventDate <= weekFromNow;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

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
                <h1 className="text-2xl font-heading font-bold text-foreground">Calendar</h1>
                <p className="text-muted-foreground">Schedule and track your study sessions</p>
              </div>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Event</DialogTitle>
                  <DialogDescription>
                    Schedule a study session, class, or deadline.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input
                      id="title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      placeholder="e.g., Math Study Session" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                      placeholder="Event details" />

                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={newEvent.subject}
                        onChange={(e) => setNewEvent({ ...newEvent, subject: e.target.value })}
                        placeholder="e.g., Mathematics" />

                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Type</Label>
                      <Select value={newEvent.type} onValueChange={(value) => setNewEvent({ ...newEvent, type: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="study">Study Session</SelectItem>
                          <SelectItem value="class">Class</SelectItem>
                          <SelectItem value="exam">Exam</SelectItem>
                          <SelectItem value="deadline">Deadline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />

                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} />

                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="duration">Duration (min)</Label>
                      <Input
                        id="duration"
                        type="number"
                        value={newEvent.duration}
                        onChange={(e) => setNewEvent({ ...newEvent, duration: e.target.value })}
                        placeholder="60" />

                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleCreateEvent}>Create Event</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {dayNames.map((day) =>
                    <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                        {day}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells for days before the first day of the month */}
                    {Array.from({ length: firstDay }, (_, i) =>
                    <div key={`empty-${i}`} className="p-2 h-24"></div>
                    )}
                    
                    {/* Days of the month */}
                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const day = i + 1;
                      const dayEvents = getEventsForDate(day);
                      const isToday = today.getDate() === day &&
                      today.getMonth() === currentDate.getMonth() &&
                      today.getFullYear() === currentDate.getFullYear();

                      return (
                        <div key={day} className={`p-2 h-24 border border-border rounded-lg ${isToday ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'} transition-colors`}>
                          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                            {day}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event) =>
                            <div key={event.id} className={`text-xs p-1 rounded ${event.color} text-white truncate`}>
                                {event.title}
                              </div>
                            )}
                            {dayEvents.length > 2 &&
                            <div className="text-xs text-muted-foreground">
                                +{dayEvents.length - 2} more
                              </div>
                            }
                          </div>
                        </div>);

                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Today's Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Today's Events</CardTitle>
                  <CardDescription>
                    {todayEvents.length === 0 ? 'No events scheduled' : `${todayEvents.length} event(s)`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {todayEvents.length === 0 ?
                  <p className="text-muted-foreground text-sm">No events scheduled for today.</p> :

                  todayEvents.map((event) =>
                  <div key={event.id} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          {getTypeIcon(event.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.subject}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={getTypeColor(event.type)} className="text-xs">
                              {event.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {formatTime(event.time)}
                            </span>
                          </div>
                        </div>
                      </div>
                  )
                  }
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  <CardDescription>Next 7 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingEvents.length === 0 ?
                  <p className="text-muted-foreground text-sm">No upcoming events.</p> :

                  upcomingEvents.slice(0, 5).map((event) =>
                  <div key={event.id} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          {getTypeIcon(event.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.subject}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={getTypeColor(event.type)} className="text-xs">
                              {event.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(event.date).toLocaleDateString()} at {formatTime(event.time)}
                            </span>
                          </div>
                        </div>
                      </div>
                  )
                  }
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">This Week</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Study Sessions</span>
                    <span className="font-medium">
                      {events.filter((e) => e.type === 'study').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Classes</span>
                    <span className="font-medium">
                      {events.filter((e) => e.type === 'class').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Exams</span>
                    <span className="font-medium">
                      {events.filter((e) => e.type === 'exam').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Deadlines</span>
                    <span className="font-medium">
                      {events.filter((e) => e.type === 'deadline').length}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>);

}