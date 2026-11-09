KAYGEE EMS – DEVELOPER GUIDE

Project: KAYGEE EMS Paramedic Website & System
Organisation: Kaygee Emergency Medical Services
Industry: Emergency Medical Services (EMS)
Location: Phalaborwa, Limpopo, South Africa
Platform: Web-Based Application
Development Status: In Development
Document Type: Technical Developer Documentation

TABLE OF CONTENTS
Introduction
Purpose of This Developer Guide
Project Overview
System Architecture
Technology Stack
Development Environment Setup
Project Directory Structure
Frontend Development
Backend Development
Database Development and Management
Authentication and Access Control
Core System Modules
API Development and Integration
File and Asset Management
Security and Data Protection
Development Standards and Best Practices
Error Handling and Logging
Testing and Quality Assurance
Deployment and Configuration
Performance Optimisation
Version Control and Collaboration
Development Phases
Maintenance and Future Enhancements
Troubleshooting
Developer Responsibilities
Conclusion
1. INTRODUCTION

The KAYGEE EMS Paramedic Website & System is a web-based digital platform developed to support the administrative, operational, and communication requirements of Kaygee Emergency Medical Services.

The system is designed to combine a professional public-facing website with a centralised management platform that assists authorised personnel in managing emergency medical service information and operational activities.

The platform is intended to support the following areas:

Public access to company and service information.
Emergency assistance and service enquiries.
Administrator and staff account management.
Ambulance and fleet management.
Paramedic and personnel management.
Patient information management.
Emergency incident management.
Ambulance dispatch and coordination.
Medical transportation management.
Reporting, notifications, and administrative activities.

The system is being developed using HTML5, CSS3, JavaScript, PHP, and SQL.

2. PURPOSE OF THIS DEVELOPER GUIDE

This document provides technical guidance for developers responsible for developing, maintaining, extending, and improving the KAYGEE EMS platform.

It establishes a common understanding of the application's structure, development technologies, coding practices, and technical requirements.

The objectives of this guide are to:

Explain the overall system architecture.
Describe the purpose of individual project directories and files.
Provide guidance on setting up the development environment.
Establish frontend and backend development standards.
Explain database integration and management.
Document authentication and access control requirements.
Describe the functionality of the main system modules.
Establish security and data protection practices.
Provide testing and deployment guidelines.
Support future development, maintenance, and system expansion.

This guide should be used alongside the project's README.md, INSTALLATION.md, USER-GUIDE.md, SYSTEM-REQUIREMENTS.md, and CHANGELOG.md documents.

3. PROJECT OVERVIEW
3.1 Project Description

KAYGEE EMS is a digital platform intended to improve how Kaygee Emergency Medical Services communicates with the public and manages its internal activities.

The platform consists of two primary components:

A. Public Website

The public website provides information about the organisation, its emergency medical services, service areas, and available communication channels.

B. EMS Management System

The management system provides authorised administrators and EMS personnel with digital tools for managing organisational information and operational activities.

3.2 Target Users

The platform supports the following user groups:

User Group	Main Responsibilities
General Public	Access company information and request assistance.
Patients and Clients	Submit enquiries and request medical transportation.
Businesses	Request ambulance and emergency medical support.
Healthcare Facilities	Coordinate medical transportation.
Administrators	Manage users, services, enquiries, and system settings.
EMS Personnel	Access authorised operational information.
Paramedics	Manage assigned operational responsibilities.
3.3 System Objectives

The system should:

Provide a professional online presence.
Improve communication with clients and healthcare facilities.
Centralise administrative and operational information.
Support efficient ambulance and fleet management.
Improve the organisation of patient and incident records.
Support ambulance dispatch coordination.
Improve reporting and operational accountability.
Protect confidential organisational and patient information.
4. SYSTEM ARCHITECTURE
4.1 Architectural Overview

The KAYGEE EMS platform follows a modular web application architecture.

The application is organised into the following main layers:

Presentation Layer
Application Logic Layer
Backend Processing Layer
Data Access Layer
Database Layer
Presentation Layer

The presentation layer provides the user interface through which visitors, administrators, and EMS personnel interact with the application.

Technologies:

HTML5
CSS3
JavaScript

Responsibilities:

Display website pages.
Present dashboards and management interfaces.
Display forms, tables, and reports.
Handle user interactions.
Perform client-side form validation.
Provide responsive layouts.
Application Logic Layer

This layer contains the PHP application logic responsible for processing user requests and coordinating application functionality.

Responsibilities:

Process submitted forms.
Validate incoming information.
Manage authentication.
Enforce access permissions.
Coordinate database operations.
Process administrative and operational activities.
Backend Processing Layer

The backend contains dedicated PHP scripts responsible for individual application operations.

Examples include:

User registration and management.
Authentication and password recovery.
Ambulance management.
Paramedic management.
Patient management.
Incident processing.
Dispatch coordination.
Medical transportation.
Reporting and notifications.
Data Access Layer

The data access layer manages communication between PHP application components and the database.

It should provide reusable database operations through a centralised connection and query-handling approach.

PHP PDO is recommended for database connectivity and prepared SQL statements.

