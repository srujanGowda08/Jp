const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const connectDB = require('./config/db');
const Job = require('./models/Job');
const Company = require('./models/Company');

// Sample Data
const companies = [
    { name: 'Google', logo: 'https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png' },
    { name: 'Microsoft', logo: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_microsoft-512.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg' },
    { name: 'Netflix', logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png' }
];

const jobs = [
    // TECH GIANTS
    {
        title: 'Frontend Developer',
        company: 'Google',
        location: 'Bangalore, India',
        type: 'job',
        experience: '2-4 years',
        salary: '₹18,00,000 - ₹28,00,000',
        description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building active user interfaces using React.js and other modern technologies.\n\nKey Responsibilities:\n- Develop new user-facing features\n- Build reusable code and libraries for future use\n- Ensure the technical feasibility of UI/UX designs\n- Optimize application for maximum speed and scalability',
        requirements: [
            'Proficient understanding of web markup, including HTML5, CSS3',
            'Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS',
            'Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery',
            'Good understanding of React.js and its core principles'
        ],
        skills: ['React', 'JavaScript', 'HTML/CSS', 'Redux', 'TypeScript'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'Backend Engineer',
        company: 'Microsoft',
        location: 'Hyderabad, India',
        type: 'job',
        experience: '3-6 years',
        salary: '₹22,00,000 - ₹35,00,000',
        description: 'Join our Azure team to build scalable cloud solutions. You will work on distributed systems and high-availablity services.',
        requirements: ['Experience with C# or Java', 'Knowledge of distributed systems', 'Experience with cloud platforms (Azure/AWS)'],
        skills: ['C#', '.NET', 'Azure', 'SQL', 'System Design'],
        postedDate: new Date(Date.now() - 86400000), // 1 day ago
        isActive: true
    },
    {
        title: 'SDE II',
        company: 'Amazon',
        location: 'Bangalore, India',
        type: 'job',
        experience: '4-7 years',
        salary: '₹30,00,000 - ₹45,00,000',
        description: 'Work on Amazon.com core shopping experience. High scale, high impact role.',
        requirements: ['Strong DSA skills', 'System Design expertise', 'Experience with high-scale applications'],
        skills: ['Java', 'AWS', 'DynamoDB', 'Microservices'],
        postedDate: new Date(Date.now() - 172800000), // 2 days ago
        isActive: true
    },
    {
        title: 'UI/UX Designer',
        company: 'Netflix',
        location: 'Mumbai, India',
        type: 'job',
        experience: '2-5 years',
        salary: '₹15,00,000 - ₹25,00,000',
        description: 'Create stunning interfaces for our content delivery platforms.',
        requirements: ['Portfolio demonstrating UI/UX skills', 'Proficiency in Figma', 'Understanding of user-centered design'],
        skills: ['Figma', 'Prototyping', 'User Research', 'Adobe XD'],
        postedDate: new Date(Date.now() - 259200000), // 3 days ago
        isActive: true
    },

    // STARTUPS & OTHERS
    {
        title: 'Full Stack Intern',
        company: 'TechStart',
        location: 'Remote',
        type: 'internship',
        experience: '0-1 years',
        salary: '₹15,000 - ₹25,000 / month',
        description: 'Great opportunity for students to learn MERN stack development in a fast-paced environment.',
        requirements: ['Basic knowledge of React and Node.js', 'Willingness to learn', 'Git basics'],
        skills: ['React', 'Node.js', 'MongoDB', 'Git'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'Data Analyst',
        company: 'DataFlow',
        location: 'Pune, India',
        type: 'job',
        experience: '1-3 years',
        salary: '₹6,00,000 - ₹10,00,000',
        description: 'Analyze large datasets to provide actionable insights for business growth.',
        requirements: ['SQL proficiency', 'Experience with Python/R', 'Tableau/PowerBI knowledge'],
        skills: ['SQL', 'Python', 'Tableau', 'Excel'],
        postedDate: new Date(Date.now() - 432000000), // 5 days ago
        isActive: true
    },
    {
        title: 'DevOps Engineer',
        company: 'CloudScale',
        location: 'Bangalore, India',
        type: 'job',
        experience: '3-5 years',
        salary: '₹12,00,000 - ₹20,00,000',
        description: 'Manage CI/CD pipelines and cloud infrastructure.',
        requirements: ['Experience with Docker/Kubernetes', 'Jenkins/GitLab CI', 'Linux administration'],
        skills: ['Docker', 'Kubernetes', 'AWS', 'Linux'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'Marketing Manager',
        company: 'GrowthHub',
        location: 'Delhi, India',
        type: 'job',
        experience: '5+ years',
        salary: '₹15,00,000 - ₹22,00,000',
        description: 'Lead our marketing initiatives and drive brand growth.',
        requirements: ['Proven experience in digital marketing', 'Team leadership', 'SEO/SEM knowledge'],
        skills: ['Marketing', 'SEO', 'Content Strategy', 'Analytics'],
        postedDate: new Date(Date.now() - 604800000), // 1 week ago
        isActive: true
    },
    {
        title: 'Customer Support Executive',
        company: 'ServiceFirst',
        location: 'Chennai, India',
        type: 'walkin',
        experience: '0-2 years',
        salary: '₹3,00,000 - ₹4,50,000',
        description: 'Direct walk-in for customer support role. Excellent communication skills required.',
        requirements: ['Good English communication', 'Willingness to work in shifts', 'Basic computer knowledge'],
        skills: ['Communication', 'CRM', 'Support'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'Java Developer',
        company: 'Infosys',
        location: 'Mysore, India',
        type: 'walkin',
        experience: 'Fresher',
        salary: '₹3,60,000',
        description: 'Walk-in drive for freshers. 2024/2025 batch only.',
        requirements: ['B.E/B.Tech/MCA', '60% throughout academics', 'No active backlogs'],
        skills: ['Java', 'OOPS', 'SQL'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'React Native Developer',
        company: 'AppWorks',
        location: 'Remote',
        type: 'job',
        experience: '2-4 years',
        salary: '₹10,00,000 - ₹18,00,000',
        description: 'Build cross-platform mobile apps for international clients.',
        requirements: ['Experience with React Native', 'Redux', 'Native modules knowledge is a plus'],
        skills: ['React Native', 'Mobile Dev', 'JavaScript'],
        postedDate: new Date(Date.now() - 100000000),
        isActive: true
    },
    {
        title: 'Product Manager',
        company: 'InnovateCo',
        location: 'Bangalore, India',
        type: 'job',
        experience: '5-8 years',
        salary: '₹25,00,000 - ₹40,00,000',
        description: 'Define product vision and work with engineering teams to deliver.',
        requirements: ['Experience in product lifecycle management', 'Agile methodology', 'Data-driven decision making'],
        skills: ['Product Management', 'Agile', 'JIRA'],
        postedDate: new Date(Date.now() - 200000000),
        isActive: true
    },
    {
        title: 'Content Writer Intern',
        company: 'MediaBuzz',
        location: 'Mumbai, India',
        type: 'internship',
        experience: '0 years',
        salary: '₹10,000 / month',
        description: 'Write engaging content for blogs and social media.',
        requirements: ['Excellent writing skills', 'Creativity', 'Basic SEO knowledge'],
        skills: ['Content Writing', 'Copywriting', 'English'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'HR Executive',
        company: 'PeopleFirst',
        location: 'Pune, India',
        type: 'job',
        experience: '1-3 years',
        salary: '₹4,00,000 - ₹6,00,000',
        description: 'Handle recruitment and employee engagement.',
        requirements: ['MBA in HR', 'Good interpersonal skills', 'Recruitment experience'],
        skills: ['Recruitment', 'HR Operations', 'Communication'],
        postedDate: new Date(Date.now() - 500000000),
        isActive: true
    },
    {
        title: 'Software Test Engineer',
        company: 'QualityAssure',
        location: 'Hyderabad, India',
        type: 'job',
        experience: '2-4 years',
        salary: '₹6,00,000 - ₹9,00,000',
        description: 'Manual and automation testing for web applications.',
        requirements: ['Selenium', 'Java/Python', 'Bug tracking tools'],
        skills: ['Testing', 'Selenium', 'QA'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'Sales Associate',
        company: 'SalesForce',
        location: 'Gurgaon, India',
        type: 'walkin',
        experience: '0-2 years',
        salary: '₹4,00,000 + Incentives',
        description: 'Walk-in for sales role. High earning potential.',
        requirements: ['Good communication', 'Sales aptitude', 'Result oriented'],
        skills: ['Sales', 'Negotiation', 'Communication'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'Python Developer',
        company: 'AI Solutions',
        location: 'Bangalore, India',
        type: 'job',
        experience: '3-6 years',
        salary: '₹18,00,000 - ₹26,00,000',
        description: 'Build AI/ML pipelines and backend services.',
        requirements: ['Python', 'Django/Flask', 'Basic ML knowledge'],
        skills: ['Python', 'Django', 'Machine Learning'],
        postedDate: new Date(),
        isActive: true
    },
    {
        title: 'Graphic Designer',
        company: 'Creative Studio',
        location: 'Remote',
        type: 'internship',
        experience: '0-1 years',
        salary: '₹12,000 / month',
        description: 'Design social media creatives and banners.',
        requirements: ['Photoshop', 'Illustrator', 'Creative portfolio'],
        skills: ['Graphic Design', 'Photoshop', 'Illustrator'],
        postedDate: new Date(),
        isActive: true
    }
];

const seedDB = async () => {
    await connectDB();

    try {
        await Job.deleteMany({});
        await Company.deleteMany({});
        console.log('Cleared DB');

        await Company.insertMany(companies);
        console.log('Seeded Companies');

        await Job.insertMany(jobs);
        console.log('Seeded Jobs');

        console.log('Database Seeded Successfully!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDB();
