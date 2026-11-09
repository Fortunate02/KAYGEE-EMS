KAYGEE EMS – DATABASE DOCUMENTATION

Project: KAYGEE EMS Paramedic Website & System
Organisation: Kaygee Emergency Medical Services
Industry: Emergency Medical Services (EMS)
Location: Phalaborwa, Limpopo, South Africa
Database Type: Relational Database
Recommended Database Engine: MySQL / MariaDB
Database Language: SQL
Document Type: Technical Database Documentation
Development Status: In Development

TABLE OF CONTENTS
Introduction
Purpose of Database Documentation
Database Overview
Database Architecture
Database Technologies
Database Directory Structure
Database Naming Conventions
Database Design Principles
Database Tables and Modules
Database Table Specifications
Database Relationships
Entity Relationship Overview
Database Constraints and Validation
Database Connectivity
SQL Query Standards
Database Operations
Database Security
Patient Data Protection and POPIA
Database Migrations
Database Seeding
Database Backup and Recovery
Database Performance Optimisation
Database Testing
Database Maintenance
Development Phase Integration
Troubleshooting
Future Database Enhancements
Conclusion
Document Information
1. INTRODUCTION

The KAYGEE EMS Paramedic Website & System uses a centralised relational database to store, manage, retrieve, and maintain information required by the organisation's digital platform.

The database supports both the public-facing website and the internal administration and EMS operations management system.

It provides structured storage for information relating to:

System users.
Administrator accounts.
Staff and paramedics.
Ambulance vehicles.
Fleet maintenance.
Patient records.
Emergency incidents.
Ambulance dispatch operations.
Medical transportation.
Public enquiries.
Emergency service requests.
Available EMS services.
System notifications.
Recruitment applications.
Audit records.

The database is a critical component of the KAYGEE EMS platform because it enables centralised information management, supports application functionality, and maintains relationships between different operational records.

2. PURPOSE OF DATABASE DOCUMENTATION

This document provides technical information about the database structure, design, implementation, and maintenance of the KAYGEE EMS platform.

The objectives are to:

Explain the database architecture.
Document the recommended database structure.
Identify the main database tables.
Describe the purpose of each table.
Explain relationships between database entities.
Establish database naming conventions.
Define data integrity requirements.
Provide database connectivity guidelines.
Document SQL development standards.
Establish database security requirements.
Support database testing and maintenance.
Provide a reference for future database development.

This document should be used alongside:

README.md
DEVELOPER-GUIDE.md
INSTALLATION.md
SYSTEM-REQUIREMENTS.md
API-DOCUMENTATION.md
3. DATABASE OVERVIEW
3.1 Database Description

The KAYGEE EMS database is designed to function as the central information storage system for the application.

It supports the management of organisational, administrative, and operational information.

The database is intended to provide:

Centralised information storage.
Structured data organisation.
Reliable information retrieval.
Consistent data relationships.
Secure access to confidential records.
Data integrity.
Historical recordkeeping.
Reporting and analytics support.
3.2 Recommended Database Configuration
Component	Recommended Configuration
Database Name	kaygee_ems
Database Engine	MySQL / MariaDB
Database Language	SQL
Character Set	utf8mb4
Collation	utf8mb4_unicode_ci
Storage Engine	InnoDB
Backend Language	PHP
Database Connection	PHP PDO
Primary Key Strategy	AUTO_INCREMENT or another approved unique identifier
Foreign Key Support	Enabled
Database Environment	Development, Testing, Production

The actual database engine and configuration should be confirmed against the deployed environment.

3.3 Database Objectives

The database should:

Store information in organised relational tables.
Maintain relationships between related records.
Support administrative operations.
Support EMS operational activities.
Protect confidential information.
Provide efficient data retrieval.
Maintain historical records where required.
Support future application expansion.
4. DATABASE ARCHITECTURE
4.1 General Architecture

The database operates as part of the application's backend architecture.

The general information flow is:

A user interacts with the application.
The browser submits a request.
PHP receives and validates the request.
The backend checks authentication and permissions.
PHP communicates with the database.
SQL queries retrieve or modify information.
The database returns the result.
PHP processes the result.
The application displays the appropriate response.
4.2 Database Architecture Diagram
text
+-------------------------------+
|          APPLICATION          |
|                               |
| Public Website                |
| Administration Dashboard      |
| EMS Operations Dashboard      |
+---------------+---------------+
                |
                |
