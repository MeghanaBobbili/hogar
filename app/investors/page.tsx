import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investor Information | Hogar Controls',
  description: 'Information for investors including corporate insolvency resolution process, public notices, and financial documents.',
};

export default function InvestorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Investor</span>
              <span className="gradient-text">Information</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Corporate governance and financial information for investors and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Insolvency Resolution Process */}
      <section id="resolution-process" className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="mb-6">Resolution Process under the <span className="gradient-text">IBC, 2016</span></h2>
            <p className="text-light/80 mb-4">
              This section contains information related to the Corporate Insolvency Resolution Process (CIRP) 
              under the Insolvency and Bankruptcy Code, 2016. The documents below provide details about the 
              ongoing process and relevant orders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 id="nclt-order" className="text-xl font-semibold mb-4">NCLT Order dated 16.02.2024</h3>
              <p className="text-light/80 mb-6">
                Order regarding the initiation of Corporate Insolvency Resolution Process.
              </p>
              <Link href="#" className="btn-secondary flex items-center justify-center w-full md:w-auto">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </span>
              </Link>
            </div>
            
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 id="form-a" className="text-xl font-semibold mb-4">Form A</h3>
              <p className="text-light/80 mb-6">
                Public announcement regarding the Corporate Insolvency Resolution Process.
              </p>
              <Link href="#" className="btn-secondary flex items-center justify-center w-full md:w-auto">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </span>
              </Link>
            </div>
            
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 id="form-g" className="text-xl font-semibold mb-4">Form G</h3>
              <p className="text-light/80 mb-6">
                Invitation for Expression of Interest.
              </p>
              <Link href="#" className="btn-secondary flex items-center justify-center w-full md:w-auto">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </span>
              </Link>
            </div>
            
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 id="public-notice" className="text-xl font-semibold mb-4">Public Notice</h3>
              <p className="text-light/80 mb-6">
                Important information for stakeholders and the general public.
              </p>
              <Link href="#" className="btn-secondary flex items-center justify-center w-full md:w-auto">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Creditor Information */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="mb-6">Creditor <span className="gradient-text">Information</span></h2>
            <p className="text-light/80 mb-4">
              Documents detailing claims submitted by various creditors and their status.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 id="financial-creditors" className="text-xl font-semibold mb-3">List of Financial Creditors</h3>
              <p className="text-light/80 mb-4">
                Updated list of financial creditors with claim details.
              </p>
              <Link href="#" className="btn-sm-secondary">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </span>
              </Link>
            </div>
            
            <div className="bg-dark/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 id="operational-creditors" className="text-xl font-semibold mb-3">List of Operational Creditors (Govt. Dues)</h3>
              <p className="text-light/80 mb-4">
                Operational creditors related to government dues.
              </p>
              <Link href="#" className="btn-sm-secondary">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </span>
              </Link>
            </div>
            
            <div className="bg-dark/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 className="text-xl font-semibold mb-3">List of Operational Creditors (Others)</h3>
              <p className="text-light/80 mb-4">
                Other operational creditors and related claims.
              </p>
              <Link href="#" className="btn-sm-secondary">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </span>
              </Link>
            </div>
            
            <div className="bg-dark/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 className="text-xl font-semibold mb-3">Claims as on 10.05.2024</h3>
              <p className="text-light/80 mb-4">
                Updated claims status as of May 10, 2024.
              </p>
              <Link href="#" className="btn-sm-secondary">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resolution Plan */}
      <section id="resolution-plan" className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="mb-6">Approved Resolution <span className="gradient-text">Plan</span></h2>
            <p className="text-light/80 mb-4">
              Details of the approved resolution plan and related documents.
            </p>
          </div>
          
          <div className="bg-dark/30 p-8 rounded-xl border border-primary/20">
            <p className="text-light/80 mb-6">
              The approved resolution plan contains details about the future course of action, responsibilities 
              of various stakeholders, and the timeline for implementation. For more information, please download 
              the document below.
            </p>
            <Link href="#" className="btn-primary">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Approved Resolution Plan
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Investor <span className="gradient-text">Contact</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              For any queries related to investor information or the resolution process, please contact us.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto bg-dark/30 p-8 rounded-xl border border-primary/20">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Resolution Professional</h3>
              <p className="text-light/80">Mr. John Smith</p>
              <p className="text-light/80">IBBI Registration No: IBBI/IPA-001/IP-P00001/2017-18/10000</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-light/80">Email: resolution@hogarcontrols.com</p>
              <p className="text-light/80">Phone: +91-XXX-XXX-XXXX</p>
            </div>
            
            <Link href="/contact" className="btn-primary w-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 