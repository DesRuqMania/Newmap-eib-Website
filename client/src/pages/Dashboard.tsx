import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ChevronLeft, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

/**
 * Dashboard Page - Project Overview and Metrics
 * Design: Institutional Authority with Green Sustainability Focus
 * 
 * Features:
 * - Real-time project metrics and progress tracking
 * - Site status overview
 * - Team performance indicators
 * - Quick action buttons for reporting
 */

export default function Dashboard() {
  const [, navigate] = useLocation();
  const [selectedSite, setSelectedSite] = useState<string | null>(null);

  const sites = [
    {
      id: "site-001",
      name: "Gully Rehabilitation - Keffi",
      progress: 72,
      status: "on-track",
      completion: "45/60 tasks",
      team: 8,
      lastUpdate: "2 hours ago",
    },
    {
      id: "site-002",
      name: "Soil Conservation - Lafia",
      progress: 58,
      status: "on-track",
      completion: "35/60 tasks",
      team: 6,
      lastUpdate: "4 hours ago",
    },
    {
      id: "site-003",
      name: "Terracing Project - Nasarawa",
      progress: 85,
      status: "on-track",
      completion: "51/60 tasks",
      team: 10,
      lastUpdate: "1 hour ago",
    },
    {
      id: "site-004",
      name: "Water Management - Akwanga",
      progress: 42,
      status: "at-risk",
      completion: "25/60 tasks",
      team: 5,
      lastUpdate: "6 hours ago",
    },
    {
      id: "site-005",
      name: "Vegetation Recovery - Obi",
      progress: 68,
      status: "on-track",
      completion: "41/60 tasks",
      team: 7,
      lastUpdate: "3 hours ago",
    },
    {
      id: "site-006",
      name: "Slope Stabilization - Wamba",
      progress: 55,
      status: "on-track",
      completion: "33/60 tasks",
      team: 6,
      lastUpdate: "5 hours ago",
    },
  ];

  const overallMetrics = {
    totalSites: 12,
    activeTeams: 48,
    overallProgress: 64,
    onTrack: 10,
    atRisk: 2,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-green-50 border-green-200";
      case "at-risk":
        return "bg-yellow-50 border-yellow-200";
      case "behind":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "on-track":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "at-risk":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case "behind":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
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
              <h1 className="font-bold text-lg text-primary">Project Dashboard</h1>
              <p className="text-xs text-muted-foreground">Real-time project monitoring</p>
            </div>
          </div>
          <Button
            onClick={() => navigate("/reports")}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            + New Report
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Overall Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Overall Progress</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <Card className="p-6 border-0 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Total Sites</p>
              <p className="text-4xl font-bold text-primary">{overallMetrics.totalSites}</p>
            </Card>
            <Card className="p-6 border-0 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Active Teams</p>
              <p className="text-4xl font-bold text-primary">{overallMetrics.activeTeams}</p>
            </Card>
            <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-primary/5 to-accent/5">
              <p className="text-sm text-muted-foreground mb-2">Overall Progress</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-bold text-primary">{overallMetrics.overallProgress}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${overallMetrics.overallProgress}%` }}
                ></div>
              </div>
            </Card>
            <Card className="p-6 border-0 shadow-sm border-l-4 border-green-500">
              <p className="text-sm text-muted-foreground mb-2">On Track</p>
              <p className="text-4xl font-bold text-green-600">{overallMetrics.onTrack}</p>
            </Card>
            <Card className="p-6 border-0 shadow-sm border-l-4 border-yellow-500">
              <p className="text-sm text-muted-foreground mb-2">At Risk</p>
              <p className="text-4xl font-bold text-yellow-600">{overallMetrics.atRisk}</p>
            </Card>
          </div>
        </section>

        {/* Sites Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Active Sites</h2>
            <p className="text-sm text-muted-foreground">Showing {sites.length} sites</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sites.map((site) => (
              <Card
                key={site.id}
                className={`p-6 border-2 cursor-pointer hover:shadow-lg transition ${getStatusColor(site.status)}`}
                onClick={() => setSelectedSite(site.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-foreground flex-1">{site.name}</h3>
                  {getStatusIcon(site.status)}
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-semibold text-primary">{site.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${site.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Tasks</p>
                    <p className="font-semibold text-foreground">{site.completion}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Team Size</p>
                    <p className="font-semibold text-foreground">{site.team} members</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs text-muted-foreground">Updated {site.lastUpdate}</span>
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Button
              onClick={() => navigate("/reports")}
              className="h-auto py-6 flex flex-col items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <span className="text-2xl">📋</span>
              <span>Submit Report</span>
            </Button>
            <Button
              className="h-auto py-6 flex flex-col items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <span className="text-2xl">👥</span>
              <span>Team Status</span>
            </Button>
            <Button
              onClick={() => navigate("/team")}
              className="h-auto py-6 flex flex-col items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <span className="text-2xl">🤝</span>
              <span>Collaboration</span>
            </Button>
            <Button
              className="h-auto py-6 flex flex-col items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <span className="text-2xl">📊</span>
              <span>Analytics</span>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
