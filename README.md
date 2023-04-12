# Project Scenario 1

Here's a project challenge for a mid-level DevOps engineer that involves Ansible, Terraform, and AWS:

## Project Name: Automating the Deployment of a Highly-Available Web Application on AWS

### Project Description:
You are tasked with automating the deployment of a highly-available web application on AWS. The web application consists of a frontend that is hosted on an EC2 instance behind an Elastic Load Balancer (ELB), and a backend that is hosted on an RDS instance. Your goal is to automate the deployment of this web application using Ansible and Terraform.

### Project Requirements:

- Use Terraform to provision the infrastructure required for the web application. This includes an EC2 instance, an RDS instance, and an ELB.
- Use Ansible to deploy and configure the web application on the EC2 instance.
- Use Ansible to configure the RDS instance with the necessary database and user accounts for the web application.
- Implement autoscaling for the EC2 instance based on the load of the web application.
- Implement backup and restore procedures for the RDS instance.

### Deliverables:

- Terraform code that provisions the necessary infrastructure on AWS.
- Ansible playbook(s) that automate the deployment and configuration of the web application.
- Documentation that explains how to run the Terraform code and Ansible playbook(s).
- A demonstration of the fully automated deployment of the web application.

Note: This project challenge assumes that you have prior experience working with AWS, Ansible, and Terraform.