Database Layer

The database layer stores and organises the information required by the platform.

It is responsible for maintaining:

User accounts.
Staff and paramedic records.
Ambulance and fleet information.
Patient records.
Emergency incidents.
Dispatch assignments.
Medical transportation records.
Enquiries and service requests.
System notifications.
Audit records.
4.2 General Application Flow

A typical application request follows this process:

A user opens a website or system page.
The browser loads the HTML, CSS, and JavaScript resources.
The user interacts with the interface.
The browser submits a request to a PHP backend endpoint.
PHP validates the submitted information.
Authentication and permission checks are performed where required.
The backend communicates with the database.
The database returns the requested information or operation result.
PHP processes the response.
The browser displays the appropriate result.
5. TECHNOLOGY STACK

The project uses the following core development technologies.

Technology	Purpose
HTML5	Website and application structure.
CSS3	Styling, layouts, branding, and responsive design.
JavaScript	Frontend interactions and dynamic functionality.
PHP	Server-side application development.
SQL	Database creation, management, and queries.
MySQL/MariaDB	Recommended relational database engine.
Apache	Recommended web server.
Git	Source code version control.
GitHub	Remote repository and collaboration.
Visual Studio Code	Development environment.
5.1 HTML5

HTML5 is used to create the structural foundation of the application.

It is responsible for:

Page layouts.
Navigation menus.
Forms.
Tables.
Dashboard sections.
Content presentation.
Semantic website elements.

Developers should use semantic HTML elements such as:

<header>
<nav>
<main>
<section>
<article>
<footer>
<form>
5.2 CSS3

CSS3 controls the visual appearance and layout of the application.

The project separates styling into different files:

styles.css – Main website styling.
responsive.css – Mobile, tablet, and desktop responsiveness.
animations.css – Interface animations and transitions.
dashboard.css – Administration and operational dashboard styling.
print.css – Print-friendly layouts and reports.

Developers should maintain consistent branding, typography, colours, spacing, and component styles.

5.3 JavaScript

JavaScript provides frontend functionality and interactive user experiences.

The project separates JavaScript functionality into:

main.js – General application functionality.
navigation.js – Navigation and menu interactions.
validation.js – Client-side form validation.
notifications.js – User notifications and alerts.
charts.js – Dashboard charts and statistics.
maps.js – Map-related functionality.

JavaScript validation must not replace backend validation.

All important data must be validated again on the server.

5.4 PHP

PHP is the primary backend programming language.

It handles:

User authentication.
Session management.
User and staff management.
Database operations.
Form processing.
File uploads.
Emergency request processing.
Ambulance and fleet management.
Patient and incident records.
Dispatch operations.
Reporting and notifications.

Developers should use reusable PHP functions and organised backend modules to avoid duplicated code.

5.5 SQL

SQL is used to create, manage, and retrieve application data.

The database should use relational structures with appropriate primary keys, foreign keys, indexes, and constraints.

MySQL or MariaDB is recommended, although the final database engine should be confirmed in the project configuration.

6. DEVELOPMENT ENVIRONMENT SETUP
6.1 Required Software

Developers should have access to the following tools:

Visual Studio Code.
PHP.
MySQL or MariaDB.
Apache or another PHP-compatible web server.
Composer.
Git.
GitHub account.
Modern web browser.

A local development environment such as XAMPP, WAMP, or a separately configured Apache/PHP/MySQL environment may be used.

6.2 Project Setup

Follow these general steps when preparing the project locally.

Step 1: Obtain the project source code

Clone the project repository:

bash
git clone <repository-url>


Alternatively, download the project source code from the repository.

Step 2: Open the project

Open the KAYGEE EMS project directory in Visual Studio Code.

Step 3: Configure the web server

Place the project in the appropriate web server document directory.

For example, with XAMPP:

text
C:/xampp/htdocs/KAYGEE-EMS/


Step 4: Configure the environment

Create or update the .env file with the appropriate environment configuration.

Example:

env
APP_NAME="KAYGEE EMS"
APP_ENV=development
APP_DEBUG=false
APP_URL=http://localhost/KAYGEE-EMS

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=kaygee_ems
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password


These are illustrative configuration variables. The application must implement environment-variable loading before using them.

Step 5: Install PHP dependencies

If the project uses Composer dependencies, run:

bash
composer install


Step 6: Create the database

Create the project database using phpMyAdmin or a database management tool.

Import the database schema:

text
database/schema.sql


Step 7: Configure the database connection

Update the relevant database configuration to match the local environment.

Step 8: Start the application

Start Apache and MySQL and access the project through the configured local URL.

Example:

text
http://localhost/KAYGEE-EMS/

7. PROJECT DIRECTORY STRUCTURE

The application follows a modular directory structure that separates public pages, backend functionality, database resources, shared components, and supporting files.