+---------------v---------------+
|          FRONTEND             |
|                               |
| HTML5 | CSS3 | JavaScript     |
+---------------+---------------+
                |
                |
+---------------v---------------+
|          PHP BACKEND          |
|                               |
| Authentication                |
| Administration                |
| EMS Operations                |
| API Processing                |
+---------------+---------------+
                |
                |
+---------------v---------------+
|        DATABASE ACCESS        |
|                               |
| PHP PDO                       |
| Prepared Statements           |
| Query Processing              |
+---------------+---------------+
                |
                |
+---------------v---------------+
|       KAYGEE EMS DATABASE     |
|                               |
| Users                         |
| Staff                         |
| Paramedics                    |
| Ambulances                    |
| Patients                      |
| Incidents                     |
| Dispatches                    |
| Medical Transport             |
| Enquiries                     |
| Reports and Notifications     |
+-------------------------------+

5. DATABASE TECHNOLOGIES
5.1 MySQL / MariaDB

MySQL or MariaDB is recommended as the relational database management system.

It provides:

Relational data storage.
SQL query processing.
Primary and foreign key relationships.
Database indexes.
Transactions.
User privileges.
Backup and recovery capabilities.
5.2 SQL

SQL is used to:

Create databases.
Create tables.
Insert records.
Retrieve records.
Update information.
Delete records where permitted.
Establish table relationships.
Generate reports.
Manage database structures.
5.3 PHP PDO

PHP PDO is recommended for communication between the backend application and the database.

It supports:

Prepared statements.
Parameterised queries.
Database transactions.
Exception handling.
Consistent database access.
6. DATABASE DIRECTORY STRUCTURE

The project database resources are organised as follows:

text
database/
│
├── schema.sql
│
├── connection.php
│
├── migrations/
│   ├── 001_create_users_table.sql
│   ├── 002_create_roles_table.sql
│   ├── 003_create_staff_table.sql
│   ├── 004_create_paramedics_table.sql
│   ├── 005_create_ambulances_table.sql
│   ├── 006_create_patients_table.sql
│   ├── 007_create_incidents_table.sql
│   ├── 008_create_dispatches_table.sql
│   └── 009_create_medical_transports_table.sql
│
├── seeds/
│   ├── roles.sql
│   ├── permissions.sql
│   └── services.sql
│
└── backups/
    ├── .gitkeep
    └── README.md

6.1 schema.sql

Contains the database structure, including table definitions, relationships, indexes, and constraints.

6.2 connection.php

Contains the database connection implementation or delegates to the centralised application database configuration.

6.3 migrations/

Stores database structure changes in an organised sequence.

6.4 seeds/

Contains initial reference data required by the application.

6.5 backups/

Reserved for controlled database backup storage.

Production database backups should preferably be stored outside the publicly accessible application directory.

7. DATABASE NAMING CONVENTIONS

Consistent naming conventions improve database readability and maintenance.

7.1 Database Naming

The recommended database name is:

sql
kaygee_ems

7.2 Table Naming

Use lowercase snake_case.

Examples:

text
users
roles
permissions
staff
paramedics
ambulances
patients
incidents
dispatches
medical_transports

7.3 Column Naming

Use descriptive lowercase snake_case names.

Examples:

text
first_name
last_name
email_address
phone_number
created_at
updated_at
incident_status
ambulance_registration

7.4 Primary Keys

Use id as the primary key for individual tables unless a different identifier strategy is required.

Example:

sql
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY

7.5 Foreign Keys

Foreign keys should identify the related table.

Examples:

text
user_id
staff_id
paramedic_id
ambulance_id
patient_id
incident_id
dispatch_id

7.6 Timestamp Columns

Use consistent timestamp fields where applicable:

text
created_at
updated_at
deleted_at


A deleted_at column should only be used where soft deletion is appropriate.

8. DATABASE DESIGN PRINCIPLES

The database should follow established relational database design principles.

8.1 Data Normalisation

Database tables should be structured to reduce unnecessary duplication.

Recommended normalisation practices include:

First Normal Form (1NF).
Second Normal Form (2NF).
Third Normal Form (3NF), where appropriate.
8.2 Data Integrity

The database should maintain accurate relationships between records.

This includes:

Primary keys.
Foreign keys.
Unique constraints.
NOT NULL constraints.
Appropriate data types.
Validation rules.
Referential integrity.
8.3 Data Consistency

Information should be stored consistently across related application modules.

For example, an ambulance assigned to a dispatch should reference an existing ambulance record.

