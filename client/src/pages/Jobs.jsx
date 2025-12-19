import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/JobCard';
import JobFilter from '../components/JobFilter';
import api from '../utils/api';
import './Jobs.css';

function Jobs({ type: propType }) {
    const [searchParams] = useSearchParams();
    const [jobs, setJobs] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchFilters();
    }, []);

    useEffect(() => {
        fetchJobs();
    }, [currentPage, filters, propType]);

    const fetchFilters = async () => {
        try {
            const [companiesRes, locationsRes] = await Promise.all([
                api.get('/companies'),
                api.get('/jobs/locations')
            ]);
            setCompanies(companiesRes.data);
            setLocations(locationsRes.data);
        } catch (error) {
            console.error('Error fetching filters:', error);
        }
    };

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const params = {
                page: currentPage,
                limit: 12,
                ...filters
            };

            if (propType) {
                params.type = propType;
            }

            const response = await api.get('/jobs', { params });
            setJobs(response.data.jobs);
            setTotalPages(response.data.totalPages);
            setTotal(response.data.total);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilter = useCallback((newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
    }, []);

    const getPageTitle = () => {
        switch (propType) {
            case 'internship':
                return 'Internship Opportunities';
            case 'walkin':
                return 'Walk-in Interviews';
            default:
                return 'All Job Opportunities';
        }
    };

    const getPageDescription = () => {
        switch (propType) {
            case 'internship':
                return 'Start your career with hands-on experience at top companies';
            case 'walkin':
                return 'Direct walk-in opportunities - No prior appointment needed';
            default:
                return 'Discover thousands of opportunities from leading companies';
        }
    };

    return (
        <div className="jobs-page">
            <div className="jobs-page-header">
                <div className="container">
                    <h1 className="page-title">{getPageTitle()}</h1>
                    <p className="page-subtitle">{getPageDescription()}</p>
                    {total > 0 && (
                        <p className="jobs-count">{total} opportunities found</p>
                    )}
                </div>
            </div>

            <div className="container">
                <JobFilter
                    onFilter={handleFilter}
                    companies={companies}
                    locations={locations}
                />

                {loading ? (
                    <div className="loading-container">
                        <div className="spinner"></div>
                    </div>
                ) : jobs.length > 0 ? (
                    <>
                        <div className="jobs-grid grid grid-3">
                            {jobs.map((job, index) => (
                                <div key={job._id} className={`animate-fadeIn stagger-${(index % 5) + 1}`}>
                                    <JobCard job={job} />
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="pagination">
                                <button
                                    className="btn btn-secondary"
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                >
                                    Previous
                                </button>
                                <span className="page-info">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    className="btn btn-secondary"
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="empty-state">
                        <h3>No jobs found</h3>
                        <p>Try adjusting your filters or check back later for new opportunities</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Jobs;
