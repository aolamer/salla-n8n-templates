# Salla n8n Templates

A collection of pre-built n8n workflow templates for integrating Salla e-commerce platform with various services and databases.

## 🚀 Overview

This repository contains ready-to-use n8n workflow templates that help you integrate your Salla store with different platforms and services. These templates are designed to automate common e-commerce workflows and data synchronization tasks.

[Salla](https://salla.sa/) is a leading e-commerce platform in Saudi Arabia and the Middle East that allows merchants to create online stores and manage their business operations.

[n8n](https://n8n.partnerlinks.io/4wjly6af9vki) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[eCommerce Automation & Personalization](#eCommerce Automation & Personalization)  
[Installation](#installation) 
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  

## eCommerce Automation & Personalization
**[🚀 Join Our Community](https://www.linkedin.com/groups/10153121/)**
Building eCommerce automation tools? Connect with fellow developers, share insights, and discover cutting-edge approaches to personalization and automation in online retail.

**💡 What You'll Find**
Code reviews and architectural discussions
Integration patterns for eCommerce platforms
Performance optimization techniques
Real-world case studies from production environments
Early access to beta tools and libraries
Collaboration opportunities on open-source projects

**🤝 Who's Already There**
Frontend & Backend Developers building eCommerce solutions
DevOps Engineers scaling automated systems
Technical Leaders architecting personalization engines
Product Engineers implementing conversion optimization
Open Source Contributors sharing automation libraries


**[🔗 Join the eCommerce Automation & Personalization Community](https://www.linkedin.com/groups/10153121/)**
A space where code meets commerce. Share your implementations, get feedback on your approaches, and stay ahead of the latest trends in eCommerce technology.

## 📁 Available Templates

### 1. Salla to Supabase Integration (`n8n-supabase/`)

**Template**: `salla-supabase-n8n-template.json`

This template provides a complete workflow for synchronizing Salla store data with a Supabase database. It captures order events from Salla webhooks and automatically stores them in structured database tables.

#### Features:
- **Real-time Order Processing**: Captures `order.created` events from Salla webhooks
- **Data Transformation**: Converts Salla order JSON to Supabase-compatible records
- **Multi-table Support**: Handles customers, orders, and order line items
- **Event Routing**: Intelligent routing based on event types
- **Data Validation**: Ensures data integrity during transformation

#### Workflow Components:
1. **Salla Trigger**: Receives webhook events from Salla
2. **Event Routing**: Routes different event types to appropriate handlers
3. **Order Data Processing**: Transforms Salla order data to database format
4. **Route by Data Type**: Separates customer, order, and order line data
5. **Database Operations**:
   - Customer upsert (create or update)
   - Order insertion
   - Order line items insertion

#### Database Schema Requirements:
The template expects the following Supabase tables:

- **customers**: Store customer information
- **orders**: Store order details
- **order_lines**: Store individual order line items

#### Configuration Required:
- Salla OAuth2 credentials
- Supabase API credentials
- Webhook secret configuration
- Store ID mapping in the data processing code

## 🛠️ Installation & Setup

### Prerequisites
- n8n instance (self-hosted)
- Salla store with API access
- Target service credentials (e.g., Supabase account)

### Steps
1. **Download Template**: Download the desired template JSON file
2. **Import to n8n**: In your n8n instance, go to Workflows → Import from File
3. **Configure Credentials**: Set up the required credentials for each service
4. **Customize Mapping**: Modify data transformation logic as needed
5. **Test Workflow**: Use the built-in test data or create test webhooks
6. **Activate**: Enable the workflow to start processing live data

## 🔧 Customization

### Data Mapping
Each template includes JavaScript code for data transformation. You can modify these functions to:
- Add custom field mappings
- Implement business logic
- Handle additional data validation
- Support custom database schemas

### Event Handling
Templates can be extended to handle additional Salla events:
- `order.updated`
- `order.cancelled`
- `product.created`
- `customer.created`
- And more...

## 📊 Template Structure

Each template folder contains:
- **Template JSON file**: The main n8n workflow
- **Sample data**: Example webhook payloads for testing
- **Documentation**: Setup and configuration instructions

## 🤝 Contributing

Contributions are welcome! If you have additional templates or improvements:

1. Fork the repository
2. Create a feature branch
3. Add your template with proper documentation
4. Submit a pull request

### Template Guidelines
- Include comprehensive documentation
- Provide sample data for testing
- Follow consistent naming conventions
- Ensure error handling and data validation

## 🔗 Related Resources

- [Salla API Documentation](https://docs.salla.dev/)
- [n8n Documentation](https://docs.n8n.io/)
- [Supabase Documentation](https://supabase.com/docs)

## 📞 Support

For issues and questions:
- Create an issue in this repository
- Check the Salla Developer Community
- Visit n8n Community Forum

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: These templates are community-contributed and should be tested thoroughly before use in production environments. Always backup your data before implementing new workflows. 