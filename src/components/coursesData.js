// Centralized course data for use in CourseList, ProgramHeader, etc.
const courses = [
  {
    id: 1,
    title: 'Machine Learning Basics',
    description: 'Start your journey into machine learning with foundational concepts and hands-on projects.',
    duration: '5 weeks',
    startDate: '2025-07-15',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    category: 'Technology',
    programDescription: `Gain a solid foundation in machine learning by exploring key concepts such as supervised and unsupervised learning, model evaluation, and feature engineering. This program emphasizes practical skills through hands-on projects, enabling you to build, train, and deploy basic machine learning models using real-world datasets. This course also introduces you to the core principles of machine learning, including data preprocessing, algorithm selection, and performance metrics. You’ll work with popular tools and libraries, and develop the ability to solve classification and regression problems, preparing you for more advanced studies in AI.

You will also learn about the ethical implications of machine learning, how to avoid common pitfalls, and how to interpret model results. By the end of this course, you will have built several projects and be ready to tackle more advanced AI topics.` 
  },
  {
    id: 2,
    title: 'Artificial Intelligence Essentials',
    description: 'Understand the core ideas behind AI and its real-world applications.',
    duration: '6 weeks',
    startDate: '2025-08-01',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    category: 'Technology',
    programDescription: `Explore the fundamentals of artificial intelligence, including search algorithms, knowledge representation, and reasoning. Learn about the ethical implications and future trends in AI.

This course covers the history of AI, its current capabilities, and its impact on society. You will work on hands-on projects that demonstrate how AI is used in industries such as healthcare, finance, and transportation.

You will also learn about the challenges and limitations of AI, and how to evaluate AI systems for fairness and transparency.` 
  },
  {
    id: 3,
    title: 'Digital Marketing Strategies',
    description: 'Master digital marketing, SEO, and social media campaigns for business growth.',
    duration: '4 weeks',
    startDate: '2025-08-20',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
    category: 'Business',
    programDescription: `Learn to create, implement, and analyze digital marketing campaigns. Topics include SEO, SEM, content marketing, and analytics.

You will develop skills in social media marketing, email campaigns, and influencer partnerships. The course includes real-world case studies and hands-on projects to help you build a strong digital presence.

By the end, you will be able to design and execute comprehensive marketing strategies for any business or brand.` 
  },
  {
    id: 4,
    title: 'Data Analytics with Python',
    description: 'Analyze and visualize data using Python and industry-standard tools.',
    duration: '5 weeks',
    startDate: '2025-09-05',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    category: 'Technology',
    programDescription: `Learn to analyze, visualize, and interpret data using Python, pandas, and matplotlib. Build real-world analytics projects.

You will work with large datasets, clean and preprocess data, and create interactive dashboards. The course covers both basic and advanced analytics techniques.

By the end, you will be able to extract insights from data and communicate your findings effectively.` 
  },
  {
    id: 5,
    title: 'Business Intelligence Fundamentals',
    description: 'Learn BI concepts, dashboards, and reporting for smarter business decisions.',
    duration: '3 weeks',
    startDate: '2025-09-20',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    category: 'Business',
    programDescription: `Understand the basics of business intelligence, dashboard creation, and data-driven decision making.

You will learn to use BI tools to create reports, visualize KPIs, and support strategic planning. The course includes practical exercises and real-world business scenarios.

By the end, you will be able to design and implement BI solutions for any organization.` 
  },
  {
    id: 6,
    title: 'Content Marketing Mastery',
    description: 'Create compelling content and build your brand online.',
    duration: '4 weeks',
    startDate: '2025-10-01',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    category: 'Business',
    programDescription: `Master the art of content creation, distribution, and measurement for digital marketing success.

You will learn to craft engaging blog posts, videos, and social media content. The course covers content strategy, SEO, and analytics.

By the end, you will have a portfolio of content and a plan to grow your brand online.` 
  },
  {
    id: 7,
    title: 'Cloud Computing Foundations',
    description: 'Learn the basics of cloud platforms, deployment, and services.',
    duration: '5 weeks',
    startDate: '2025-10-10',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    category: 'Technology',
    programDescription: `Get introduced to cloud computing concepts, providers, and deployment models.

You will explore IaaS, PaaS, and SaaS, and learn to deploy applications on popular cloud platforms. The course includes hands-on labs and real-world scenarios.

By the end, you will understand how to leverage the cloud for business and technology solutions.` 
  },
  {
    id: 8,
    title: 'UI/UX Design Principles',
    description: 'Design user-friendly interfaces and experiences for web and mobile.',
    duration: '4 weeks',
    startDate: '2025-10-20',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    category: 'Design',
    programDescription: `Learn the fundamentals of user interface and user experience design for digital products.

You will create wireframes, prototypes, and user flows, and test your designs with real users. The course covers design thinking, usability, and accessibility.

By the end, you will be able to design intuitive and attractive digital experiences.` 
  },
  {
    id: 9,
    title: 'Project Management Professional',
    description: 'Master project management skills and methodologies.',
    duration: '6 weeks',
    startDate: '2025-11-01',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    category: 'Business',
    programDescription: `Develop project management expertise, including Agile and Waterfall methodologies.

You will learn to plan, execute, and close projects successfully, manage teams, and mitigate risks. The course includes real-world case studies and practical tools.

By the end, you will be prepared for project management certification exams and leadership roles.` 
  },
  {
    id: 10,
    title: 'Cybersecurity Essentials',
    description: 'Understand the fundamentals of cybersecurity and protection.',
    duration: '5 weeks',
    startDate: '2025-11-10',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    category: 'Technology',
    programDescription: `Learn about cybersecurity threats, best practices, and protection strategies.

You will study network security, encryption, and incident response. The course includes hands-on labs and real-world attack simulations.

By the end, you will know how to protect systems and data from cyber threats.` 
  },
  {
    id: 11,
    title: 'Financial Analysis & Modeling',
    description: 'Analyze financial data and build robust financial models.',
    duration: '4 weeks',
    startDate: '2025-11-20',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
    category: 'Business',
    programDescription: `Gain skills in financial analysis, forecasting, and model building.

You will learn to interpret financial statements, build Excel models, and evaluate investment opportunities. The course includes real-world case studies and projects.

By the end, you will be able to make informed financial decisions for businesses and clients.` 
  },
  {
    id: 12,
    title: 'Entrepreneurship & Innovation',
    description: 'Develop entrepreneurial skills and learn to innovate in business.',
    duration: '6 weeks',
    startDate: '2025-12-01',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    category: 'Business',
    programDescription: `Learn how to launch, manage, and grow innovative business ventures.

You will develop a business plan, pitch to investors, and learn from successful entrepreneurs. The course covers creativity, leadership, and market analysis.

By the end, you will have the skills and confidence to start your own business or drive innovation in your organization.` 
  }
];

export default courses;