7.1 Root Directory
File/Directory	Purpose
index.html	Main application entry point.
.htaccess	Apache configuration and URL access rules.
.env	Environment-specific configuration.
.gitignore	Files excluded from Git version control.
composer.json	PHP dependency management.
assets/	Images, videos, icons, and fonts.
css/	Application stylesheets.
js/	JavaScript functionality.
pages/	Public and authenticated application pages.
includes/	Reusable PHP components.
backend/	Server-side processing scripts.
api/	Application API endpoints.
database/	Database schemas, migrations, seeds, and backups.
uploads/	Uploaded documents and application files.
logs/	Application and authentication logs.
miscellaneous/	Project documentation and supporting files.
7.2 Assets Directory

The assets/ directory contains the visual resources used throughout the application.

text
assets/
├── images/
│   ├── logo/
│   ├── ambulances/
│   ├── paramedics/
│   ├── emergency-services/
│   └── backgrounds/
├── videos/
│   └── kaygee-ems/
├── icons/
└── fonts/


Developers should use descriptive filenames and optimise image and video files before adding them to the project.

7.3 Pages Directory

The pages/ directory contains the application's user-facing pages.

Public Pages
text
pages/public/
├── home.php
├── about.php
├── services.php
├── service-areas.php
├── request-assistance.php
├── faqs.php
└── contact.php


These pages provide public information and communication functionality.

Authentication Pages
text
pages/authentication/
├── login.php
├── forgot-password.php
└── reset-password.php


These pages support secure access to the management system.

Administration Pages
text
pages/administration/
├── dashboard.php
├── user-management.php
├── staff-management.php
├── service-management.php
├── enquiry-management.php
├── request-management.php
├── reports-analytics.php
└── system-settings.php


These pages provide administrative management functionality.

EMS Operations Pages
text
pages/ems-operations/
├── dashboard.php
├── ambulance-management.php
├── fleet-management.php
├── paramedic-management.php
├── patient-management.php
├── incident-management.php
├── dispatch-management.php
└── medical-transport.php


These pages support authorised operational personnel.

Utilities Pages
text
pages/utilities/
├── notifications.php
├── help-support.php
├── 403.php
├── 404.php
└── 500.php


These pages provide supporting functionality and application error handling.

7.4 Includes Directory

The includes/ directory contains reusable PHP components.

File	Responsibility
header.php	Shared page header.
footer.php	Shared page footer.
navigation.php	Main navigation.
sidebar.php	Dashboard sidebar.
database.php	Database connectivity.
auth.php	Authentication functionality.
permissions.php	Access control and permissions.
functions.php	Shared application functions.

Developers should reuse these components instead of duplicating common functionality across multiple pages.

7.5 Backend Directory

The backend/ directory contains PHP scripts responsible for processing application operations.

text
backend/
├── authentication/
├── administration/
├── ems-operations/
├── recruitment/
└── utilities/


Each backend module should focus on a specific application responsibility.

For example:

backend/administration/users.php processes user management operations.
backend/ems-operations/ambulances.php processes ambulance management operations.
backend/ems-operations/incidents.php processes incident-related operations.
backend/recruitment/submit-application.php processes recruitment submissions.
7.6 API Directory

The api/ directory provides endpoints for communication between the frontend and backend.

text
api/
├── users/
├── ambulances/
├── paramedics/
├── patients/
├── incidents/
├── dispatch/
└── reports/


API endpoints should return consistent responses and enforce authentication and permissions where required.

7.7 Database Directory

The database/ directory contains database-related resources.

text
database/
├── schema.sql
├── connection.php
├── migrations/
├── seeds/
└── backups/

schema.sql defines the database structure.
connection.php provides database connectivity if this is the chosen connection entry point.
migrations/ contains database structure changes.
seeds/ contains initial or development data.
backups/ contains controlled database backup files.

Database credentials must never be stored in publicly accessible files.

8. FRONTEND DEVELOPMENT
8.1 Frontend Structure

Frontend development is primarily handled through HTML5, CSS3, and JavaScript.

The frontend should provide a consistent and accessible experience across all public and authenticated pages.

8.2 Page Development

When developing a new page:

Identify the page's purpose.
Determine its intended user group.
Reuse the existing header and footer where appropriate.
Apply the project's existing styling conventions.
Ensure responsive behaviour.
Connect forms and interactive elements to the appropriate backend functionality.
Test the page across supported browsers.
8.3 Responsive Design

The website must support:

Desktop computers.
Laptops.
Tablets.
Smartphones.

CSS media queries should be maintained in responsive.css.

Developers should ensure that navigation, tables, forms, dashboards, and other components remain usable on smaller screens.

8.4 JavaScript Functionality

JavaScript should be organised according to its intended functionality.

Example:

javascript
document.addEventListener("DOMContentLoaded", () => {
    console.log("KAYGEE EMS application loaded.");
});


Use reusable functions and avoid placing all JavaScript functionality inside a single file.

8.5 Form Validation

Forms should use both client-side and server-side validation.

Frontend validation may include:

Required fields.
Email format.
Telephone number format.
Input length restrictions.
File type restrictions.
Confirmation messages.

The backend must independently validate all submitted information.

9. BACKEND DEVELOPMENT
9.1 Backend Architecture

PHP handles the server-side functionality of the KAYGEE EMS platform.

Backend scripts should be separated into modules according to their responsibilities.