8.4 Historical Records

Operational records should be retained according to approved organisational retention requirements.

Where historical information must remain available, developers should avoid permanently deleting records without an approved process.

9. DATABASE TABLES AND MODULES

The recommended database is divided into logical modules.

9.1 Authentication and Access Control Module

Responsible for managing:

Users.
Roles.
Permissions.
Role assignments.
Authentication sessions, where database-backed sessions are used.
Password recovery records.

Recommended tables:

text
users
roles
permissions
user_roles
role_permissions
password_resets

9.2 Staff and Paramedic Module

Responsible for:

Staff information.
Paramedic profiles.
Employment information.
Qualifications.
Staff availability.

Recommended tables:

text
staff
paramedics

9.3 Ambulance and Fleet Module

Responsible for:

Ambulance records.
Vehicle registration.
Vehicle availability.
Vehicle status.
Maintenance history.

Recommended tables:

text
ambulances
fleet_maintenance

9.4 Patient Management Module

Responsible for:

Patient demographic information.
Patient contact information.
Relevant authorised medical information.
Patient service history.

Recommended table:

text
patients


Sensitive medical details should only be included where necessary and authorised.

9.5 Emergency Incident Module

Responsible for:

Incident registration.
Incident descriptions.
Incident locations.
Incident status.
Patient associations.
Operational history.

Recommended tables:

text
incidents
incident_assignments

9.6 Dispatch Management Module

Responsible for:

Ambulance assignments.
Paramedic assignments.
Dispatch status.
Dispatch timestamps.
Incident coordination.

Recommended tables:

text
dispatches
dispatch_personnel

9.7 Medical Transportation Module

Responsible for:

Patient transportation.
Collection locations.
Destination locations.
Transport status.
Assigned ambulance and personnel.

Recommended table:

text
medical_transports

9.8 Public Enquiry and Service Request Module

Responsible for:

Public enquiries.
Service requests.
Contact information.
Request statuses.
Administrative responses.

Recommended tables:

text
enquiries
service_requests
services

9.9 Recruitment Module

Responsible for:

Job applications.
Applicant information.
CV document references.
Application statuses.

Recommended tables:

text
recruitment_applications


CV files should be stored securely in file storage, not directly inside database fields.

9.10 Notifications and Audit Module

Responsible for:

Application notifications.
User notifications.
Important operational activity.
Audit trails.

Recommended tables:

text
notifications
audit_logs

10. DATABASE TABLE SPECIFICATIONS

The following specifications describe the recommended database structure. They are proposed designs and must be reconciled with the actual schema.sql before implementation.

10.1 users

Purpose: Stores registered application accounts.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
first_name	VARCHAR(100)	User's first name.
last_name	VARCHAR(100)	User's last name.
email_address	VARCHAR(255)	Unique email address.
phone_number	VARCHAR(30)	Contact number.
password_hash	VARCHAR(255)	Hashed password.
account_status	VARCHAR(30)	Account status.
last_login_at	DATETIME	Last successful login.
created_at	TIMESTAMP	Account creation date.
updated_at	TIMESTAMP	Last modification date.
10.2 roles

Purpose: Stores system roles.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
role_name	VARCHAR(100)	Role name.
description	TEXT	Role description.
created_at	TIMESTAMP	Creation date.

Suggested roles:

Super Administrator.
Administrator.
Operations Manager.
Dispatcher.
Paramedic.
General Staff.
10.3 permissions

Purpose: Stores individual system permissions.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
permission_name	VARCHAR(150)	Permission identifier.
description	TEXT	Permission description.

Examples:

text
manage_users
manage_staff
manage_ambulances
manage_patients
manage_incidents
manage_dispatch
view_reports
manage_settings

10.4 user_roles

Purpose: Links users to their assigned roles.

Column	Data Type	Description
user_id	INT UNSIGNED	User reference.
role_id	INT UNSIGNED	Role reference.

Recommended composite primary key:

sql
PRIMARY KEY (user_id, role_id)

10.5 role_permissions

Purpose: Links roles to permissions.

Column	Data Type	Description
role_id	INT UNSIGNED	Role reference.
permission_id	INT UNSIGNED	Permission reference.

Recommended composite primary key:

sql
PRIMARY KEY (role_id, permission_id)

10.6 staff

