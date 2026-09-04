import { useState } from "react";
import { Search, MapPin, Briefcase, DollarSign, Heart, Share2, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  logo: string;
  image: string;
  description: string;
  tags: string[];
  saved: boolean;
}

const SAMPLE_JOBS: Job[] = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "TechVision Inc",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    description: "We're looking for an experienced Product Designer to lead our design system and shape the future of our platform.",
    tags: ["Design", "UI/UX", "Figma", "Remote-friendly"],
    saved: false,
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "CloudScale Systems",
    location: "New York, NY",
    salary: "$130k - $160k",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    description: "Join our team to build scalable cloud infrastructure. Experience with React, Node.js, and AWS required.",
    tags: ["React", "Node.js", "AWS", "Full-time"],
    saved: false,
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "AI Innovations",
    location: "Boston, MA",
    salary: "$110k - $140k",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    description: "Help us unlock insights from complex datasets. Python, ML, and SQL expertise needed.",
    tags: ["Python", "Machine Learning", "SQL", "Analytics"],
    saved: false,
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "GrowthLabs",
    location: "Austin, TX",
    salary: "$90k - $120k",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    description: "Lead marketing initiatives for a fast-growing SaaS company. Strategy and execution skills required.",
    tags: ["Marketing", "Strategy", "Analytics", "Leadership"],
    saved: false,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "InfraCloud",
    location: "Remote",
    salary: "$115k - $145k",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    description: "Build and maintain our cloud infrastructure. Docker, Kubernetes, and CI/CD pipeline experience required.",
    tags: ["DevOps", "Kubernetes", "Docker", "Remote"],
    saved: false,
  },
  {
    id: 6,
    title: "UX Researcher",
    company: "UserFirst Design",
    location: "Seattle, WA",
    salary: "$100k - $130k",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    description: "Conduct user research and usability testing. Shape product decisions based on user insights.",
    tags: ["Research", "UX", "Psychology", "Testing"],
    saved: false,
  },
];

export default function Index() {
  const [jobs, setJobs] = useState<Job[]>(SAMPLE_JOBS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSave = (id: number) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, saved: !job.saved } : job)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">JobHub</h1>
            </div>
            <Button variant="outline">Sign In</Button>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-300"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-1">
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {filteredJobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedJob?.id === job.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <img src={job.logo} alt={job.company} className="w-10 h-10 rounded object-cover" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{job.title}</h3>
                      <p className="text-xs text-gray-600 truncate">{job.company}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Job Detail */}
          {selectedJob && (
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Hero Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={selectedJob.image} alt={selectedJob.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <img src={selectedJob.logo} alt={selectedJob.company} className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                        <p className="text-lg text-gray-600 mb-3">{selectedJob.company}</p>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {selectedJob.location}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <DollarSign className="w-4 h-4" />
                            {selectedJob.salary}
                          </div>
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {selectedJob.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleSave(selectedJob.id)}
                        className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 ${selectedJob.saved ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                        />
                      </button>
                      <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedJob.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About this role</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{selectedJob.description}</p>
                    <p className="text-gray-700 leading-relaxed">
                      This is a great opportunity to grow your career with a dynamic team. We offer competitive benefits, flexible work arrangements, and a collaborative culture.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-gray-600 text-center">© 2024 JobHub. Connecting talent with opportunity.</p>
        </div>
      </footer>
    </div>
  );
}
