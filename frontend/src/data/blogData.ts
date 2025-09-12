import type { BlogPost } from '../types/blog';
import type { BlogCategoryTab } from '../types/blog';

export const blogCategories: BlogCategoryTab[] = [
  { id: "Product Engineering", label: "Product Engineering", href: "product-engineering" },
  { id: "Cloud and DevOps", label: "Cloud and DevOps", href: "cloud-devops" },
  { id: "Data Engineering", label: "Data Engineering", href: "data-engineering" },
  { id: "AI and ML", label: "AI and ML", href: "ai-ml" },
  { id: "Digital & Experience Engineering", label: "Digital & Experience Engineering", href: "digital-experience" },
  { id: "News & Insights", label: "News & Insights", href: "news-insights" }
];

export const blogPosts: BlogPost[] = [
  // Data Engineering and Analytics Posts
  {
    id: 1,
    title: "Overcoming Overfitting in Decision Trees: A Deep Dive into Limiting Maximum Depth",
    description: "In the realm of predictive modeling, decision trees are a widely used tool for their interpretability and versatility. However, decision trees are prone to overfitting, where the model learns specific patterns and noise of the training data rather than underlying true patterns. Learn effective techniques to mitigate overfitting by focusing on limiting maximum depth and minimum samples per leaf.",
    category: "AI and ML",
    author: "Manjesh HB",
    date: "2 May, 2023",
    slug: "overcoming-overfitting-decision-trees",
    readingTime: 8,
    fullContent: `
# Introduction

In the realm of predictive modeling, decision trees are a widely used tool for their interpretability and versatility. However, decision trees are prone to **overfitting**, where the model learns specific patterns and noise of the training data rather than underlying true patterns.

## Understanding Overfitting in Decision Trees

Overfitting occurs when a model becomes too complex and starts memorizing the training data instead of learning generalizable patterns. In decision trees, this typically happens when:

- The tree grows too deep
- There are too few samples at leaf nodes
- The model captures noise in the data

## The Maximum Depth Solution

### What is Maximum Depth?

Maximum depth is a hyperparameter that limits how deep a decision tree can grow. By constraining the depth, we prevent the tree from creating overly specific rules that don't generalize well.

### Implementation Techniques

1. **Setting Optimal Depth**: Use cross-validation to find the optimal maximum depth
2. **Monitoring Performance**: Track training vs. validation accuracy
3. **Pruning Strategies**: Apply post-pruning techniques for better generalization

## Minimum Samples Per Leaf

Another effective technique is setting a minimum number of samples required at each leaf node. This prevents the tree from creating leaves with very few samples, which often represent noise.

### Best Practices

- Start with max_depth of 3-10 for most datasets
- Set min_samples_leaf to 1-5% of your training data
- Use grid search to optimize hyperparameters
- Always validate on unseen data

## Code Example

\`\`\`python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV

# Define parameter grid
param_grid = {
    'max_depth': [3, 5, 7, 10],
    'min_samples_leaf': [1, 5, 10, 20]
}

# Create decision tree classifier
dt = DecisionTreeClassifier()

# Perform grid search
grid_search = GridSearchCV(dt, param_grid, cv=5)
grid_search.fit(X_train, y_train)

# Get best parameters
best_params = grid_search.best_params_
\`\`\`

## Conclusion

By carefully tuning maximum depth and minimum samples per leaf, we can build decision trees that generalize well to new data while maintaining their interpretability advantage. Regular monitoring and validation are key to successful implementation.
`
  },
  {
    id: 2,
    title: "5 Ways to Ensure Data Accuracy and Reliability in Data as a Service with Open-Source Tools",
    description: "In today's digital age, businesses have access to a treasure trove of data that can enhance operations and customer experiences. This is where Data as a Service (DaaS) comes in. While DaaS offers immense benefits, data accuracy and reliability remain top concerns. Explore five open-source tools and strategies to overcome these challenges and maintain high-quality data in your DaaS ecosystem.",
    category: "Data Engineering",
    author: "Manjesh HB",
    date: "20 Sep, 2023",
    slug: "data-accuracy-reliability-daas-open-source",
    readingTime: 10,
    fullContent: `
# Introduction

In today's digital age, businesses have access to a treasure trove of data that can enhance operations and customer experiences. This is where **Data as a Service (DaaS)** comes in. While DaaS offers immense benefits, data accuracy and reliability remain top concerns.

## Understanding Data as a Service (DaaS)

DaaS is a cloud-based service model that provides data on-demand to users and applications. It eliminates the need for organizations to invest in expensive data infrastructure while ensuring access to high-quality, up-to-date information.

## 5 Essential Ways to Ensure Data Quality

### 1. Implement Data Validation with Apache Griffin

Apache Griffin is an open-source data quality service platform that provides:
- Real-time data profiling
- Data quality measurement
- Anomaly detection

\`\`\`python
# Example Griffin configuration
{
  "measure.type": "accuracy",
  "data.source": "kafka_stream",
  "validation.rules": [
    "completeness > 0.95",
    "uniqueness > 0.99"
  ]
}
\`\`\`

### 2. Data Lineage Tracking with Apache Atlas

Track your data journey from source to destination:
- Metadata management
- Data lineage visualization
- Impact analysis

### 3. Quality Monitoring with Great Expectations

Great Expectations helps you:
- Define data quality expectations
- Validate data automatically
- Generate data documentation

\`\`\`python
import great_expectations as ge

# Create expectation suite
df = ge.read_csv("data.csv")
df.expect_column_values_to_not_be_null("customer_id")
df.expect_column_values_to_be_between("age", 18, 100)
\`\`\`

### 4. Real-time Processing with Apache Kafka

Ensure data freshness and consistency:
- Stream processing
- Event-driven architecture
- Real-time validation

### 5. Data Governance with Apache Ranger

Implement comprehensive security:
- Access control policies
- Audit logging
- Data masking capabilities

## Best Practices for Implementation

1. **Start Small**: Begin with critical datasets
2. **Automate Everything**: Reduce manual interventions
3. **Monitor Continuously**: Set up alerts and dashboards
4. **Document Thoroughly**: Maintain clear data documentation
5. **Test Regularly**: Validate your validation processes

## Conclusion

By implementing these five strategies with open-source tools, organizations can build robust DaaS ecosystems that deliver accurate, reliable data while maintaining cost-effectiveness. The key is consistent monitoring and continuous improvement of data quality processes.
`
  },
  {
    id: 3,
    title: "How to Detect Person Names in Text Using SpaCy and Named Entity Recognition Algorithm",
    description: "Named Entity Recognition (NER) is a crucial task in Natural Language Processing (NLP) that involves identifying and categorizing named entities into predefined classes. These entities can include names of persons, organizations, locations, expressions of times, quantities, monetary values, percentages, and more. Learn how to train a NER model to specifically recognize person names using the spaCy library.",
    category: "AI and ML",
    author: "Varshith S",
    date: "7 Jul, 2023",
    slug: "detect-person-names-spacy-ner",
    readingTime: 7
  },
  {
    id: 4,
    title: "DDP Dissection Platform: Transforming Data into Actionable Insights",
    description: "The DDP Dissection Platform is a cutting-edge three-layered architecture solution that seamlessly combines Extract, Transform, Load (ETL), Artificial Intelligence (AI), and Visualization. It's your one-stop solution for unlocking insights from your data, making data-driven decisions, and achieving actionable results with advanced algorithms and customizable dashboards.",
    category: "Data Engineering",
    author: "SofTronicLabs Team",
    date: "15 Aug, 2023",
    slug: "ddp-dissection-platform-data-insights",
    readingTime: 6
  },
  {
    id: 5,
    title: "Analytics Solutions: Feature-Rich User Dashboards for Data-Driven Decisions",
    description: "Analytics solutions from SofTronicLabs concentrate on providing feature-rich user dashboards for underlying data. Our dashboards are highly customizable and configurable for user needs, with processing carried out using Python on big data platforms. We utilize open-source technologies to provide cost-effective solutions while maintaining strong security and user management features.",
    category: "Data Engineering",
    author: "SofTronicLabs Team",
    date: "10 Sep, 2023",
    slug: "analytics-solutions-user-dashboards",
    readingTime: 5
  },
  {
    id: 6,
    title: "Low Energy Computing: Embedded Systems and IoT Applications",
    description: "We are specialists in designing and developing applications for Embedded Systems with special interest in systems on chipboards and huge experience with ARM Cortex-A series processors. More than concentrating on board-level design and development, we focus our energies on engineering sustainable clustered applications on these powerful boards for farming, home automation, and sensor networks.",
    category: "Digital & Experience Engineering",
    author: "SofTronicLabs Team",
    date: "25 Jul, 2023",
    slug: "low-energy-computing-embedded-iot",
    readingTime: 8
  },
  {
    id: 7,
    title: "Gamification in Pedagogy: Transforming Learning Through Technology",
    description: "Pedagogy is the method and practice of teaching. We have embedded repeatable learning and practice modules in our Pedagogy platform in a game format to effectively teach the lessons required. We are successfully using the platform to help employees understand organizational compliance processes for risk management and train minds to use programmatic logic in writing computer programs.",
    category: "Digital & Experience Engineering",
    author: "SofTronicLabs Team",
    date: "5 Aug, 2023",
    slug: "gamification-pedagogy-learning-platform",
    readingTime: 6
  },
  {
    id: 8,
    title: "Internet of Things & Internet of Farming: Revolutionizing Agriculture",
    description: "Being specialists in designing and developing embedded applications, we focus on collating data from different units to a single platform. This gives rise to our single-point IoT platform designed to acquire data across different units into a common protocol IoT cloud. One key application is in agriculture, where we've pioneered customizing IoT platforms for the Internet of Farming, constantly researching plant growth and monitoring.",
    category: "Digital & Experience Engineering",
    author: "SofTronicLabs Team",
    date: "18 Sep, 2023",
    slug: "iot-internet-farming-agriculture",
    readingTime: 9
  },
  {
    id: 9,
    title: "Why Choose SofTronicLabs: Our Engineering Philosophy and Approach",
    description: "At SofTronicLabs, we listen, discuss, advise and develop solutions with a talent pool that has a great understanding of technology. This enables us to understand the pulse of our clients for predictive solution design and development. We offer feature-rich, professional products while believing in modern test technologies for Continuous Integration and Continuous Delivery (CICD) with high ROI.",
    category: "News & Insights",
    author: "SofTronicLabs Team",
    date: "1 Oct, 2023",
    slug: "why-choose-softroniclabs-philosophy",
    readingTime: 5
  },
  {
    id: 10,
    title: "SofTronicLabs Leadership: Engineering Excellence and Innovation",
    description: "Founded in 2017 by two passionate Indian engineers, Chethan G Puttaswamy and Tejashree S Sankangoudar, SofTronicLabs brings together decades of experience in technology engineering, business development, and innovation. Our leadership team is committed to solving complex technology challenges and delivering cutting-edge solutions.",
    category: "News & Insights",
    author: "SofTronicLabs Team",
    date: "15 Nov, 2023",
    slug: "softroniclabs-leadership-team",
    readingTime: 4
  },
  {
    id: 11,
    title: "Our Technical Expertise: From Cloud Computing to Embedded Systems",
    description: "SofTronicLabs provides comprehensive technology services including Software Development, Maintenance, Independent Validation Services, Cloud Services, and Technology Consulting. Our expertise spans development methodologies like Agile and CICD, with technology stacks including open-source solutions, cloud computing, embedded systems, IoT platforms, AI and Machine Learning, and data analytics.",
    category: "Product Engineering",
    author: "SofTronicLabs Team",
    date: "20 Dec, 2023",
    slug: "technical-expertise-comprehensive-services",
    readingTime: 7
  },
  {
    id: 12,
    title: "Industry Experience: From Automotive to Agriculture",
    description: "Our industry experience spans multiple sectors including Automotive, Medical, Robotics, Banking, E-commerce, Agriculture, Energy Management, and Hospitality. We've delivered projects across various industries, building strong client relationships based on trust and quality while maintaining steady growth since our founding in 2017.",
    category: "Product Engineering",
    author: "SofTronicLabs Team",
    date: "10 Jan, 2024",
    slug: "industry-experience-diverse-sectors",
    readingTime: 6
  }
];