Purpose: Stores employee and operational staff information.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
user_id	INT UNSIGNED	Optional user account reference.
employee_number	VARCHAR(50)	Unique employee identifier.
first_name	VARCHAR(100)	First name.
last_name	VARCHAR(100)	Last name.
phone_number	VARCHAR(30)	Contact number.
email_address	VARCHAR(255)	Email address.
job_title	VARCHAR(100)	Employment position.
employment_status	VARCHAR(30)	Employment status.
created_at	TIMESTAMP	Creation date.
updated_at	TIMESTAMP	Modification date.
10.7 paramedics

Purpose: Stores paramedic-specific information.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
staff_id	INT UNSIGNED	Staff reference.
registration_number	VARCHAR(100)	Relevant professional registration identifier.
qualification	VARCHAR(255)	Professional qualification.
certification_expiry	DATE	Certification expiry date, where applicable.
availability_status	VARCHAR(30)	Availability status.
created_at	TIMESTAMP	Creation date.
updated_at	TIMESTAMP	Modification date.

Professional registration information must be validated according to applicable requirements.

10.8 ambulances

Purpose: Stores ambulance vehicle information.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
vehicle_number	VARCHAR(50)	Internal vehicle identifier.
registration_number	VARCHAR(30)	Vehicle registration.
make	VARCHAR(100)	Manufacturer.
model	VARCHAR(100)	Vehicle model.
manufacture_year	YEAR	Manufacturing year.
vehicle_status	VARCHAR(30)	Operational status.
availability_status	VARCHAR(30)	Availability status.
created_at	TIMESTAMP	Creation date.
updated_at	TIMESTAMP	Modification date.

Suggested vehicle statuses:

Active.
Maintenance.
Out of Service.
Retired.
10.9 fleet_maintenance

Purpose: Stores ambulance maintenance records.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
ambulance_id	INT UNSIGNED	Ambulance reference.
maintenance_type	VARCHAR(100)	Maintenance category.
description	TEXT	Maintenance details.
maintenance_date	DATE	Maintenance date.
next_maintenance_date	DATE	Next scheduled maintenance.
maintenance_cost	DECIMAL(12,2)	Maintenance cost, where recorded.
created_at	TIMESTAMP	Creation date.
10.10 patients

Purpose: Stores patient demographic and authorised medical information.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
patient_reference	VARCHAR(50)	Unique internal reference.
first_name	VARCHAR(100)	First name.
last_name	VARCHAR(100)	Last name.
date_of_birth	DATE	Date of birth, where collected.
gender	VARCHAR(30)	Relevant demographic information.
phone_number	VARCHAR(30)	Contact number.
emergency_contact	VARCHAR(255)	Emergency contact details.
created_at	TIMESTAMP	Creation date.
updated_at	TIMESTAMP	Modification date.

Additional sensitive medical information should be stored only where operationally necessary and with suitable access restrictions.

10.11 incidents

Purpose: Stores emergency incident records.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
incident_reference	VARCHAR(50)	Unique incident reference.
patient_id	INT UNSIGNED	Optional patient reference.
incident_type	VARCHAR(100)	Incident category.
incident_description	TEXT	Incident description.
incident_location	VARCHAR(255)	Incident location.
incident_date	DATETIME	Incident date and time.
incident_status	VARCHAR(30)	Current status.
created_at	TIMESTAMP	Creation date.
updated_at	TIMESTAMP	Modification date.
10.12 dispatches

Purpose: Stores ambulance dispatch assignments.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
incident_id	INT UNSIGNED	Incident reference.
ambulance_id	INT UNSIGNED	Assigned ambulance.
dispatch_status	VARCHAR(30)	Dispatch status.
dispatched_at	DATETIME	Dispatch timestamp.
arrived_at	DATETIME	Arrival timestamp, where recorded.
completed_at	DATETIME	Completion timestamp.
created_at	TIMESTAMP	Creation date.
10.13 dispatch_personnel

Purpose: Associates staff members with dispatch assignments.

Column	Data Type	Description
dispatch_id	INT UNSIGNED	Dispatch reference.
staff_id	INT UNSIGNED	Assigned staff member.

Recommended composite primary key:

sql
PRIMARY KEY (dispatch_id, staff_id)

10.14 medical_transports

Purpose: Stores medical transportation records.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
patient_id	INT UNSIGNED	Patient reference.
ambulance_id	INT UNSIGNED	Assigned ambulance.
dispatch_id	INT UNSIGNED	Optional dispatch reference.
collection_location	VARCHAR(255)	Collection address.
destination_location	VARCHAR(255)	Destination address.
transport_status	VARCHAR(30)	Transport status.
transport_date	DATETIME	Transportation date.
completed_at	DATETIME	Completion timestamp.
created_at	TIMESTAMP	Creation date.
10.15 services

