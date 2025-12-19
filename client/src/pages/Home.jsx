import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Shield, Users } from 'lucide-react';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import JobFilter from '../components/JobFilter';
import api from '../utils/api';
import './Home.css';

function Home() {
    const [jobs, setJobs] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [jobsRes, companiesRes, locationsRes] = await Promise.all([
                api.get('/jobs/latest'),
                api.get('/companies'),
                api.get('/jobs/locations')
            ]);
            setJobs(jobsRes.data);
            setFilteredJobs(jobsRes.data);
            setCompanies(companiesRes.data);
            setLocations(locationsRes.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilter = useCallback(({ search, location, type, company }) => {
        let filtered = [...jobs];

        if (search) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(job =>
                job.title.toLowerCase().includes(searchLower) ||
                job.company.toLowerCase().includes(searchLower) ||
                job.location.toLowerCase().includes(searchLower)
            );
        }

        if (location) {
            filtered = filtered.filter(job =>
                job.location.toLowerCase().includes(location.toLowerCase())
            );
        }

        if (type) {
            filtered = filtered.filter(job => job.type === type);
        }

        if (company) {
            filtered = filtered.filter(job =>
                job.company.toLowerCase().includes(company.toLowerCase())
            );
        }

        setFilteredJobs(filtered);
    }, [jobs]);

    const features = [
        {
            icon: Target,
            title: 'Curated Opportunities',
            description: 'Hand-picked jobs from verified companies across industries'
        },
        {
            icon: Zap,
            title: 'Quick Apply',
            description: 'Apply to multiple jobs instantly with your profile'
        },
        {
            icon: Shield,
            title: 'Verified Listings',
            description: 'All job postings are verified for authenticity'
        },
        {
            icon: Users,
            title: 'Career Support',
            description: 'Get guidance and support throughout your job search'
        }
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* About Section */}
            <section className="section about-section">
                <div className="container">
                    <div className="about-content">
                        <h2 className="section-title">Why Choose JobsConnect?</h2>
                        <p className="section-subtitle">
                            We connect talented individuals with their dream careers. Our platform
                            makes job hunting simple, efficient, and effective.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card card">
                                <div className="feature-icon">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="section jobs-section">
                <div className="container">
                    <div className="jobs-header">
                        <div>
                            <h2 className="section-title">Latest Opportunities</h2>
                            <p className="section-subtitle">
                                Explore the newest job openings from top companies
                            </p>
                        </div>
                    </div>

                    <JobFilter
                        onFilter={handleFilter}
                        companies={companies}
                        locations={locations}
                    />

                    {loading ? (
                        <div className="loading-container">
                            <div className="spinner"></div>
                        </div>
                    ) : filteredJobs.length > 0 ? (
                        <>
                            <div className="jobs-grid grid grid-3">
                                {filteredJobs.map((job, index) => (
                                    <div key={job._id} className={`animate-fadeIn stagger-${(index % 5) + 1}`}>
                                        <JobCard job={job} />
                                    </div>
                                ))}
                            </div>

                            <div className="view-all-container">
                                <Link to="/jobs" className="btn btn-primary btn-lg">
                                    View All Jobs
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="empty-state">
                            <h3>No jobs found</h3>
                            <p>Try adjusting your filters to find more opportunities</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <div className="cta-text">
                            <h2>Ready to Start Your Journey?</h2>
                            <p>
                                Thousands of companies are hiring right now. Find your perfect
                                match and take the next step in your career.
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <Link to="/jobs" className="btn btn-primary btn-lg">
                                Browse Jobs
                            </Link>
                            <Link to="/internships" className="btn btn-secondary btn-lg">
                                Find Internships
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
