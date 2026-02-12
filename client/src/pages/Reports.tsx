import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ChevronLeft, Send, Plus, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";

/**
 * Reports Page - Engineer Work Status Reporting
 * Design: Institutional Authority with Green Sustainability Focus
 * 
 * Features:
 * - Submit new work status reports
 * - Track work completion levels
 * - Document site conditions
 * - View report history
 */

interface Report {
  id: string;
  site: string;
  date: string;
  workCompleted: string;
  progressPercent: number;
  workRemaining: string;
  status: "submitted" | "approved" | "pending";
  engineer: string;
}

export default function Reports() {
  const [, navigate] = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [reports, setReports] = useState<Report[]>([
    {
      id: "rep-001",
      site: "Gully Rehabilitation - Keffi",
      date: "2026-02-12",
      workCompleted: "Completed terracing on 2.5 hectares, installed water management structures",
      progressPercent: 72,
      workRemaining: "Vegetation planting and monitoring (4 weeks)",
      status: "approved",
      engineer: "Engr. Sunday Adaogoshi Eya",
    },
    {
      id: "rep-002",
      site: "Soil Conservation - Lafia",
      date: "2026-02-11",
      workCompleted: "Soil stabilization on 1.8 hectares, completed survey",
      progressPercent: 58,
      workRemaining: "Slope reinforcement and drainage system installation (6 weeks)",
      status: "approved",
      engineer: "Engr. Sunday Adaogoshi Eya",
    },
    {
      id: "rep-003",
      site: "Terracing Project - Nasarawa",
      date: "2026-02-10",
      workCompleted: "Completed 85% of terracing work, installed retention walls",
      progressPercent: 85,
      workRemaining: "Final surface preparation and vegetation (2 weeks)",
      status: "approved",
      engineer: "Engr. Sunday Adaogoshi Eya",
    },
  ]);

  const [formData, setFormData] = useState({
    site: "",
    workCompleted: "",
    progressPercent: 50,
    workRemaining: "",
  });

  const handleSubmitReport = () => {
    if (!formData.site || !formData.workCompleted || !formData.workRemaining) {
      alert("Please fill in all fields");
      return;
    }

    const newReport: Report = {
      id: `rep-${Date.now()}`,
      site: formData.site,
      date: new Date().toISOString().split("T")[0],
      workCompleted: formData.workCompleted,
      progressPercent: formData.progressPercent,
      workRemaining: formData.workRemaining,
      status: "pending",
      engineer: "Current User",
    };

    setReports([newReport, ...reports]);
    setFormData({ site: "", workCompleted: "", progressPercent: 50, workRemaining: "" });
    setShowForm(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border border-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      case "submitted":
        return "bg-blue-100 text-blue-800 border border-blue-300";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300";
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
              <h1 className="font-bold text-lg text-primary">Work Status Reports</h1>
              <p className="text-xs text-muted-foreground">Engineer reporting interface</p>
            </div>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary/90 text-white flex gap-2"
          >
            <Plus className="w-4 h-4" />
            New Report
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Report Form */}
        {showForm && (
          <Card className="p-8 mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold text-foreground mb-2">Submit Work Status Report</h2>
            <p className="text-sm text-muted-foreground mb-6">Project Engineer: Engr. Sunday Adaogoshi Eya</p>
            <div className="space-y-6">
              {/* Site Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Project Site
                </label>
                <select
                  value={formData.site}
                  onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a site...</option>
                  <option value="Gully Rehabilitation - Keffi">Gully Rehabilitation - Keffi</option>
                  <option value="Soil Conservation - Lafia">Soil Conservation - Lafia</option>
                  <option value="Terracing Project - Nasarawa">Terracing Project - Nasarawa</option>
                  <option value="Water Management - Akwanga">Water Management - Akwanga</option>
                  <option value="Vegetation Recovery - Obi">Vegetation Recovery - Obi</option>
                  <option value="Slope Stabilization - Wamba">Slope Stabilization - Wamba</option>
                </select>
              </div>

              {/* Work Completed */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Work Completed on Site
                </label>
                <textarea
                  value={formData.workCompleted}
                  onChange={(e) => setFormData({ ...formData, workCompleted: e.target.value })}
                  placeholder="Describe the work completed today/this period (e.g., 'Completed terracing on 2.5 hectares, installed water management structures')"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                />
              </div>

              {/* Progress Percentage */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Overall Progress: {formData.progressPercent}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.progressPercent}
                  onChange={(e) =>
                    setFormData({ ...formData, progressPercent: parseInt(e.target.value) })
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Work Remaining */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Work Remaining on Site
                </label>
                <textarea
                  value={formData.workRemaining}
                  onChange={(e) => setFormData({ ...formData, workRemaining: e.target.value })}
                  placeholder="Describe remaining work and estimated timeline (e.g., 'Vegetation planting and monitoring (4 weeks)')"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleSubmitReport}
                  className="bg-primary hover:bg-primary/90 text-white flex gap-2 flex-1"
                >
                  <Send className="w-4 h-4" />
                  Submit Report
                </Button>
                <Button
                  onClick={() => setShowForm(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Reports List */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recent Reports</h2>
            <p className="text-sm text-muted-foreground">{reports.length} total reports</p>
          </div>

          <div className="space-y-4">
            {reports.map((report) => (
              <Card key={report.id} className="p-6 border-2 border-border hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{report.site}</h3>
                    <p className="text-sm text-muted-foreground">
                      {report.date} • Reported by {report.engineer}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(report.status)}`}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-foreground">Overall Progress</span>
                    <span className="text-sm font-bold text-primary">{report.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${report.progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Work Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-green-600">✓</span> Work Completed
                    </h4>
                    <p className="text-sm text-foreground">{report.workCompleted}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-yellow-600">⏳</span> Work Remaining
                    </h4>
                    <p className="text-sm text-foreground">{report.workRemaining}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex gap-2">
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-2 text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                  <Button variant="outline" size="sm" className="ml-auto">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {reports.length === 0 && (
            <Card className="p-12 text-center border-2 border-dashed border-border">
              <p className="text-lg text-muted-foreground mb-4">No reports submitted yet</p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Submit Your First Report
              </Button>
            </Card>
          )}
        </section>

        {/* Report Guidelines */}
        <section className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Reporting Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">📋</span> Daily Updates
              </h3>
              <p className="text-sm text-muted-foreground">
                Submit reports at the end of each working day to keep the team informed of progress and any challenges encountered.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span> Accurate Metrics
              </h3>
              <p className="text-sm text-muted-foreground">
                Provide accurate progress percentages and detailed descriptions of completed and remaining work for better project tracking.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">🔍</span> Site Documentation
              </h3>
              <p className="text-sm text-muted-foreground">
                Include observations about site conditions, safety issues, and any adjustments needed for upcoming work phases.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