Purpose: Stores available KAYGEE EMS services.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
service_name	VARCHAR(150)	Service name.
description	TEXT	Service description.
service_status	VARCHAR(30)	Publication status.
created_at	TIMESTAMP	Creation date.
updated_at	TIMESTAMP	Modification date.
10.16 enquiries

Purpose: Stores enquiries submitted through the public website.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
full_name	VARCHAR(200)	Enquirer's name.
email_address	VARCHAR(255)	Email address.
phone_number	VARCHAR(30)	Contact number.
subject	VARCHAR(200)	Enquiry subject.
message	TEXT	Enquiry message.
enquiry_status	VARCHAR(30)	Enquiry status.
created_at	TIMESTAMP	Submission date.
10.17 service_requests

Purpose: Stores public service requests.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
request_reference	VARCHAR(50)	Unique request reference.
service_id	INT UNSIGNED	Requested service.
requester_name	VARCHAR(200)	Requester's name.
phone_number	VARCHAR(30)	Contact number.
collection_location	VARCHAR(255)	Requested collection location.
destination_location	VARCHAR(255)	Destination, where applicable.
request_status	VARCHAR(30)	Request status.
created_at	TIMESTAMP	Submission date.
updated_at	TIMESTAMP	Modification date.

Public website requests must not be assumed to constitute a confirmed emergency dispatch. They require appropriate operational verification and handling.

10.18 recruitment_applications

Purpose: Stores recruitment application information.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
applicant_name	VARCHAR(200)	Applicant's name.
email_address	VARCHAR(255)	Applicant's email.
phone_number	VARCHAR(30)	Contact number.
position_applied	VARCHAR(150)	Position applied for.
cv_path	VARCHAR(500)	Secure CV storage reference.
application_status	VARCHAR(30)	Application status.
submitted_at	TIMESTAMP	Submission date.
10.19 notifications

Purpose: Stores application notifications.

Column	Data Type	Description
id	INT UNSIGNED	Primary key.
user_id	INT UNSIGNED	Recipient user.
title	VARCHAR(200)	Notification title.
message	TEXT	Notification message.
notification_type	VARCHAR(50)	Notification category.
is_read	BOOLEAN	Read status.
created_at	TIMESTAMP	Creation date.
10.20 audit_logs

Purpose: Maintains records of important application activities.

Column	Data Type	Description
id	BIGINT UNSIGNED	Primary key.
user_id	INT UNSIGNED	User responsible, where identifiable.
action	VARCHAR(150)	Recorded action.
module	VARCHAR(100)	Application module.
record_id	VARCHAR(100)	Affected record identifier.
ip_address	VARCHAR(45)	Source IP address, where appropriate.
created_at	TIMESTAMP	Activity timestamp.

Audit logs should not unnecessarily duplicate passwords, medical details, or other sensitive information.

11. DATABASE RELATIONSHIPS

The database uses relational connections to associate records across application modules.

11.1 User Relationships
Users can have one or more assigned roles.
Roles can have multiple permissions.
Permissions can be assigned to multiple roles.
A user account may be associated with a staff record.
11.2 Staff Relationships
A staff member may have a paramedic profile.
Staff members can be assigned to dispatches.
Staff members may have associated user accounts.
11.3 Ambulance Relationships
An ambulance can have multiple maintenance records.
An ambulance can be assigned to multiple dispatch records over time.
An ambulance can be associated with multiple transportation records over time.
11.4 Patient Relationships
A patient can have multiple incident records.
A patient can have multiple medical transport records.
11.5 Incident Relationships
An incident may be associated with a patient.
An incident can have one or more dispatch assignments.
Dispatches may be associated with ambulances and personnel.
11.6 Service Relationships
A service can be associated with multiple service requests.
11.7 Notification Relationships
A user can receive multiple notifications.
12. ENTITY RELATIONSHIP OVERVIEW

The following diagram provides a simplified view of the proposed database relationships.

text
USERS
  |
  |--- USER_ROLES --- ROLES
  |                       |
  |                       |
  |                  ROLE_PERMISSIONS
  |                       |
  |                  PERMISSIONS
  |
  |
 STAFF
  |
  |--- PARAMEDICS
  |
  |--- DISPATCH_PERSONNEL
              |
           DISPATCHES
              |
       +------+------+
       |             |
   AMBULANCES     INCIDENTS
       |             |
       |          PATIENTS
       |
 FLEET_MAINTENANCE

