import { Link } from 'react-router-dom';
import { Target, Users, Shield, Zap, Award, Heart } from 'lucide-react';
import './About.css';

function About() {
    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            description: 'To bridge the gap between talented individuals and their dream careers by providing a seamless, user-friendly job search experience.'
        },
        {
            icon: Users,
            title: 'Community First',
            description: 'We believe in building a strong community where job seekers and employers can connect and grow together.'
        },
        {
            icon: Shield,
            title: 'Trust & Safety',
            description: 'Every job listing is verified to ensure authenticity and protect our users from fraudulent postings.'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We continuously improve our platform with the latest technology to provide the best job search experience.'
        },
        {
            icon: Award,
            title: 'Quality',
            description: 'We partner with top companies to bring you the best job opportunities across various industries.'
        },
        {
            icon: Heart,
            title: 'User-Centric',
            description: 'Everything we do is focused on making your job search journey as smooth and successful as possible.'
        }
    ];

    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">About JobsConnect</h1>
                    <p className="page-subtitle">
                        Empowering careers, connecting dreams. Your trusted partner in the job search journey.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Story Section */}
                <section className="about-section">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>
                                JobsConnect was founded with a simple yet powerful vision: to make job searching
                                easier, faster, and more effective for everyone. In a world where finding the right
                                job can be overwhelming, we set out to create a platform that simplifies this process.
                            </p>
                            <p>
                                Since our inception, we have helped thousands of job seekers find their dream
                                positions across various industries. From fresh graduates looking for their first
                                opportunity to experienced professionals seeking new challenges, JobsConnect has
                                been the go-to platform for career advancement.
                            </p>
                            <p>
                                Today, we continue to grow and evolve, partnering with leading companies to bring
                                you the best job opportunities. Our commitment to quality, transparency, and
                                user satisfaction remains at the core of everything we do.
                            </p>
                        </div>
                        <div className="story-stats">
                            <div className="stat-box">
                                <span className="stat-number">10,000+</span>
                                <span className="stat-label">Jobs Posted</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">50,000+</span>
                                <span className="stat-label">Active Users</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Partner Companies</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Satisfaction Rate</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="about-section values-section">
                    <h2 className="section-title text-center">Our Values</h2>
                    <p className="section-subtitle text-center">
                        The principles that guide everything we do
                    </p>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card card">
                                <div className="value-icon">
                                    <value.icon size={28} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="about-cta glass">
                    <h2>Ready to Find Your Dream Job?</h2>
                    <p>
                        Join thousands of job seekers who have found their perfect career match through JobsConnect.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/jobs" className="btn btn-primary btn-lg">
                            Browse Jobs
                        </Link>
                        <Link to="/contact" className="btn btn-secondary btn-lg">
                            Contact Us
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
