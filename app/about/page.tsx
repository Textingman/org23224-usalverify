import Link from 'next/link';
import { Shield, Lock, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
              <Shield className="w-4 h-4" />
              Fast · Secure · Trusted
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              Fast & Secure Identity Verification<br /><span style={{ color: '#1D4ED8' }}>Built for You</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              USAL Verify provides quick, reliable identity verification — protecting you and your accounts with every step. We built this because people deserve a simple, trustworthy way to confirm who they are.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Verification is essential in today's digital world. We built USAL Verify to make the process fast, secure, and stress-free — no complicated steps, no long waits.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Every verification we process is handled with the highest security standards. Your identity and personal data are protected at every step.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Join thousands of people who trust USAL Verify to confirm their identity quickly and confidently.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Shield className="w-5 h-5" style={{ color: '#1D4ED8' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Fast Verification</h3>
                  <p style={{ color: '#6B7280' }}>Complete your identity verification in minutes — no complicated steps, no long waits.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Lock className="w-5 h-5" style={{ color: '#1D4ED8' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Secure & Private</h3>
                  <p style={{ color: '#6B7280' }}>Your data is protected with industry-leading security. We never share your information without consent.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Clock className="w-5 h-5" style={{ color: '#1D4ED8' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Always Available</h3>
                  <p style={{ color: '#6B7280' }}>Verify your identity anytime, anywhere — our service is available 24/7 when you need it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
