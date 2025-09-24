import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about Shadojus - developer, creator, and digital innovator passionate about building amazing web experiences.',
};

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer and digital creator who loves turning ideas into reality through code and creativity.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Welcome to my digital world! I'm Shadojus, a developer and content creator who's passionate about 
                building innovative solutions and sharing knowledge with the community. My journey in tech started 
                with curiosity and has evolved into a mission to create meaningful digital experiences.
              </p>
              <p className="mb-6">
                Over the years, I've honed my skills in modern web technologies, specializing in React, Next.js, 
                TypeScript, and full-stack development. But it's not just about the tech stack – I believe in 
                creating solutions that truly make a difference in people's lives.
              </p>
              <p>
                When I'm not coding, you'll find me creating content, exploring new technologies, or collaborating 
                with other creators and developers. I'm always excited to take on new challenges and help bring 
                innovative ideas to life.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Frontend Development</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Backend Development</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Node.js</li>
                  <li>• API Development</li>
                  <li>• Database Design</li>
                  <li>• Server Management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Content Creation</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Video Production</li>
                  <li>• Digital Marketing</li>
                  <li>• Brand Strategy</li>
                  <li>• Social Media</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Tools & Technologies</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Git & GitHub</li>
                  <li>• Vercel & Netlify</li>
                  <li>• Figma & Design Tools</li>
                  <li>• Analytics & SEO</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Consulting</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Digital Strategy</li>
                  <li>• Tech Architecture</li>
                  <li>• Performance Optimization</li>
                  <li>• Team Mentoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Creative Services</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• UI/UX Design</li>
                  <li>• Brand Identity</li>
                  <li>• Content Strategy</li>
                  <li>• Creative Direction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Always exploring new technologies and approaches to solve problems in creative ways.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  Committed to delivering exceptional work that exceeds expectations and stands the test of time.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  Believing in the power of collaboration and sharing knowledge to help others grow.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}