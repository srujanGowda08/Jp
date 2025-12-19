// Role templates with auto-generated description, skills, and responsibilities
const roleTemplates = {
    'Software Developer': {
        description: `We are seeking a highly motivated and skilled Software Developer to join our dynamic team. As a Software Developer, you will be responsible for designing, developing, and maintaining high-quality software applications that meet our business requirements and exceed user expectations.

In this role, you will work closely with cross-functional teams including product managers, designers, and other developers to deliver innovative solutions. You will participate in all phases of the software development lifecycle, from requirements gathering and system design to coding, testing, and deployment.

The ideal candidate should have a strong foundation in computer science fundamentals, excellent problem-solving skills, and a passion for writing clean, efficient, and maintainable code. You should be comfortable working in an agile environment and be able to adapt to changing priorities and requirements.

We offer a collaborative work environment, opportunities for professional growth, and the chance to work on cutting-edge technologies. If you are passionate about software development and want to make a meaningful impact, we encourage you to apply.

This position offers competitive compensation, comprehensive benefits, and a supportive team culture that values innovation and continuous learning.`,
        skills: [
            'Java', 'Python', 'JavaScript', 'SQL', 'Git',
            'RESTful APIs', 'Data Structures', 'Algorithms',
            'Problem Solving', 'Agile Methodologies'
        ],
        responsibilities: [
            'Design, develop, and maintain software applications using modern programming languages and frameworks',
            'Write clean, efficient, and well-documented code following best practices and coding standards',
            'Collaborate with cross-functional teams to understand requirements and deliver solutions',
            'Participate in code reviews to ensure code quality and share knowledge with team members',
            'Debug and resolve software defects and performance issues in a timely manner',
            'Develop and maintain unit tests and integration tests for software components',
            'Contribute to the improvement of development processes and tools',
            'Stay updated with the latest industry trends and technologies',
            'Document technical specifications and maintain project documentation',
            'Mentor junior developers and provide technical guidance when needed'
        ]
    },
    'Frontend Developer': {
        description: `We are looking for an experienced Frontend Developer to join our team and help build exceptional user interfaces. As a Frontend Developer, you will be responsible for implementing visual elements and interactive features that users see and interact with in our web applications.

You will work closely with our design team to translate mockups and wireframes into responsive, accessible, and performant web pages. Your role will involve writing clean, modular, and reusable code using modern JavaScript frameworks and CSS methodologies.

The ideal candidate should have a strong understanding of web technologies, excellent attention to detail, and a passion for creating intuitive user experiences. You should be proficient in HTML, CSS, and JavaScript, with hands-on experience in popular frontend frameworks like React, Vue, or Angular.

We value creativity, innovation, and a user-centric approach to development. If you are passionate about frontend technologies and want to work on challenging projects, we would love to hear from you.

Join our team and help us create beautiful, functional web applications that delight our users and drive business success.`,
        skills: [
            'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vue.js',
            'TypeScript', 'Responsive Design', 'Git', 'REST APIs',
            'UI/UX Principles', 'Webpack', 'SASS/SCSS'
        ],
        responsibilities: [
            'Develop responsive and accessible user interfaces using modern frontend technologies',
            'Translate design mockups and wireframes into high-quality code',
            'Optimize applications for maximum speed and scalability',
            'Ensure cross-browser compatibility and responsive design implementation',
            'Collaborate with backend developers to integrate APIs and services',
            'Write and maintain unit tests for frontend components',
            'Participate in design and code reviews to maintain quality standards',
            'Stay updated with emerging frontend technologies and best practices',
            'Troubleshoot and debug issues across multiple browsers and devices',
            'Contribute to the development of reusable component libraries'
        ]
    },
    'Backend Developer': {
        description: `We are seeking a talented Backend Developer to join our engineering team. As a Backend Developer, you will be responsible for building and maintaining the server-side logic, databases, and APIs that power our applications.

In this role, you will design and implement scalable, secure, and efficient backend systems. You will work with databases, manage server infrastructure, and ensure seamless integration between the frontend and backend components of our applications.

The ideal candidate should have strong experience with server-side programming languages, database management, and API development. You should be familiar with microservices architecture, containerization, and cloud platforms.

We offer an exciting opportunity to work on complex technical challenges and contribute to the development of robust backend solutions. If you are passionate about backend development and want to build systems that can handle millions of users, we want to hear from you.

This position provides opportunities for growth, learning, and working with cutting-edge technologies in a collaborative environment.`,
        skills: [
            'Node.js', 'Python', 'Java', 'SQL', 'MongoDB',
            'RESTful APIs', 'GraphQL', 'Docker', 'AWS',
            'Microservices', 'Redis', 'Git'
        ],
        responsibilities: [
            'Design and implement robust, scalable, and secure backend services',
            'Develop and maintain RESTful APIs and integrate with frontend applications',
            'Design and optimize database schemas for performance and scalability',
            'Implement authentication, authorization, and security best practices',
            'Write efficient and well-documented code with comprehensive test coverage',
            'Monitor and optimize application performance and troubleshoot issues',
            'Collaborate with frontend developers to define API contracts',
            'Participate in system design discussions and architectural decisions',
            'Maintain and improve existing backend systems and infrastructure',
            'Document technical specifications and API documentation'
        ]
    },
    'Full Stack Developer': {
        description: `We are looking for a versatile Full Stack Developer to join our development team. As a Full Stack Developer, you will be responsible for developing both client-side and server-side components of our web applications, ensuring seamless integration and optimal user experience.

In this role, you will work on all layers of the application stack, from designing user interfaces to building backend services and managing databases. You will be involved in the entire software development lifecycle, from concept to deployment.

The ideal candidate should have experience with both frontend and backend technologies, strong problem-solving skills, and the ability to work independently as well as part of a team. You should be comfortable with modern JavaScript frameworks, server-side programming, and database management.

We offer a dynamic work environment where you can apply your diverse skill set and contribute to meaningful projects. If you enjoy working across the full technology stack and want to be part of a growing team, we encourage you to apply.

Join us and help build innovative applications that make a difference for our users and clients.`,
        skills: [
            'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',
            'SQL', 'HTML/CSS', 'Git', 'REST APIs', 'TypeScript',
            'Docker', 'AWS/Azure'
        ],
        responsibilities: [
            'Develop and maintain both frontend and backend components of web applications',
            'Design and implement user interfaces using modern frontend frameworks',
            'Build scalable backend services and RESTful APIs',
            'Design and manage databases, ensuring data integrity and performance',
            'Write clean, maintainable code with appropriate test coverage',
            'Collaborate with designers and product managers to implement features',
            'Troubleshoot and debug issues across the full application stack',
            'Participate in code reviews and provide constructive feedback',
            'Deploy and maintain applications on cloud platforms',
            'Stay current with emerging technologies and industry best practices'
        ]
    },
    'Data Analyst': {
        description: `We are seeking a detail-oriented Data Analyst to join our analytics team. As a Data Analyst, you will be responsible for collecting, processing, and analyzing large datasets to provide actionable insights that drive business decisions.

In this role, you will work with stakeholders across the organization to understand their data needs and deliver reports, dashboards, and analyses that help them make informed decisions. You will transform raw data into meaningful information and present findings in a clear and compelling manner.

The ideal candidate should have strong analytical skills, proficiency in data analysis tools and programming languages, and the ability to communicate complex findings to non-technical audiences. Experience with statistical analysis, data visualization, and SQL is essential.

We offer an opportunity to work with diverse datasets and contribute to data-driven decision making across the organization. If you are passionate about data and want to make an impact through insights, we would love to hear from you.

This position provides a collaborative environment and opportunities for professional growth in the field of data analytics.`,
        skills: [
            'SQL', 'Python', 'Excel', 'Tableau', 'Power BI',
            'Statistical Analysis', 'Data Visualization', 'R',
            'ETL', 'Data Modeling'
        ],
        responsibilities: [
            'Collect, clean, and preprocess data from multiple sources for analysis',
            'Perform statistical analysis to identify trends, patterns, and insights',
            'Create reports, dashboards, and visualizations to communicate findings',
            'Collaborate with stakeholders to understand data requirements and objectives',
            'Develop and maintain data pipelines and automated reporting systems',
            'Ensure data accuracy and integrity through quality assurance processes',
            'Present findings and recommendations to technical and non-technical audiences',
            'Support business teams with ad-hoc data requests and analyses',
            'Document data definitions, methodologies, and processes',
            'Identify opportunities for process improvement through data analysis'
        ]
    },
    'Data Scientist': {
        description: `We are looking for a talented Data Scientist to join our team and help us leverage data to solve complex business problems. As a Data Scientist, you will apply advanced analytics and machine learning techniques to extract insights from large datasets and build predictive models.

In this role, you will work on challenging problems, from understanding customer behavior to optimizing business processes. You will collaborate with cross-functional teams to identify opportunities where data science can drive value and implement solutions that have a real impact.

The ideal candidate should have a strong background in statistics, machine learning, and programming. You should be comfortable working with large datasets, building and deploying models, and communicating insights to stakeholders.

We offer an exciting opportunity to work on cutting-edge data science projects and contribute to the growth of our data capabilities. If you are passionate about using data to solve problems and drive innovation, we want to hear from you.

Join our team and help shape the future of data-driven decision making in our organization.`,
        skills: [
            'Python', 'R', 'Machine Learning', 'Deep Learning', 'SQL',
            'TensorFlow', 'Scikit-learn', 'Statistics', 'Data Visualization',
            'NLP', 'Big Data', 'Cloud Platforms'
        ],
        responsibilities: [
            'Develop and implement machine learning models to solve business problems',
            'Analyze large datasets to extract insights and identify patterns',
            'Design and conduct experiments to test hypotheses and validate models',
            'Build predictive models and recommendation systems',
            'Collaborate with engineering teams to deploy models to production',
            'Communicate findings and insights to stakeholders through reports and presentations',
            'Stay current with the latest developments in data science and machine learning',
            'Develop data pipelines and ETL processes for model training',
            'Evaluate model performance and iterate on solutions',
            'Mentor junior team members and contribute to team knowledge sharing'
        ]
    },
    'DevOps Engineer': {
        description: `We are seeking an experienced DevOps Engineer to join our infrastructure team. As a DevOps Engineer, you will be responsible for building and maintaining our CI/CD pipelines, infrastructure, and ensuring the reliability and scalability of our systems.

In this role, you will work closely with development teams to streamline deployment processes, implement automation, and improve system reliability. You will manage cloud infrastructure, implement monitoring solutions, and respond to production incidents.

The ideal candidate should have strong experience with cloud platforms, containerization, and infrastructure as code. You should be comfortable with scripting, automation, and have a solid understanding of software development practices.

We offer an opportunity to work on challenging infrastructure problems and contribute to the reliability and efficiency of our systems. If you are passionate about automation and want to build robust infrastructure, we encourage you to apply.

This position provides a collaborative environment and opportunities to work with cutting-edge DevOps tools and practices.`,
        skills: [
            'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform',
            'Linux', 'Python', 'Bash', 'CI/CD', 'Ansible',
            'Monitoring Tools', 'Git'
        ],
        responsibilities: [
            'Design, build, and maintain CI/CD pipelines for automated deployments',
            'Manage and optimize cloud infrastructure on AWS, Azure, or GCP',
            'Implement infrastructure as code using Terraform or CloudFormation',
            'Containerize applications using Docker and orchestrate with Kubernetes',
            'Set up monitoring, logging, and alerting systems',
            'Ensure system security through implementation of best practices',
            'Troubleshoot production issues and participate in incident response',
            'Collaborate with development teams to improve deployment processes',
            'Automate repetitive tasks to improve operational efficiency',
            'Document infrastructure configurations and operational procedures'
        ]
    },
    'UI/UX Designer': {
        description: `We are looking for a creative UI/UX Designer to join our design team. As a UI/UX Designer, you will be responsible for creating intuitive, engaging, and visually appealing user experiences for our digital products.

In this role, you will conduct user research, create wireframes and prototypes, and design user interfaces that delight our users. You will work closely with product managers and developers to ensure that designs are implemented accurately and meet user needs.

The ideal candidate should have a strong portfolio demonstrating UI/UX design skills, proficiency in design tools, and a deep understanding of user-centered design principles. You should be able to balance user needs with business goals and create designs that are both beautiful and functional.

We offer an opportunity to work on innovative products and shape the user experience for thousands of users. If you are passionate about design and want to make a meaningful impact, we would love to hear from you.

Join our team and help create exceptional digital experiences that users love.`,
        skills: [
            'Figma', 'Adobe XD', 'Sketch', 'User Research', 'Wireframing',
            'Prototyping', 'Visual Design', 'Interaction Design',
            'Usability Testing', 'Design Systems'
        ],
        responsibilities: [
            'Conduct user research to understand user needs and behaviors',
            'Create wireframes, prototypes, and high-fidelity designs',
            'Design intuitive and visually appealing user interfaces',
            'Develop and maintain design systems and component libraries',
            'Collaborate with product managers to define product requirements',
            'Work closely with developers to ensure accurate implementation',
            'Conduct usability testing and iterate on designs based on feedback',
            'Present design concepts and rationale to stakeholders',
            'Stay current with design trends and best practices',
            'Ensure designs are accessible and meet inclusive design standards'
        ]
    },
    'Product Manager': {
        description: `We are seeking a strategic Product Manager to join our product team. As a Product Manager, you will be responsible for defining product vision, strategy, and roadmap, and driving the development of products that meet market needs and business objectives.

In this role, you will work cross-functionally with engineering, design, marketing, and sales teams to bring products from concept to launch. You will gather and prioritize product requirements, define success metrics, and make data-driven decisions to optimize product performance.

The ideal candidate should have strong analytical and communication skills, experience with product management methodologies, and the ability to translate customer needs into product features. You should be comfortable working in a fast-paced environment and be able to influence without authority.

We offer an exciting opportunity to lead product initiatives and make a significant impact on our business. If you are passionate about building great products and want to drive innovation, we encourage you to apply.

This position provides opportunities for growth and the chance to work on products that reach millions of users.`,
        skills: [
            'Product Strategy', 'Roadmap Planning', 'Agile/Scrum', 'User Research',
            'Data Analysis', 'Stakeholder Management', 'Communication',
            'JIRA', 'Market Research', 'Prioritization'
        ],
        responsibilities: [
            'Define product vision, strategy, and roadmap aligned with business goals',
            'Gather and prioritize product requirements from stakeholders and customers',
            'Write clear product specifications and user stories',
            'Work with engineering and design teams to deliver product features',
            'Define and track key product metrics and KPIs',
            'Conduct market research and competitive analysis',
            'Communicate product plans and progress to stakeholders',
            'Make data-driven decisions to optimize product performance',
            'Manage product backlog and prioritize features based on value',
            'Coordinate product launches and go-to-market activities'
        ]
    },
    'Marketing Manager': {
        description: `We are looking for a dynamic Marketing Manager to lead our marketing efforts. As a Marketing Manager, you will be responsible for developing and executing marketing strategies that drive brand awareness, customer acquisition, and revenue growth.

In this role, you will oversee marketing campaigns across multiple channels, manage marketing budgets, and analyze campaign performance. You will work with cross-functional teams to align marketing initiatives with business objectives and ensure consistent brand messaging.

The ideal candidate should have strong leadership and communication skills, experience with digital marketing channels, and a data-driven approach to marketing. You should be creative, analytical, and able to manage multiple projects simultaneously.

We offer an opportunity to make a significant impact on our brand and business growth. If you are passionate about marketing and want to drive results, we would love to hear from you.

Join our team and help build a strong brand that resonates with our target audience.`,
        skills: [
            'Digital Marketing', 'SEO/SEM', 'Social Media Marketing',
            'Content Strategy', 'Email Marketing', 'Analytics',
            'Brand Management', 'Campaign Management', 'Marketing Automation',
            'Budget Management'
        ],
        responsibilities: [
            'Develop and execute comprehensive marketing strategies',
            'Manage marketing campaigns across digital and traditional channels',
            'Oversee content creation and ensure brand consistency',
            'Analyze marketing performance and optimize campaigns',
            'Manage marketing budget and allocate resources effectively',
            'Collaborate with sales to generate and nurture leads',
            'Conduct market research to identify opportunities and trends',
            'Build and manage relationships with external partners and agencies',
            'Lead and mentor the marketing team',
            'Report on marketing metrics and ROI to leadership'
        ]
    },
    'HR Executive': {
        description: `We are seeking an experienced HR Executive to join our human resources team. As an HR Executive, you will be responsible for managing various HR functions including recruitment, employee relations, performance management, and HR policies.

In this role, you will support the organization's talent acquisition efforts, ensure compliance with labor laws, and contribute to creating a positive work environment. You will work closely with managers and employees to address HR-related issues and implement HR initiatives.

The ideal candidate should have strong interpersonal skills, knowledge of HR best practices, and experience with HR systems and processes. You should be organized, detail-oriented, and able to handle confidential information with discretion.

We offer an opportunity to contribute to building a strong organizational culture and supporting employee success. If you are passionate about human resources and want to make a difference, we encourage you to apply.

This position provides opportunities for professional growth in the HR field.`,
        skills: [
            'Recruitment', 'Employee Relations', 'HRIS', 'Payroll',
            'Performance Management', 'Labor Laws', 'Onboarding',
            'Training & Development', 'Communication', 'MS Office'
        ],
        responsibilities: [
            'Manage end-to-end recruitment process including sourcing, screening, and hiring',
            'Conduct employee onboarding and orientation programs',
            'Maintain employee records and HR documentation',
            'Handle employee queries and resolve workplace issues',
            'Administer payroll and benefits programs',
            'Ensure compliance with labor laws and company policies',
            'Support performance management processes',
            'Organize employee engagement activities and events',
            'Assist in developing and implementing HR policies',
            'Prepare HR reports and analytics for management'
        ]
    },
    'Content Writer': {
        description: `We are looking for a creative Content Writer to join our content team. As a Content Writer, you will be responsible for creating compelling, engaging, and SEO-friendly content across various platforms including websites, blogs, and social media.

In this role, you will research topics, write original content, and ensure that all content aligns with our brand voice and messaging. You will collaborate with the marketing team to develop content strategies that drive engagement and conversions.

The ideal candidate should have excellent writing and editing skills, creativity, and the ability to adapt writing style for different audiences and platforms. Experience with SEO and content management systems is a plus.

We offer an opportunity to showcase your writing skills and contribute to building a strong content presence. If you are passionate about writing and want to create content that resonates with audiences, we would love to hear from you.

Join our team and help tell our brand story through compelling content.`,
        skills: [
            'Content Writing', 'SEO Writing', 'Copywriting', 'Editing',
            'Research', 'Blog Writing', 'Social Media Content',
            'WordPress', 'Grammar', 'Creativity'
        ],
        responsibilities: [
            'Write original, engaging content for websites, blogs, and marketing materials',
            'Research topics and industry trends to create informed content',
            'Optimize content for SEO to improve search rankings',
            'Edit and proofread content to ensure accuracy and quality',
            'Collaborate with designers to create visually appealing content',
            'Manage content calendar and meet publishing deadlines',
            'Adapt writing style for different platforms and audiences',
            'Track content performance and suggest improvements',
            'Stay updated with content marketing trends and best practices',
            'Contribute to content strategy discussions'
        ]
    },
    'Business Analyst': {
        description: `We are seeking a detail-oriented Business Analyst to join our team. As a Business Analyst, you will be responsible for analyzing business processes, identifying opportunities for improvement, and translating business requirements into technical specifications.

In this role, you will work with stakeholders to understand their needs, document requirements, and work with development teams to deliver solutions. You will bridge the gap between business and technology, ensuring that solutions meet business objectives.

The ideal candidate should have strong analytical and communication skills, experience with business analysis methodologies, and the ability to work with both technical and non-technical stakeholders. Familiarity with agile methodologies and project management is a plus.

We offer an opportunity to contribute to important business initiatives and drive organizational improvement. If you are passionate about solving business problems and want to make an impact, we encourage you to apply.

This position provides opportunities for professional growth in business analysis and project management.`,
        skills: [
            'Business Analysis', 'Requirements Gathering', 'Process Mapping',
            'SQL', 'Documentation', 'Stakeholder Management',
            'Agile/Scrum', 'JIRA', 'Data Analysis', 'Visio'
        ],
        responsibilities: [
            'Gather and document business requirements from stakeholders',
            'Analyze current business processes and identify improvement opportunities',
            'Create detailed functional specifications and user stories',
            'Work with development teams to ensure requirements are understood',
            'Facilitate meetings and workshops with stakeholders',
            'Create process flow diagrams and documentation',
            'Support user acceptance testing and validation',
            'Track project progress and report to stakeholders',
            'Identify and manage project risks and issues',
            'Provide ongoing support and clarification during development'
        ]
    },
    'Digital Marketing Executive': {
        description: `We are looking for a results-driven Digital Marketing Executive to join our marketing team. As a Digital Marketing Executive, you will be responsible for planning and executing digital marketing campaigns across various channels to drive traffic, engagement, and conversions.

In this role, you will manage social media accounts, run paid advertising campaigns, optimize content for SEO, and analyze campaign performance. You will stay updated with digital marketing trends and implement strategies that achieve marketing goals.

The ideal candidate should have hands-on experience with digital marketing tools and platforms, strong analytical skills, and creativity. You should be able to work independently and as part of a team to deliver successful campaigns.

We offer an opportunity to work on diverse digital marketing initiatives and contribute to business growth. If you are passionate about digital marketing and want to drive results, we would love to hear from you.

Join our team and help build a strong digital presence for our brand.`,
        skills: [
            'Google Ads', 'Facebook Ads', 'SEO', 'Social Media Marketing',
            'Google Analytics', 'Email Marketing', 'Content Marketing',
            'Canva', 'Marketing Automation', 'HTML Basics'
        ],
        responsibilities: [
            'Plan and execute digital marketing campaigns across multiple channels',
            'Manage social media accounts and create engaging content',
            'Run and optimize paid advertising campaigns on Google, Facebook, etc.',
            'Implement SEO strategies to improve organic search rankings',
            'Analyze campaign performance using analytics tools',
            'Create email marketing campaigns and manage subscriber lists',
            'Collaborate with content team to develop marketing content',
            'Monitor industry trends and competitor activities',
            'Report on marketing KPIs and ROI',
            'Test and optimize landing pages for conversions'
        ]
    }
};

export default roleTemplates;