PATIENTS
   |
   |--- INCIDENTS
   |
   |--- MEDICAL_TRANSPORTS
                |
            AMBULANCES

SERVICES
   |
   |--- SERVICE_REQUESTS

USERS
   |
   |--- NOTIFICATIONS
   |
   |--- AUDIT_LOGS


The final entity relationship diagram should be generated from the implemented database schema rather than relying solely on this conceptual representation.

13. DATABASE CONSTRAINTS AND VALIDATION

Database constraints protect the integrity of stored information.

13.1 Primary Key Constraints

Each main table should have a unique primary key.

Example:

sql
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY

13.2 Foreign Key Constraints

Foreign keys maintain relationships between related tables.

Example:

sql
FOREIGN KEY (patient_id)
REFERENCES patients(id)

13.3 Unique Constraints

Unique constraints prevent duplicate values where uniqueness is required.

Examples:

User email addresses.
Employee numbers.
Ambulance registration numbers.
Patient reference numbers.
Incident reference numbers.
13.4 NOT NULL Constraints

Required information should use NOT NULL constraints.

Optional information should allow NULL values where appropriate.

13.5 Status Validation

Status fields should use controlled values.

Examples:

Ambulance:

Available.
Assigned.
Maintenance.
Out of Service.

Incident:

Reported.
Pending.
Assigned.
In Progress.
Completed.
Cancelled.

Dispatch:

Pending.
Assigned.
Dispatched.
En Route.
Arrived.
Completed.
Cancelled.

These values are proposed examples and should be aligned with approved operational procedures.

14. DATABASE CONNECTIVITY
14.1 Connection Overview

PHP communicates with the database using PDO.

The database connection should be centralised to prevent duplicated connection code.

Recommended location:

text
includes/database.php


The project also contains:

text
database/connection.php


Developers should establish one authoritative connection implementation and avoid maintaining conflicting database connection configurations.

14.2 Example PDO Connection
php
<?php

$host = getenv('DB_HOST');
$database = getenv('DB_DATABASE');
$username = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD');

try {

    $pdo = new PDO(
        "mysql:host=$host;dbname=$database;charset=utf8mb4",
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

    exit("Database connection failed.");

}


This example assumes environment variables have been loaded by the application.

14.3 Connection Security

Database credentials must:

Be stored securely.
Never be committed to GitHub.
Never be displayed to public users.
Use appropriately restricted database privileges.
Be changed when compromised.
15. SQL QUERY STANDARDS

Developers should follow consistent SQL practices.

15.1 SELECT

Used to retrieve database information.

Example:

sql
SELECT id, first_name, last_name
FROM users;

15.2 INSERT

Used to create database records.

Example:

sql
INSERT INTO services (
    service_name,
    description,
    service_status
)
VALUES (
    'Emergency Ambulance Services',
    'Emergency medical assistance and ambulance services.',
    'active'
);

15.3 UPDATE

Used to modify existing records.

Example:

sql
UPDATE ambulances
SET availability_status = 'available'
WHERE id = 1;

15.4 DELETE

Used to remove records where deletion is authorised and appropriate.

Example:

sql
DELETE FROM notifications
WHERE id = 1;


Sensitive operational records should generally follow approved retention and archival policies rather than unrestricted deletion.

15.5 Prepared Statements

PHP database queries must use parameterised statements.

Example:

php
$sql = "SELECT *
        FROM ambulances
        WHERE id = :id";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    ':id' => $ambulanceId
]);

$ambulance = $stmt->fetch();

16. DATABASE OPERATIONS

The application performs several categories of database operations.

16.1 Create Operations

Examples:

Register users.
Add staff members.
Register ambulances.
Create patient records.
Capture incidents.
Create dispatch records.
Submit service requests.
16.2 Read Operations

Examples:

Retrieve user information.
View ambulance availability.
Access authorised patient records.
View incident history.
Retrieve dispatch records.
Generate operational reports.
16.3 Update Operations

Examples:

Update user details.
Change ambulance status.
Update staff availability.
Modify incident statuses.
Update dispatch assignments.
Change service request statuses.
16.4 Delete Operations

Deletion should only be performed when authorised and appropriate.

For sensitive records, archival or controlled soft deletion may be more suitable.

17. DATABASE SECURITY

Database security is essential because the application may store personal, patient, employment, and operational information.

