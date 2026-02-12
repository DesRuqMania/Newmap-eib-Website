import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ChevronLeft, Send, MessageSquare, Users, Award, TrendingUp } from "lucide-react";
import { useState } from "react";

/**
 * Team Collaboration Page - Team Coordination and Communication
 * Design: Institutional Authority with Green Sustainability Focus
 * 
 * Features:
 * - Team member profiles and roles
 * - Collaboration messaging
 * - Team performance metrics
 * - Milestone tracking
 */

interface TeamMember {
  id: string;
  name: string;
  role: string;
  site: string;
  status: "active" | "offline";
  avatar: string;
}

interface Message {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  type: "update" | "alert" | "milestone";
}

export default function TeamCollaboration() {
  const [, navigate] = useLocation();
  const [newMessage, setNewMessage] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: "tm-001",
      name: "Dr. Mohammed Ismail, P.hD",
      role: "Project Coordinator (Head)",
      site: "Overall State Coordination",
      status: "active",
      avatar: "MI",
    },
    {
      id: "tm-002",
      name: "Engr. Sunday Adaogoshi Eya",
      role: "Project Engineer",
      site: "All Sites",
      status: "active",
      avatar: "SA",
    },
    {
      id: "tm-003",
      name: "Supervisor James Okoro",
      role: "Site Supervisor",
      site: "Multiple Sites",
      status: "active",
      avatar: "JO",
    },
    {
      id: "tm-004",
      name: "Dr. Fatima Adeyemi",
      role: "Project Manager",
      site: "Overall Coordination",
      status: "active",
      avatar: "FA",
    },
    {
      id: "tm-005",
      name: "Eng. Peter Nwankwo",
      role: "Team Lead",
      site: "Water Management - Akwanga",
      status: "offline",
      avatar: "PN",
    },
    {
      id: "tm-006",
      name: "Eng. Chukwu Obi",
      role: "Site Coordinator",
      site: "Keffi and Lafia Sites",
      status: "active",
      avatar: "CO",
    },
  ];

  const messages: Message[] = [
    {
      id: "msg-001",
      author: "Dr. Mohammed Ismail, P.hD",
      content: "🎉 Excellent progress across all sites! Engr. Sunday technical oversight has been outstanding. Terracing work is ahead of schedule.",
      timestamp: "2 hours ago",
      type: "milestone",
    },
    {
      id: "msg-002",
      author: "Supervisor James Okoro",
      content: "⚠️ Weather alert: Heavy rains expected next week. Please secure all materials and equipment. Engr. Sunday, can you coordinate?",
      timestamp: "4 hours ago",
      type: "alert",
    },
    {
      id: "msg-003",
      author: "Engr. Sunday Adaogoshi Eya",
      content: "✓ Completed soil stabilization survey on 1.8 hectares at Lafia site. All measurements documented. Report submitted.",
      timestamp: "6 hours ago",
      type: "update",
    },
    {
      id: "msg-004",
      author: "Engr. Sunday Adaogoshi Eya",
      content: "Team coordination meeting scheduled for tomorrow at 10 AM. Please confirm attendance. Will discuss Phase 2 implementation.",
      timestamp: "8 hours ago",
      type: "update",
    },
    {
      id: "msg-005",
      author: "Dr. Mohammed Ismail, P.hD",
      content: "🏆 Nasarawa site reached 85% completion! Fantastic technical execution by Engr. Sunday and the entire team.",
      timestamp: "1 day ago",
      type: "milestone",
    },
  ];

  const teamStats = [
    { label: "Leadership", value: "2", icon: Users },
    { label: "Support Staff", value: "46", icon: TrendingUp },
    { label: "Completed Tasks", value: "234", icon: Award },
    { label: "Team Efficiency", value: "94%", icon: MessageSquare },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("");
      alert("Message sent to team!");
    }
  };

  const getMessageTypeColor = (type: string) => {
    switch (type) {
      case "milestone":
        return "border-l-4 border-green-500 bg-green-50";
      case "alert":
        return "border-l-4 border-yellow-500 bg-yellow-50";
      case "update":
        return "border-l-4 border-blue-500 bg-blue-50";
      default:
        return "border-l-4 border-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:bg-secondary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold text-lg text-primary">Team Collaboration</h1>
              <p className="text-xs text-muted-foreground">Unified communication platform</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Team Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Team Overview</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {teamStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="p-6 border-0 shadow-sm">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Team Members Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Team Members</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedTeam(member.id)}
                    className={`p-3 rounded-lg cursor-pointer transition ${
                      selectedTeam === member.id
                        ? "bg-primary text-white"
                        : "bg-secondary/50 hover:bg-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {member.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{member.name}</p>
                        <p className={`text-xs ${selectedTeam === member.id ? "text-white/70" : "text-muted-foreground"}`}>
                          {member.role}
                        </p>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          member.status === "active" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Messages and Communication */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-0 shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-bold text-foreground mb-4">Team Updates & Messages</h3>

              {/* Messages List */}
              <div className="space-y-4 flex-1 overflow-y-auto mb-6 max-h-96">
                {messages.map((message) => (
                  <div key={message.id} className={`p-4 rounded-lg ${getMessageTypeColor(message.type)}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{message.author}</h4>
                      <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                    </div>
                    <p className="text-sm text-foreground">{message.content}</p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t border-border pt-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Share an update with the team..."
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-primary hover:bg-primary/90 text-white px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Team Performance Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Team Performance Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Performance Chart */}
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="font-bold text-foreground mb-6">Site Performance</h3>
              <div className="space-y-4">
                {[
                  { site: "Keffi", progress: 72, team: 8 },
                  { site: "Lafia", progress: 58, team: 6 },
                  { site: "Nasarawa", progress: 85, team: 10 },
                  { site: "Akwanga", progress: 42, team: 5 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">{item.site}</span>
                      <span className="text-xs text-muted-foreground">{item.team} members</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Team Achievements */}
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="font-bold text-foreground mb-6">Recent Achievements</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Nasarawa Site Milestone</p>
                    <p className="text-xs text-muted-foreground">Reached 85% completion</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Safety Record</p>
                    <p className="text-xs text-muted-foreground">100 days without incidents</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Team Efficiency</p>
                    <p className="text-xs text-muted-foreground">94% task completion rate</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Environmental Impact</p>
                    <p className="text-xs text-muted-foreground">500+ hectares restored</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Collaboration Best Practices */}
        <section className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Collaboration Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span> Clear Communication
              </h3>
              <p className="text-sm text-muted-foreground">
                Share regular updates about progress, challenges, and solutions. Use clear language and provide context for decisions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span> Mutual Support
              </h3>
              <p className="text-sm text-muted-foreground">
                Help team members overcome obstacles. Share knowledge and best practices across all sites and roles.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span> Data Sharing
              </h3>
              <p className="text-sm text-muted-foreground">
                Maintain accurate records and share performance data. Use metrics to identify improvements and celebrate successes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
