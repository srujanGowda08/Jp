const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const Job = require('./models/Job');
const Company = require('./models/Company');

const checkDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');

        const jobCount = await Job.countDocuments();
        const companyCount = await Company.countDocuments();
        const activeJobs = await Job.countDocuments({ isActive: true });

        console.log(`Total Jobs: ${jobCount}`);
        console.log(`Active Jobs: ${activeJobs}`);
        console.log(`Total Companies: ${companyCount}`);

        if (jobCount > 0) {
            const sampleJob = await Job.findOne();
            console.log('Sample Job:', JSON.stringify(sampleJob, null, 2));
        }

        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

checkDB();