17.1 Access Control

Database access should be restricted to authorised application processes and database administrators.

17.2 SQL Injection Prevention

Use prepared statements and parameterised SQL queries.

Never concatenate untrusted input into SQL statements.

17.3 Password Security

Store password hashes rather than plain-text passwords.

PHP password hashing functions should be used.

17.4 Database Privileges

Production database accounts should have only the privileges required by the application.

Avoid using database root accounts for normal application operations.

17.5 Backup Protection

Database backups should be:

Stored securely.
Access restricted.
Encrypted where appropriate.
Protected from public access.
Retained according to approved policies.
17.6 Sensitive Data

Sensitive patient, staff, and operational information must not be exposed through unrestricted queries, public API endpoints, or application error messages.

18. PATIENT DATA PROTECTION AND POPIA

The KAYGEE EMS database may contain personal and sensitive medical information.

Database design and implementation should therefore support compliance with South Africa's Protection of Personal Information Act (POPIA).

Developers should consider:

Purpose-specific data collection.
Data minimisation.
Appropriate authorisation.
Confidential information handling.
Secure database access.
Appropriate information retention.
Secure deletion and disposal.
Auditability.
Protection against unauthorised disclosure.

Patient records should only be accessed by authorised personnel for legitimate organisational and operational purposes.

Database developers should avoid collecting unnecessary medical information.

Retention periods and patient record management procedures must be approved by the organisation and aligned with applicable legal and professional requirements.

19. DATABASE MIGRATIONS

Database migrations provide a controlled way to introduce changes to the database structure.

19.1 Migration Purpose

Migrations are used to:

Create new tables.
Add columns.
Modify existing columns.
Create indexes.
Add foreign keys.
Update database structures.
Remove obsolete structures where approved.
19.2 Migration Naming

Use sequential numbering and descriptive filenames.

Example:

text
001_create_users_table.sql
002_create_roles_table.sql
003_create_permissions_table.sql
004_create_staff_table.sql
005_create_paramedics_table.sql
006_create_ambulances_table.sql

19.3 Migration Guidelines
Do not modify production database structures manually without documenting the change.
Test migrations in a development environment.
Back up production data before risky changes.
Document schema changes.
Preserve existing records where required.
Use reversible migrations where the migration tooling supports them.
20. DATABASE SEEDING

Database seeds provide initial reference data.

The seeds/ directory may contain:

text
seeds/
├── roles.sql
├── permissions.sql
└── services.sql


Examples include:

Initial user roles.
Application permissions.
Public EMS service categories.
Approved system status values.

Production administrator accounts should be created through a controlled setup procedure.

Default passwords must never be hardcoded or distributed in seed files.

21. DATABASE BACKUP AND RECOVERY
21.1 Backup Strategy

Regular database backups should be maintained to protect organisational information.

The backup strategy should include:

Scheduled backups.
Secure storage.
Backup encryption where appropriate.
Retention policies.
Backup verification.
Periodic restoration testing.
21.2 Example MySQL Backup
bash
mysqldump -u username -p kaygee_ems > kaygee_ems_backup.sql

21.3 Example Database Restoration
bash
mysql -u username -p kaygee_ems < kaygee_ems_backup.sql


These commands are illustrative and should be executed in a controlled environment.

21.4 Recovery Procedures

Database recovery should involve:

Identifying the backup to restore.
Verifying backup integrity.
Preparing the restoration environment.
Restoring the database.
Checking database relationships.
Testing application connectivity.
Verifying critical records.
Recording the recovery activity.
22. DATABASE PERFORMANCE OPTIMISATION

The database should be optimised to support efficient application operations.

22.1 Indexing

Frequently searched columns should be reviewed for indexing.

Examples:

users.email_address
ambulances.registration_number
patients.patient_reference
incidents.incident_reference
dispatches.incident_id
medical_transports.patient_id

Indexes should be added based on actual query patterns and measured performance.

22.2 Query Optimisation

Developers should:

Retrieve only required columns.
Avoid unnecessary SELECT * queries.
Use appropriate joins.
Use pagination.
Review slow queries.
Avoid unnecessary repeated database requests.
22.3 Database Monitoring

Database performance should be monitored for:

Slow queries.
High database resource consumption.
Excessive table scans.
Large database tables.
Connection errors.
Storage capacity.
23. DATABASE TESTING

Database testing ensures that information is stored, retrieved, updated, and protected correctly.

23.1 Connection Testing

Verify that PHP can connect to the database.

