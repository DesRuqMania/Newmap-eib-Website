import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Users, TrendingUp, Shield, MapPin } from "lucide-react";

/**
 * Home Page - NEWMAP-EIB Nasarawa State
 * Design: Institutional Authority with Green Sustainability Focus
 * 
 * Features:
 * - Hero section with erosion control imagery
 * - Role-based entry points
 * - Project overview and key metrics
 * - Team collaboration highlights
 */

export default function Home() {
  const [, navigate] = useLocation();

  const roles = [
    {
      title: "Project Engineer",
      description: "Engr. Sunday Adaogoshi Eya - Report work progress, document site conditions, and track completion status",
      icon: "📋",
      color: "bg-green-50 border-green-200",
      action: () => navigate("/reports"),
    },
    {
      title: "Site Supervisor",
      description: "Oversee daily activities, manage team coordination, and approve reports",
      icon: "👷",
      color: "bg-blue-50 border-blue-200",
      action: () => navigate("/dashboard"),
    },
    {
      title: "Project Coordinator",
      description: "Monitor overall progress, analyze metrics, and manage project coordination",
      icon: "📊",
      color: "bg-teal-50 border-teal-200",
      action: () => navigate("/dashboard"),
    },
    {
      title: "Team Lead",
      description: "Coordinate team efforts, facilitate collaboration, and ensure quality standards",
      icon: "👥",
      color: "bg-emerald-50 border-emerald-200",
      action: () => navigate("/team"),
    },
  ];

  const metrics = [
    { label: "Active Sites", value: "12", icon: MapPin },
    { label: "Team Members", value: "48", icon: Users },
    { label: "Progress Rate", value: "72%", icon: TrendingUp },
    { label: "Safety Record", value: "100%", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
            <div>
              <h1 className="font-bold text-lg text-primary">NEWMAP-EIB</h1>
              <p className="text-xs text-muted-foreground">Nasarawa State</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </a>
            <a href="#roles" className="text-sm font-medium text-foreground hover:text-primary transition">
              Roles
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Diagonal Cut */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Erosion Control Excellence
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Coordinating comprehensive soil conservation and gully rehabilitation efforts across Nasarawa State through professional team collaboration and data-driven project management.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => navigate("/dashboard")}
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                >
                  Access Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/kTbx5mSUJVeVREzi07yNth/sandbox/3dwHv9QrIg4adD7RDLFVag-img-1_1770897111000_na1fn_aGVyby1lcm9zaW9uLWNvbnRyb2w.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1RieDVtU1VKVmVWUkV6aTA3eU50aC9zYW5kYm94LzNkd0h2OVFySWc0YWREN1JETEZWYWctaW1nLTFfMTc3MDg5NzExMTAwMF9uYTFmbl9hR1Z5YnkxbGNtOXphVzl1TFdOdmJuUnliMncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VyKa-D5VFR0G-c6FOJ3u-ut8jX7GMTvPrRXi1CfWxHngN~15sDmo0YLNXgtkwP09wtCERvZcqHiqAscBt84CRAzn5WMWjgXoqR8RUP4hnlGhLISaNnF0vX-W6Y9IE91ZfXNTFg7ZTUSlw4BK5AJb-9k11yedHcYSylzHyJFH229jbCsLRKGTg~j5CutpI-VlVJmozsMt3eR2JofjoEpOvf4h2xO96WUzAAWsI4tQZtPeVt5NFjwC54vrPz5l1hJZ4CxkfBDklYYsrk9pLwbDlQN9WTW~psViGsxpvUTVOK744QbB0Lh2IMoIT4kj4JlI7Lhc2BwPt77s3JGIwe4XDw__"
                alt="Erosion control terraces in Nasarawa State"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Diagonal SVG Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </section>

      {/* Key Metrics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <Card key={idx} className="p-6 text-center border-0 shadow-sm hover:shadow-md transition">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">Team Collaboration</h3>
            <p className="text-lg text-muted-foreground">
              Our platform enables seamless coordination between engineers, supervisors, and managers to ensure project success through transparent communication and real-time progress tracking.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/kTbx5mSUJVeVREzi07yNth/sandbox/3dwHv9QrIg4adD7RDLFVag-img-2_1770897110000_na1fn_dGVhbS1jb2xsYWJvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1RieDVtU1VKVmVWUkV6aTA3eU50aC9zYW5kYm94LzNkd0h2OVFySWc0YWREN1JETEZWYWctaW1nLTJfMTc3MDg5NzExMDAwMF9uYTFmbl9kR1ZoYlMxamIyeHNZV0p2Y21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Z7u98bQmwwTei41t-tbSBeuxq2UuDRFiFhVLO29T0le2PknCD3Ixl7vDkCuhEljUI0w5uSqEVQTaHMWQz8UvVTHmPBLQy6HX3P3b4w8N1Af87EgI5HubVPW2eQViRx3-hcl2aCIGDU~cynI-YDpPo1Uh4V9-TmOgJEEX7YGi4Pu7Di-W7nkLUJdGhgb0cJX-ohkcS9rdOIkjTy2XoU2m~9J2sQYSoBkkpBmTQXV~vG3xWvOU8kZc2qQeVaVzbqGiUkElvxorW~RL5OIvSP1~~6eZB6T83fQjmgUUKG7exOkhTm~evHHkU6ZA80BzgOKI~zOODc5i5mIq-79onxnj-g__"
              alt="Team collaboration on erosion control project"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-6">Unified Project Management</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Real-Time Site Tracking</h5>
                    <p className="text-sm text-muted-foreground">Monitor all erosion control sites with live progress updates</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Data-Driven Reporting</h5>
                    <p className="text-sm text-muted-foreground">Comprehensive analytics and progress metrics for decision-making</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Team Communication</h5>
                    <p className="text-sm text-muted-foreground">Seamless collaboration between engineers, supervisors, and managers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Access Section */}
      <section id="roles" className="bg-white py-20" style={{ marginTop: "-1px" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Role-Based Access</h3>
            <p className="text-lg text-muted-foreground">
              Each team member has customized access and tools tailored to their specific responsibilities
            </p>
          </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <Card
                key={idx}
                className={`p-6 border-2 hover:shadow-lg hover:border-primary transition ${role.color} ${role.title === "Project Engineer" ? "ring-2 ring-primary ring-offset-2" : ""}`}
                onClick={role.action}
              >
                <div className="text-4xl mb-4">{role.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{role.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{role.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    role.action();
                  }}
                >
                  Access
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Project Leadership</h3>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated leaders driving erosion control excellence in Nasarawa State
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Project Coordinator */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden shadow-xl h-80 flex items-center justify-center bg-gray-100">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/kTbx5mSUJVeVREzi07yNth/sandbox/zdJ2UOelsplJCoeELksj7T-img-2_1770897722000_na1fn_ZHItbW9oYW1tZWQtcG9ydHJhaXQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1RieDVtU1VKVmVWUkV6aTA3eU50aC9zYW5kYm94L3pkSjJVT2Vsc3BsSkNvZUVMa3NqN1QtaW1nLTJfMTc3MDg5NzcyMjAwMF9uYTFmbl9aSEl0Ylc5b1lXMXRaV1F0Y0c5eWRISmhhWFEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WXSEejeKL~FGusJ0kt3bFTBqPMGQyHOG18M17zcfWShR98bf~0P~dpw8Sz93ql6ktOhY3S0Snwk1dWSnBSUxiwnQyrYnFL-EYqaGXl0XtbI0mSBbHyyOL0effF9RIW1pykcXYXrQUhPK6ojrg0WONOk4bOCQePKb8U5Z~WY6h0pqEnB9CDfJYBXmV6zERAgcZJMtSyrhliaSSOqvDQF3exaR02b-x9m2JjzbK5pGtGOT7I4yrDq3r6NuVP0YGbnWHhrOmYyYOvTcfyHT4AcB4cbwweh~zD~B3kkOUrYZEhbuibcfi6qate3j2ANm8WxyXy2X5xNU75mvd-VE38RdnQ__"
                  alt="Dr. Mohammed Ismail P.hD"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">Dr. Mohammed Ismail, P.hD</h4>
              <p className="text-lg font-semibold text-foreground mb-4">Project Coordinator (Head of State)</p>
              <div className="bg-secondary/30 p-6 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground leading-relaxed">
                  Welcome to the NEWMAP-EIB Nasarawa State platform. As Project Coordinator, I am committed to driving sustainable erosion control initiatives that restore our land and improve community livelihoods. This platform represents our dedication to professional project management, transparent reporting, and collaborative excellence. Together, we are making a tangible difference in environmental restoration.
                </p>
              </div>
            </div>

            {/* Project Engineer */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden shadow-xl h-80 flex items-center justify-center bg-gray-100">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/kTbx5mSUJVeVREzi07yNth/sandbox/zdJ2UOelsplJCoeELksj7T-img-1_1770897722000_na1fn_ZW5nci1zdW5kYXktcG9ydHJhaXQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1RieDVtU1VKVmVWUkV6aTA3eU50aC9zYW5kYm94L3pkSjJVT2Vsc3BsSkNvZUVMa3NqN1QtaW1nLTFfMTc3MDg5NzcyMjAwMF9uYTFmbl9aVzVuY2kxemRXNWtZWGt0Y0c5eWRISmhhWFEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QmVFTvAHOWeaVnLYfy7QNg8zjaHmirx1-4XxcTcSTGKawdUG5pIgJH-9CzMRhKtrwLafGejRk-UbPH8eLXnYzzEiJC84NH8L-s5RXMF6S-8XDZw7GPBtwJ8rprCo7GcSZtR0nrac29pa2f8TZF1vqtqGLbfrDFHG6gBmDQUwK7NUkQgrcoxjFT8mSdJr7c~v6Qkyex6Vps8fDbAugHrhGRq-PJSQoEUZlLFsKRk5dKujs64wfdbTInSu4ve2T5YVj7b3fqHf4WH5zNPl1L4nZG02zoGXl4sXILwWNXDXtLXfRz7dYpg4NjrkKrNo9r0HiXgWVO-gU48UUGAj05n4zg__"
                  alt="Engr. Sunday Adaogoshi Eya"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">Engr. Sunday Adaogoshi Eya</h4>
              <p className="text-lg font-semibold text-foreground mb-4">Project Engineer</p>
              <div className="bg-secondary/30 p-6 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground leading-relaxed">
                  As the Project Engineer for NEWMAP-EIB, I oversee the technical implementation of all erosion control activities across Nasarawa State. My focus is on ensuring quality workmanship, adherence to engineering standards, and effective site management. Through this platform, we maintain transparent communication and real-time progress tracking to deliver sustainable environmental solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section id="about" className="bg-gradient-to-r from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/kTbx5mSUJVeVREzi07yNth/sandbox/3dwHv9QrIg4adD7RDLFVag-img-5_1770897112000_na1fn_ZW52aXJvbm1lbnRhbC1pbXBhY3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1RieDVtU1VKVmVWUkV6aTA3eU50aC9zYW5kYm94LzNkd0h2OVFySWc0YWREN1JETEZWYWctaW1nLTVfMTc3MDg5NzExMjAwMF9uYTFmbl9aVzUyYVhKdmJtMWxiblJoYkMxcGJYQmhZM1EucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GbFf9VLNowJwx9amVFuoOyq5EIUkifCIMtbaWPsF3NvTQdGNnUKteJM19~MgkRFLKnHdelQMkWPGqvaruZYgbspZJ4XK8qbglSpvDSUW8wydgYhfgMCbTvg4~8CkwJ23s~VDmdzOTvtqwtLiMbIqYN~2teT64mOnqNTQos9L3~Ukc0dH3Q~0NK-CkjDMYV-0G5guXsTQ-Rv3RIihUgtRYL7J0wdMq0ECsER9NHVhSruG3hXvl3EGPdZUvvhIENrThBlivtW~gDm5isspa4IJ-hojQCmcULILXI5CDeo95VxCMVB1uJP1twg2hNoJqVczhxFhV~krP1S2qJKKghouzQ__"
              alt="Before and after erosion control impact"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-6">Environmental Impact</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive erosion control initiatives have successfully rehabilitated degraded gullies and restored vegetation across Nasarawa State, preventing soil loss and promoting sustainable land management.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Stabilized over 500 hectares of eroded land</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Restored vegetation and improved water retention</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Enhanced community livelihoods and agricultural productivity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Promoted sustainable environmental practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">NEWMAP-EIB</h5>
              <p className="text-sm text-white/70">Nasarawa State Erosion Control Initiative</p>
              <p className="text-xs text-white/50 mt-2">Project Coordinator: Dr. Mohammed Ismail, P.hD</p>
              <p className="text-xs text-white/50">Project Engineer: Engr. Sunday Adaogoshi Eya</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition">Reports</a></li>
                <li><a href="#" className="hover:text-white transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <p className="text-sm text-white/70">Nasarawa State, Nigeria</p>
              <p className="text-sm text-white/70">info@newmap-eib.ng</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 NEWMAP-EIB Nasarawa State. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