9.2 PHP Development Standards

Developers should:

Use descriptive function and variable names.
Follow consistent PHP formatting.
Separate application logic from presentation where practical.
Use reusable functions.
Validate incoming data.
Use prepared SQL statements.
Handle errors appropriately.
Avoid exposing internal server information.
Protect sensitive operations through authentication and authorisation.
9.3 Request Processing

A typical backend operation should follow this sequence:

Receive the HTTP request.
Verify the request method.
Validate the user's session where required.
Check the user's permissions.
Validate and sanitise submitted information.
Process the application operation.
Execute database operations.
Record relevant activity.
Return an appropriate response.
9.4 Example PHP Database Connection

The following is an illustrative PDO connection implementation.

php
<?php

$host = getenv('DB_HOST');
$dbname = getenv('DB_DATABASE');
$username = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD');

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );

} catch (PDOException $e) {
    error_log($e->getMessage());

    http_response_code(500);
    exit('A database connection error occurred.');
}


This implementation assumes environment variables have already been loaded.

9.5 Database Queries

Use prepared statements when interacting with the database.

Example:

php
<?php

$sql = "SELECT id, name, email
        FROM users
        WHERE id = :id";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    ':id' => $userId
]);

$user = $stmt->fetch();


Avoid directly inserting user-provided information into SQL queries.

10. DATABASE DEVELOPMENT AND MANAGEMENT
10.1 Database Overview

The database serves as the central storage system for the KAYGEE EMS platform.

It should maintain structured and related records for administrative and operational activities.

10.2 Recommended Database Modules

The database should support the following logical entities:

Database Entity	Purpose
users	Application user accounts.
roles	System roles.
permissions	Access permissions.
staff	Employee information.
paramedics	Paramedic profiles and qualifications.
ambulances	Ambulance vehicle records.
fleet_maintenance	Vehicle maintenance information.
patients	Patient information.
incidents	Emergency incident records.
dispatches	Ambulance dispatch assignments.
medical_transports	Patient transportation records.
enquiries	Public enquiries.
service_requests	Submitted service requests.
services	Available EMS services.
notifications	System notifications.
audit_logs	Important application activity records.

These are recommended logical entities, not confirmation that all corresponding database tables have already been implemented.

10.3 Database Design Principles

Developers should:

Use primary keys for unique record identification.
Use foreign keys to maintain relationships.
Apply appropriate data types.
Use indexes for frequently searched fields.
Avoid unnecessary duplication.
Apply database constraints.
Maintain referential integrity.
Use transactions for related multi-step operations.
10.4 Database Migrations

Database structure changes should be documented through migration files.

Example:

text
database/migrations/
├── 001_create_users_table.sql
├── 002_create_roles_table.sql
├── 003_create_staff_table.sql
├── 004_create_ambulances_table.sql
└── 005_create_incidents_table.sql


Migration filenames should indicate their purpose and execution order.

10.5 Database Backups

Database backups should be performed regularly.

A backup strategy should include:

Scheduled database backups.
Secure backup storage.
Restricted backup access.
Backup retention policies.
Periodic restoration testing.

Database backups must not be exposed through public web directories.

11. AUTHENTICATION AND ACCESS CONTROL
11.1 Authentication Overview

Authentication ensures that only authorised users can access protected areas of the KAYGEE EMS management system.

The authentication module is located in:

text
backend/authentication/

11.2 Authentication Features

The system should support:

Administrator login.
User authentication.
Secure logout.
Password recovery.
Password resetting.
Session management.
Account access restrictions.
11.3 Password Security

Passwords must never be stored in plain text.

PHP provides secure password hashing functionality.

Example:

php
$hashedPassword = password_hash(
    $password,
    PASSWORD_DEFAULT
);


Password verification:

php
if (password_verify($password, $hashedPassword)) {
    // Authentication successful.
}

11.4 Session Management

Developers should implement:

Secure session configuration.
Session ID regeneration after authentication.
Session timeout policies.
Session destruction during logout.
Appropriate cookie security settings.
Protection against session fixation.
11.5 Role-Based Access Control

The application should use role-based access control to determine which users can access specific functionality.

Suggested roles include:

Role	Access Responsibilities
Super Administrator	Full system administration.
Administrator	General system administration.
Operations Manager	Operational management.
Dispatcher	Ambulance dispatch and coordination.
Paramedic	Authorised operational and assigned records.
General Staff	Permissions based on assigned responsibilities.

The final role structure should be confirmed against organisational requirements.

Access control must be enforced on the server, not only by hiding frontend navigation links.

12. CORE SYSTEM MODULES

This section explains the responsibilities of the main application modules.

12.1 Public Website Module

Location:

text
pages/public/


Responsibilities:

Display the company homepage.
Present company information.
Display emergency medical services.
Provide service area information.
Present frequently asked questions.
Provide contact information.
Allow visitors to submit enquiries and assistance requests.
12.2 Administration Module

Location:

text
pages/administration/
backend/administration/


Responsibilities:

