import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Video, Briefcase, Award, Users, GraduationCap, ChartBar } from "lucide-react";
import { SplineSceneBasic } from "@/components/code-demo";
import { Header1 } from "@/components/ui/header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header1 />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <SplineSceneBasic />
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Unicorn Edutech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Professional Courses"
              description="Industry-relevant curriculum designed by experts"
            />
            <FeatureCard
              icon={<Video className="w-8 h-8" />}
              title="Live Sessions"
              description="Interactive live classes with industry experts"
            />
            <FeatureCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Job Profiles"
              description="Tailored career paths for your success"
            />
          </div>
        </section>

        {/* Programs Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              icon={<GraduationCap className="w-6 h-6" />}
              title="Full Stack Development"
              duration="6 months"
              price="₹29,999"
            />
            <ProgramCard
              icon={<ChartBar className="w-6 h-6" />}
              title="Data Science"
              duration="8 months"
              price="₹39,999"
            />
            <ProgramCard
              icon={<Users className="w-6 h-6" />}
              title="Digital Marketing"
              duration="4 months"
              price="₹19,999"
            />
          </div>
        </section>

        {/* Placement Support */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Job Simulation Program</h3>
                <p className="text-gray-300">
                  Get real-world experience through our partnership with Forage. Work on actual projects from top companies.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <Briefcase className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Career Services</h3>
                <p className="text-gray-300">
                  Resume building, mock interviews, and direct placement assistance with our 500+ hiring partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="bg-gray-800 border-none hover:bg-gray-700 transition-colors">
    <CardContent className="p-6 text-center">
      <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const ProgramCard = ({ icon, title, duration, price }: { icon: React.ReactNode; title: string; duration: string; price: string }) => (
  <Card className="bg-gray-800 border-none hover:bg-gray-700 transition-colors">
    <CardContent className="p-6">
      <div className="text-blue-500 mb-4 flex items-center gap-2">
        {icon}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-gray-300">Duration: {duration}</p>
        <p className="text-gray-300">Price: {price}</p>
      </div>
      <Button className="w-full">Enroll Now</Button>
    </CardContent>
  </Card>
);

export default Index;
