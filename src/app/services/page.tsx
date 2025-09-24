import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover the professional services offered by Shadojus - web development, content creation, digital consulting, and more.',
};

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO-Friendly",
        "Mobile-First Approach",
        "Modern UI/UX"
      ],
      price: "Starting at $2,500",
      popular: true
    },
    {
      title: "Content Creation",
      description: "Engaging digital content including videos, graphics, and social media content to grow your online presence.",
      features: [
        "Video Production",
        "Social Media Content",
        "Brand Storytelling",
        "Content Strategy",
        "Visual Design"
      ],
      price: "Starting at $800",
      popular: false
    },
    {
      title: "Digital Consulting",
      description: "Strategic guidance to help your business thrive in the digital landscape with expert advice and planning.",
      features: [
        "Digital Strategy",
        "Tech Stack Planning",
        "Performance Audits",
        "Growth Planning",
        "Team Training"
      ],
      price: "Starting at $150/hour",
      popular: false
    },
    {
      title: "Brand Development",
      description: "Complete brand identity creation including logo design, brand guidelines, and digital presence strategy.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette",
        "Typography Selection",
        "Brand Strategy"
      ],
      price: "Starting at $1,200",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer a comprehensive range of digital services to help you achieve your goals. 
            From web development to content creation, let's build something amazing together.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                service.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    href="/contact"
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            My Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                We'll discuss your goals, requirements, and vision to understand exactly what you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                I'll create a detailed plan, timeline, and strategy tailored to your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Creation</h3>
              <p className="text-gray-600">
                I'll bring your vision to life with regular updates and opportunities for feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">
                Final delivery with ongoing support to ensure everything works perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary depending on scope and complexity. A simple website might take 2-3 weeks, 
                while more complex applications can take 2-3 months. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you offer ongoing support and maintenance?
              </h3>
              <p className="text-gray-600">
                Yes! I offer ongoing support packages to keep your website updated, secure, and performing optimally. 
                We can discuss the best support plan for your needs.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can you work with my existing team?
              </h3>
              <p className="text-gray-600">
                Absolutely! I collaborate effectively with existing teams and can adapt to your current workflows 
                and tools. Communication and teamwork are key to successful projects.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What's your payment structure?
              </h3>
              <p className="text-gray-600">
                I typically work with a 50% upfront payment and 50% upon completion for smaller projects. 
                For larger projects, we can arrange milestone-based payments. All details are outlined in the project contract.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help bring your vision to life. 
              Contact me today for a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}