Display the administrative dashboard.
Manage system users.
Manage staff information.
Manage EMS services.
Manage enquiries.
Manage submitted service requests.
Generate reports.
Configure system settings.
12.3 Ambulance and Fleet Management Module

Location:

text
pages/ems-operations/ambulance-management.php
pages/ems-operations/fleet-management.php

backend/ems-operations/ambulances.php
backend/ems-operations/fleet.php


Responsibilities:

Register ambulances.
Update vehicle information.
Maintain vehicle registration details.
Track ambulance availability.
Monitor vehicle operational status.
Maintain maintenance records.
Support fleet reporting.
12.4 Paramedic Management Module

Location:

text
pages/ems-operations/paramedic-management.php
backend/ems-operations/paramedics.php


Responsibilities:

Register paramedics.
Maintain personnel profiles.
Record qualifications.
Maintain employment information.
Manage staff availability.
Support operational personnel assignments.
12.5 Patient Management Module

Location:

text
pages/ems-operations/patient-management.php
backend/ems-operations/patients.php


Responsibilities:

Capture patient information.
Maintain patient records.
Store authorised medical information.
Retrieve patient records.
Associate patients with incidents and transports.
Restrict access to confidential patient information.

Patient information must only be accessible to authorised personnel with a legitimate operational need.

12.6 Incident Management Module

Location:

text
pages/ems-operations/incident-management.php
backend/ems-operations/incidents.php


Responsibilities:

Capture emergency incidents.
Record incident locations.
Store incident descriptions.
Track incident statuses.
Associate incidents with patients.
Associate incidents with assigned personnel.
Maintain historical incident records.
12.7 Dispatch Management Module

Location:

text
pages/ems-operations/dispatch-management.php
backend/ems-operations/dispatch.php


Responsibilities:

Receive operational service requests.
Assign available ambulances.
Assign authorised personnel.
Track dispatch statuses.
Maintain dispatch history.
Monitor ongoing assignments.

Dispatch information should be updated accurately to support operational coordination.

The platform should not be treated as a replacement for established emergency communication and dispatch procedures unless formally approved for that purpose.

12.8 Medical Transport Module

Location:

text
pages/ems-operations/medical-transport.php
backend/ems-operations/medical-transport.php


Responsibilities:

Record transportation requests.
Capture collection locations.
Capture destination information.
Associate patients with transport records.
Assign ambulances and personnel.
Track transportation status.
Maintain completed transport history.
12.9 Recruitment Module

Location:

text
backend/recruitment/
├── submit-application.php
├── upload-cv.php
└── application-process.php


Responsibilities:

Receive employment applications.
Capture applicant information.
Accept CV uploads.
Process submitted applications.
Maintain recruitment records.

Uploaded CVs and supporting documents must be securely stored and accessible only to authorised recruitment personnel.

12.10 Reporting and Analytics Module

Location:

text
backend/utilities/reports.php
pages/administration/reports-analytics.php


Responsibilities:

Generate administrative reports.
Display operational statistics.
Summarise ambulance availability.
Summarise incident activity.
Track dispatch activity.
Present transportation records.
Support organisational decision-making.

Reports containing sensitive information must follow the same access restrictions as the underlying records.

13. API DEVELOPMENT AND INTEGRATION
13.1 API Overview

The API directory provides a structured way for the frontend and other authorised application components to communicate with backend functionality.

API endpoints should be organised by module.

Examples:

text
api/users/
api/ambulances/
api/paramedics/
api/patients/
api/incidents/
api/dispatch/
api/reports/

13.2 API Development Guidelines

Developers should:

Use appropriate HTTP methods.
Validate incoming requests.
Authenticate protected API requests.
Enforce permissions.
Use prepared SQL statements.
Return consistent responses.
Handle application errors.
Avoid exposing confidential information.
13.3 HTTP Methods
Method	Intended Use
GET	Retrieve information.
POST	Create records or submit information.
PUT	Replace or update resources.
PATCH	Partially update resources.
DELETE	Remove resources where authorised.
13.4 Example JSON Response

Successful response:

json
{
    "success": true,
    "message": "Record retrieved successfully.",
    "data": {
        "id": 1
    }
}


Error response:

json
{
    "success": false,
    "message": "The requested operation could not be completed.",
    "data": null
}


The API should avoid returning database credentials, stack traces, internal file paths, or unnecessary patient information.

14. FILE AND ASSET MANAGEMENT
14.1 Upload Directory

The project uses the following upload structure:

text
uploads/
├── profiles/
├── staff/
├── patients/
├── incidents/
└── documents/


This directory stores application files uploaded by authorised users or submitted through public-facing forms.

14.2 File Upload Security

All uploads must be validated on the server.

Developers should:

Restrict permitted file extensions.
Validate actual file content and MIME types.
Apply file size limits.
Generate random filenames.
Prevent executable uploads.
Store sensitive documents outside the public web root where practical.
Restrict access to uploaded documents.
Scan uploaded files where appropriate.

Never trust a filename or MIME type supplied by the browser.

14.3 Asset Optimisation

Images and videos should be optimised to reduce loading times.

Recommended practices:

