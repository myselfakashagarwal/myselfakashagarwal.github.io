**Timeline:** 7/2026 – Present  
**Concepts:** Authentication, Authorization, Role-Based Access Control (RBAC), Spring Boot, JWT, REST APIs, MySQL, Docker  
**Source Code:** [GitHub](https://github.com/myselfakashagarwal/userSystem)  
**Classification:** Identity & Access Management Service
## About
**UserSystem** is an identity and access management service designed to centralize authentication and authorization for distributed applications. The architecture models resources, actions, roles, and users as configurable domain entities, allowing access control policies to be managed through data rather than application logic. By separating identity management from business services, the platform establishes a reusable authorization layer that can evolve independently of the applications it protects.
##### Requirement
Distributed applications required a centralized authentication and authorization service capable of managing users, administrators, roles, resources, and permissions without embedding access control logic into individual services.

The authorization model needed to support dynamic permission management where resources, actions, and roles could evolve over time without requiring application changes or code deployments.

Administrative responsibilities also required hierarchical separation. Regular users should not modify authorization policies, administrators should manage users and access control definitions, and a privileged root administrator should govern administrative identities themselves.

The project additionally required a standardized development and delivery workflow that could consistently provision the service, database, and client application throughout the software lifecycle.
##### Solution
The architecture organizes authorization around four core entities: **Resources**, **Actions**, **Roles**, and **Users**. Resources represent protected system capabilities, actions define permitted operations, and roles establish relationships between resources and actions. Users inherit permissions exclusively through assigned roles, allowing authorization policies to remain data-driven and centrally managed.

Authentication is performed through JWT-based identity verification. Upon successful authentication, the service issues a signed access token that accompanies subsequent requests, allowing protected endpoints to validate user identity and permissions without maintaining server-side session state.

Administrative capabilities are separated into hierarchical privilege levels. Administrators manage operational authorization entities including users, roles, resources, and actions, while a root administrative layer governs administrator lifecycle management. This separation establishes controlled delegation of administrative responsibilities while preventing privilege escalation through ordinary management operations.

The project is organized as a complete application stack consisting of an authentication service, a database service, and a frontend application. Supporting these components is a localized delivery pipeline that standardizes development, packaging, containerization, testing, and deployment workflows while keeping infrastructure configuration versioned alongside the application.
##### Outcome
The project establishes a reusable identity and access management foundation capable of serving multiple applications through a centralized authentication and authorization service.

The data-driven authorization model enables access control policies to evolve without modifying application logic, while hierarchical administration provides controlled management of users, permissions, and administrative identities.

The modular architecture and integrated delivery pipeline provide a maintainable foundation for future capabilities including service federation, external identity providers, fine-grained authorization policies, and multi-service authentication across distributed systems.

[[Projects]]