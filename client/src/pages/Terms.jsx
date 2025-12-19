import './Terms.css';

function Terms() {
    return (
        <div className="legal-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Terms & Conditions</h1>
                    <p className="page-subtitle">
                        Please read these terms carefully before using JobsConnect
                    </p>
                    <p className="last-updated">Last Updated: December 15, 2024</p>
                </div>
            </div>

            <div className="container">
                <div className="legal-content card">
                    <section className="legal-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using JobsConnect ("the Platform"), you accept and agree to be bound
                            by these Terms and Conditions. If you do not agree to these terms, please do not use
                            our services. These terms apply to all visitors, users, and others who access or use
                            the Platform.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Description of Service</h2>
                        <p>
                            JobsConnect is an online job portal that connects job seekers with employers. We provide
                            a platform for posting and viewing job listings, internships, and walk-in opportunities.
                            Our services include:
                        </p>
                        <ul>
                            <li>Job listing and search functionality</li>
                            <li>Company profiles and job categorization</li>
                            <li>Job application redirection to employer websites</li>
                            <li>Job alerts and notifications</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. User Responsibilities</h2>
                        <p>As a user of JobsConnect, you agree to:</p>
                        <ul>
                            <li>Provide accurate and truthful information when using our services</li>
                            <li>Not misuse or attempt to manipulate the Platform</li>
                            <li>Respect intellectual property rights</li>
                            <li>Not post any content that is illegal, harmful, or offensive</li>
                            <li>Not use automated systems to access the Platform without permission</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Job Listings</h2>
                        <p>
                            JobsConnect does not guarantee the accuracy, completeness, or reliability of any job
                            listings posted on the Platform. We are not responsible for:
                        </p>
                        <ul>
                            <li>The content of job postings provided by employers</li>
                            <li>The hiring decisions made by employers</li>
                            <li>Any disputes arising between job seekers and employers</li>
                            <li>The outcome of any job application</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Intellectual Property</h2>
                        <p>
                            All content on JobsConnect, including but not limited to text, graphics, logos, and
                            software, is the property of JobsConnect or its content suppliers and is protected by
                            copyright and other intellectual property laws. You may not reproduce, distribute, or
                            create derivative works from this content without our express written permission.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Privacy</h2>
                        <p>
                            Your privacy is important to us. Please review our Privacy Policy, which also governs
                            your use of the Platform, to understand our practices regarding the collection and use
                            of your personal information.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Limitation of Liability</h2>
                        <p>
                            JobsConnect shall not be liable for any indirect, incidental, special, consequential,
                            or punitive damages arising out of or relating to your use of the Platform. This
                            includes, but is not limited to, damages for loss of profits, goodwill, use, data,
                            or other intangible losses.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. We will notify
                            users of any significant changes by posting a notice on our Platform. Your continued
                            use of the Platform after such modifications constitutes your acceptance of the
                            updated terms.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>9. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of India,
                            without regard to its conflict of law provisions. Any disputes arising under these
                            terms shall be subject to the exclusive jurisdiction of the courts in India.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>10. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms and Conditions, please contact us at:
                        </p>
                        <ul>
                            <li>Email: legal@jobsconnect.com</li>
                            <li>Address: 123 Business Park, Tech City, India 400001</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Terms;