Compress images.
Use modern image formats where supported.
Avoid unnecessarily large videos.
Use descriptive filenames.
Reuse existing assets where appropriate.
Apply lazy loading to suitable images.
15. SECURITY AND DATA PROTECTION

Security is a critical requirement because the KAYGEE EMS platform may process sensitive personal, patient, employee, and operational information.

15.1 Application Security

Developers must consider the following security risks:

SQL injection.
Cross-site scripting (XSS).
Cross-site request forgery (CSRF).
Unauthorised access.
Session hijacking.
Insecure file uploads.
Password exposure.
Sensitive information disclosure.
15.2 SQL Injection Prevention

Use PDO prepared statements and parameterised queries.

Never construct SQL queries by directly concatenating untrusted user input.

15.3 Cross-Site Scripting Prevention

Escape untrusted information before displaying it in HTML.

Example:

php
<?= htmlspecialchars(
    $userInput,
    ENT_QUOTES,
    'UTF-8'
); ?>

15.4 CSRF Protection

Forms that perform sensitive operations should use CSRF tokens.

The server must verify the token before processing the submitted operation.

15.5 HTTPS

The production application should use HTTPS to protect information transmitted between the browser and server.

15.6 Environment Configuration

Sensitive credentials should be stored in environment variables or protected configuration files.

The .env file must:

Be excluded from Git.
Be inaccessible through public web requests.
Never be included in public downloads.
Contain production credentials only in appropriately protected environments.
15.7 POPIA Compliance

The platform should be developed with the requirements of the Protection of Personal Information Act (POPIA) of South Africa in mind.

Developers should support:

Lawful and appropriate processing of personal information.
Purpose limitation.
Data minimisation.
Appropriate access restrictions.
Secure information storage.
Protection against unauthorised disclosure.
Appropriate retention and disposal procedures.
Procedures for handling data access and correction requests.

Patient and medical information requires particularly careful handling.

POPIA compliance must be assessed across the organisation's policies, processes, and technical controls; implementing software security measures alone does not establish legal compliance.

16. DEVELOPMENT STANDARDS AND BEST PRACTICES
16.1 Naming Conventions

Use descriptive and consistent filenames.

Examples:

text
user-management.php
ambulance-management.php
incident-management.php
dispatch-management.php


Use descriptive PHP function names:

php
createUser();
updateAmbulance();
getPatientRecords();
assignAmbulance();
generateOperationalReport();

16.2 Code Organisation

Developers should:

Keep files focused on their intended responsibilities.
Reuse shared components.
Avoid unnecessary code duplication.
Separate frontend and backend functionality.
Use consistent indentation.
Write readable and maintainable code.
Remove unused code.
Document complex functionality.
16.3 Comments and Documentation

Comments should explain important logic and complex application processes.

Example:

php
/**
 * Retrieves an ambulance record by its unique ID.
 *
 * @param PDO $pdo Database connection.
 * @param int $ambulanceId Ambulance identifier.
 * @return array|false Ambulance record or false.
 */

16.4 Input Handling

All information received from users must be treated as untrusted.

Validate:

Text fields.
Email addresses.
Telephone numbers.
Dates.
Numeric values.
File uploads.
Identifiers.
Request parameters.
16.5 Database Transactions

Use database transactions for operations involving multiple related database changes.

This helps prevent partially completed operations.

17. ERROR HANDLING AND LOGGING
17.1 Logging Structure

The project contains the following log files:

text
logs/
├── application.log
├── authentication.log
└── errors.log

application.log

Used for general application activity and relevant system events.

authentication.log

Used for relevant authentication events, such as successful and unsuccessful login attempts.

errors.log

Used for application and backend error reporting.

17.2 Error Handling

Developers should:

Catch expected application exceptions.
Log relevant technical errors.
Return appropriate error responses.
Avoid exposing sensitive internal information.
Provide understandable messages to users.
Use appropriate HTTP status codes.
17.3 Error Pages

The project provides:

403.php – Access forbidden.
404.php – Requested resource not found.
500.php – Internal server error.

These pages should maintain the application's visual identity while providing appropriate error information.

18. TESTING AND QUALITY ASSURANCE

Testing is necessary to ensure that the platform functions correctly, securely, and consistently.

18.1 Frontend Testing

Test:

Page loading.
Navigation.
Responsive layouts.
Forms.
Buttons.
Modals.
Notifications.
Dashboard components.
Browser compatibility.
18.2 Backend Testing

Test:

Form submissions.
Authentication.
Session handling.
Database operations.
User permissions.
API responses.
File uploads.
Error handling.
18.3 Database Testing

Test:

Database connections.
Record creation.
Record retrieval.
Record updates.
Record deletion where permitted.
Foreign key relationships.
Data validation.
Transactions.
Backup restoration.
18.4 Security Testing

Test for:

SQL injection.
XSS vulnerabilities.
CSRF protection.
Unauthorised access.
Weak authentication controls.
Insecure file uploads.
Information disclosure.
Session management weaknesses.
18.5 Browser Compatibility

The application should be tested using:

Google Chrome (latest).
Mozilla Firefox (latest).
Microsoft Edge (latest).
Safari (latest).
18.6 User Acceptance Testing