23.2 Table Testing

Verify that all required tables exist and contain the correct columns.

23.3 Relationship Testing

Verify foreign keys and relational constraints.

23.4 CRUD Testing

Test:

Create.
Read.
Update.
Delete.
23.5 Security Testing

Test:

SQL injection prevention.
Database privilege restrictions.
Unauthorised access.
Sensitive information exposure.
Backup access restrictions.
23.6 Transaction Testing

Verify that related database operations are either committed together or rolled back appropriately when an error occurs.

23.7 Database Testing Checklist
Database can be created successfully.
Database connection works.
All required tables exist.
Primary keys are configured.
Foreign keys are configured.
Unique constraints work.
Required fields reject invalid submissions.
Database inserts work.
Database retrieval works.
Database updates work.
Authorised deletion works.
Prepared statements are implemented.
Database transactions work.
Patient information is protected.
Database backups can be restored.
Application database permissions are restricted.
24. DATABASE MAINTENANCE

Database maintenance helps ensure long-term reliability and performance.

Developers and database administrators should:

Monitor database health.
Review database error logs.
Perform regular backups.
Verify backup restoration.
Review database indexes.
Monitor database size.
Review user privileges.
Apply approved database migrations.
Remove obsolete test data.
Maintain referential integrity.
Review database performance.

Database maintenance activities should be documented.

25. DEVELOPMENT PHASE INTEGRATION

The database supports the four development phases of the KAYGEE EMS project.

PART 1: PUBLIC WEBSITE AND COMPANY INFORMATION

The database foundation may support:

Public enquiries.
Contact information.
Service information.
Service requests.

Main database entities:

text
services
enquiries
service_requests

PART 2: ADMINISTRATION DASHBOARD AND BACKEND MANAGEMENT

This phase introduces centralised administrative data management.

Main database entities:

text
users
roles
permissions
user_roles
role_permissions
staff
services
enquiries
service_requests

PART 3: EMS OPERATIONS AND AMBULANCE MANAGEMENT

This phase introduces operational database functionality.

Main database entities:

text
paramedics
ambulances
fleet_maintenance
patients
incidents
dispatches
dispatch_personnel
medical_transports
notifications

PART 4: TESTING, SECURITY, DEPLOYMENT AND OPTIMISATION

This phase focuses on:

Database integrity testing.
Performance optimisation.
Security reviews.
Backup and recovery.
Migration management.
Data protection.
Production configuration.
Database maintenance.

Additional supporting entities may include:

text
audit_logs

26. TROUBLESHOOTING
Problem	Possible Cause	Recommended Solution
Database connection failure	Incorrect credentials.	Verify connection settings.
Unknown database	Database not created.	Create the database.
Table does not exist	Schema not imported.	Import schema.sql.
Foreign key error	Invalid referenced record.	Verify related records.
Duplicate entry	Unique constraint violation.	Check existing records.
SQL syntax error	Incorrect SQL statement.	Review query syntax.
Access denied	Insufficient database privileges.	Review database user permissions.
Slow query	Missing index or inefficient query.	Review query execution plan.
Database backup fails	Incorrect permissions or storage issues.	Review backup configuration.
Database restoration fails	Invalid or incomplete backup.	Verify backup integrity.
27. FUTURE DATABASE ENHANCEMENTS

As the KAYGEE EMS platform expands, additional database functionality may be introduced.

Potential enhancements include:

27.1 Advanced Ambulance Tracking

Store historical ambulance location information where approved tracking integrations are implemented.

27.2 Advanced Operational Reporting

Introduce additional reporting structures for:

Incident statistics.
Ambulance utilisation.
Response activity.
Medical transportation.
Operational performance.
27.3 Advanced Audit Management

Improve tracking of important application activities and changes to sensitive records.

27.4 External Integrations

Support approved integrations with:

Mapping services.
Notification services.
External reporting platforms.
Approved healthcare information systems.
27.5 Improved Data Analytics

Support operational dashboards and historical trend analysis using appropriately protected and, where possible, de-identified information.

27.6 Scalability

Future database improvements may include:

Query optimisation.
Caching.
Database replication where justified.
Improved archival procedures.
More advanced reporting structures.
28. CONCLUSION

The database is a fundamental component of the KAYGEE EMS Paramedic Website & System.

It provides the centralised data storage foundation required to support the organisation's public website, administrative management, and EMS operational activities.

Through structured relational database design, appropriate constraints, secure database connectivity, and consistent maintenance