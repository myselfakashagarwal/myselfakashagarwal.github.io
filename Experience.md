## **Devops Intern**
**Company:** Milkbasket  
**Year:** 4/2024 - 5/2024  
**Location:** Gurugram, Haryana India<br>**About Milkbasket:** [url](https://www.crunchbase.com/organization/milkbasket)
### Responsibilities & Work
##### **Access Control & Identity Management**
- **AWS IAM Governance:** Created and managed custom IAM roles, policies, and groups mapped to job functions, including cross account role assumptions, enforcing least privilege access across all AWS environments.
- **Internal Tools Access Control (Jenkins, Grafana, Bitbucket, Portals):** Implemented role based access control across Jenkins, Grafana, Bitbucket, and internal portals, restricting build triggers, dashboard edits, and protected branch access to authorized roles only.
- **Access Lifecycle & Audits:** Managed full user access lifecycle (provisioning, updates, offboarding) across AWS and internal tools, backed by periodic audits that removed stale and excessive permissions.
##### **CI/CD Pipeline Engineering (Jenkins)**
- **Pipeline Automation:** Built and maintained Jenkins CI/CD pipelines automating build, test, and deployment across multiple projects, standardizing releases and removing manual intervention.
- **Automated Job Sequencing & Notifications:** Used the Jenkins Webhook plugin and CLI to trigger dependent builds automatically in sequence, and integrated Slack notifications for build status, giving teams reliable automation and real time visibility.
- **Access Control & Backup:** Implemented role based access control on Jenkins to govern build triggers and configuration changes, and set up periodic backups of Jenkins storage to protect against data loss and enable quick recovery.
##### **Site Reliability Engineering**
- **Monitoring Stack Implementation:** Implemented a Prometheus, Grafana, and exporter based stack to monitor microservices, covering service probing, metrics collection, and centralized storage across the infrastructure.
- **Visualization & Insights:** Built Grafana dashboards on top of collected metrics, giving teams real time visibility into service health, uptime, latency, and resource usage across microservices.
- **Alerting & Notifications:** Configured alerting rules on top of the monitoring stack integrated with communication channels (Slack), enabling proactive detection and faster response to incidents before they escalated.
##### **Containerization & Container Orchestration**
- **Kubernetes Cluster Management:** Worked with Kubernetes clusters performing pod scheduling, scaling, deployment management, and resource allocation to keep applications running reliably across environments.
- **Workload Troubleshooting:** Diagnosed and resolved pod level issues such as crash loops, resource constraints, and networking problems, minimizing disruption to running services.
- **GitOps Deployment with ArgoCD:** Used ArgoCD for declarative, version controlled application deployment to Kubernetes clusters, with rollback capability to quickly revert failed releases and reduce downtime.