Authorised KAYGEE EMS representatives should verify that the application meets the organisation's operational and administrative requirements.

Testing should include representative public website activities and administrative and EMS operational workflows.

18.7 Testing Checklist
Public website pages load correctly.
Navigation functions correctly.
Website layouts are responsive.
Contact forms submit correctly.
Assistance request forms validate information.
Authentication functions correctly.
Protected pages restrict unauthorised access.
User management operations work correctly.
Ambulance records can be managed.
Paramedic records can be managed.
Patient records are protected.
Incident records can be managed.
Dispatch operations are validated.
Medical transport records are maintained.
Reports display appropriate information.
Notifications function correctly.
Error pages display appropriately.
Database backups can be restored.
Security controls have been reviewed.
19. DEPLOYMENT AND CONFIGURATION
19.1 Deployment Overview

Deployment involves preparing the application for installation and use within a production hosting environment.

The production environment should provide:

A compatible PHP runtime.
MySQL or MariaDB database support.
Apache or another compatible web server.
HTTPS support.
Secure environment configuration.
Appropriate storage permissions.
Database backup facilities.
19.2 Pre-Deployment Checklist

Before deployment:

Review the application code.
Test all implemented functionality.
Verify database connectivity.
Apply database migrations.
Configure production environment variables.
Disable public error display.
Enable appropriate error logging.
Configure HTTPS.
Verify authentication and permissions.
Review file upload restrictions.
Configure backup procedures.
Verify directory permissions.
Test the production application.
19.3 Production Configuration

Production configuration should use:

env
APP_ENV=production
APP_DEBUG=false


The application should not expose debugging information to public users.

19.4 Apache Configuration

The .htaccess file may be used for:

URL rewriting.
Directory access restrictions.
Security-related headers.
Blocking access to sensitive files.
Error page configuration.

Sensitive directories, including configuration, logs, backups, and private uploads, should not be publicly accessible.

20. PERFORMANCE OPTIMISATION

The application should be optimised to provide an efficient and reliable user experience.

20.1 Frontend Optimisation
Minimise unnecessary CSS and JavaScript.
Compress images.
Optimise videos.
Reduce unnecessary HTTP requests.
Use browser caching where appropriate.
Load non-critical resources efficiently.
20.2 Backend Optimisation
Use efficient SQL queries.
Avoid unnecessary database requests.
Use database indexes appropriately.
Implement pagination for large datasets.
Reuse database connections appropriately.
Avoid unnecessary processing.
Use caching where appropriate.
20.3 Database Optimisation
Index frequently searched columns.
Review slow queries.
Avoid unnecessary duplicated records.
Retrieve only required fields.
Use appropriate relational structures.
Monitor database performance.
21. VERSION CONTROL AND COLLABORATION
21.1 Git and GitHub

Git should be used to track changes to the application source code.

GitHub can be used to host the project repository and support collaboration.

21.2 Recommended Branch Structure
text
main
│
├── development
│
├── feature/public-website
├── feature/authentication
├── feature/administration
├── feature/ems-operations
├── feature/api-development
│
└── hotfix/security-fix

21.3 Commit Message Guidelines

Commit messages should clearly explain the changes introduced.

Examples:

bash
git commit -m "Add public website homepage"
git commit -m "Implement administrator authentication"
git commit -m "Add ambulance management module"
git commit -m "Improve patient record validation"
git commit -m "Fix dispatch management errors"

21.4 Standard Git Workflow
Pull the latest changes.
Create a feature branch.
Implement the required functionality.
Test the changes.
Commit the changes.
Push the feature branch.
Create a pull request.
Review and approve the changes.
Merge into the appropriate branch.
21.5 Files That Should Not Be Committed

The following should generally be excluded from Git:

.env files containing secrets.
Production database credentials.
Private patient records.
Uploaded confidential documents.
Runtime log files.
Temporary files.
Local development configuration.
Sensitive database backups.

The .gitignore file should enforce these exclusions.

22. DEVELOPMENT PHASES

The development of the KAYGEE EMS platform is divided into four main phases.

PART 1: PUBLIC WEBSITE AND COMPANY INFORMATION

Objective: Establish the public-facing foundation of the platform.

Main functionality:

Homepage.
About Us page.
Services page.
Service area information.
Contact page.
Frequently asked questions.
Public website navigation.
Responsive layouts.
Initial application structure.

Development focus: HTML5, CSS3, JavaScript, and the initial PHP application structure.

PART 2: ADMINISTRATION DASHBOARD AND BACKEND MANAGEMENT

Objective: Introduce centralised administrative functionality.

Main functionality:

Administrator authentication.
User management.
Staff management.
EMS service management.
Enquiry management.
Service request management.
Database integration.
Backend processing.
Role-based access control.
Administrative dashboard.

Development focus: PHP, SQL, authentication, database integration, and administration.

PART 3: EMS OPERATIONS AND AMBULANCE MANAGEMENT

Objective: Extend the platform to support EMS operational management.

Main functionality:

Ambulance management.
Fleet management.
Paramedic management.
Patient management.
Incident management.
Ambulance dispatch.
Medical transportation.
Operational dashboards.
Reporting and notifications.

Development focus: Operational workflows, database relationships, access control, and backend integration.

PART 4: TESTING, SECURITY, DEPLOYMENT AND OPTIMISATION

Objective: Prepare the platform for reliable practical use.

Main functionality:

Functional testing.
Integration testing.
Security testing.
Performance optimisation.
Database optimisation.
Deployment configuration.
Backup and recovery.
Documentation.
Bug fixing.
User acceptance testing.

Development focus: Reliability, security, performance, maintainability, and production readiness.

23. MAINTENANCE AND FUTURE ENHANCEMENTS

The KAYGEE EMS platform should be maintained and improved as the organisation's operational requirements evolve.

Potential future enhancements include:

23.1 Advanced Dispatch Management
Improved dispatch coordination.
Enhanced ambulance availability monitoring.
Dispatch history.
Operational status updates.
Better assignment visibility.
23.2 Real-Time Operational Monitoring
Live operational dashboards.
Updated incident statuses.
Ambulance location integration where appropriate.
Operational activity monitoring.
23.3 Advanced Reporting
Monthly operational reports.
Ambulance utilisation reports.
Incident statistics.
Transportation summaries.
Staff activity reports.
23.4 External Integrations

Potential integrations may include:

Mapping services.
Email notification providers.
SMS notification providers.
Secure document management.
Approved third-party healthcare systems.

External integrations should be evaluated for security, cost, reliability, and compliance before implementation.

23.5 Mobile Accessibility

Future development may include improvements to mobile access for authorised EMS personnel and administrators.

Any mobile operational functionality should be designed around secure access, usability, and operational reliability.

23.6 Continuous Improvement

Developers should regularly:

Review application performance.
Update dependencies.
Fix reported bugs.
Review security controls.
Improve existing functionality.
Update documentation.
Maintain database integrity.
Review user feedback.
24. TROUBLESHOOTING

The following table provides guidance for common development problems.

Problem	Possible Cause	Recommended Solution
Database connection failed	Incorrect database credentials.	Verify database configuration.
PHP page not loading	PHP syntax error.	Check PHP error logs.
Page displays 404	Incorrect URL or missing file.	Verify file location and routing.
Login unsuccessful	Incorrect credentials or authentication issue.	Review authentication logic and account status.
Session expires unexpectedly	Session configuration issue.	Review session timeout and cookie settings.
CSS not loading	Incorrect asset path.	Check stylesheet references.
JavaScript not working	JavaScript errors.	Inspect browser developer tools.
File upload fails	File restrictions or permissions.	Review upload validation and storage permissions.
API returns an error	Invalid request or backend issue.	Review endpoint logic and application logs.
Database query fails	SQL syntax or schema mismatch.	Review the query and database structure.
Access denied	Insufficient permissions.	Review assigned roles and permissions.

Developers should consult application logs and browser developer tools before making changes to application code.

25. DEVELOPER RESPONSIBILITIES

Developers working on the KAYGEE EMS platform are responsible for maintaining the quality, security, and reliability of the application.

Responsibilities include:

Understanding the existing application architecture.
Following the project directory structure.
Writing maintainable code.
Implementing secure backend functionality.
Maintaining database integrity.
Testing newly developed functionality.
Protecting patient and organisational information.
Documenting technical changes.
Maintaining version control.
Reporting and resolving bugs.
Updating relevant project documentation.
Supporting future application improvements.

Developers must take particular care when modifying patient management, incident management, and dispatch functionality because these modules may support sensitive operational activities.

The platform should complement established EMS operational procedures and must not replace approved emergency response processes without formal organisational approval.

26. CONCLUSION

The KAYGEE EMS Paramedic Website & System represents an important digital development initiative aimed at improving the online presence, administrative management, and operational organisation of Kaygee Emergency Medical Services.

Through its modular architecture and use of HTML5, CSS3, JavaScript, PHP, and SQL, the platform provides a foundation for developing a centralised digital environment that supports both public communication and internal EMS management.

This developer guide establishes the technical standards and development practices required to maintain and expand the application.

As development progresses through the four project phases, developers should prioritise:

System reliability.
Application security.
Data confidentiality.
Maintainable code.
Efficient database management.
Responsive user interfaces.
Operational accuracy.
Scalability.
Continuous testing and improvement.

The long-term objective is to establish a secure, accessible, maintainable, and scalable digital platform that supports Kaygee Emergency Medical Services and its service delivery within Phalaborwa and surrounding communities in Limpopo, South Africa.

DOCUMENT INFORMATION
Item	Description
Document Name	DEVELOPER-GUIDE.md
Project	KAYGEE EMS Paramedic Website & System
Organisation	Kaygee Emergency Medical Services
Document Category	Technical Documentation
Platform	Web-Based Application
Primary Languages	HTML5, CSS3, JavaScript, PHP, SQL
Development Environment	Visual Studio Code
Version Control	Git and GitHub
Development Status	In Development
Intended Audience	Software Developers, System Maintainers, Technical Administrators

End of Developer Guide