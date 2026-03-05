Tourism Guide Website – LASSANA SRI LANKA

Group Information
Student 1:S.M.S.S.Rathnayaka – ITBIN-2313-0091 – Role: DevOps,Frontend Developer  
Student 2: D.M.L.Malmi Bandara – ITBIN-2313-0013 – Role: DevOps,Frontend Developer  

Project Description
This project is a Sri Lanka Tourism Guide Website developed using HTML, CSS, and JavaScript.  
The website allows tourists to explore popular destinations in Sri Lanka categorized as:
   -Beach Side Places  
   -Historical Places  
   -Forest & Nature Places  

Each place includes:
- Description  
- Images  
- Nearby hotel details  
- Contact numbers and email addresses  

The project follows professional Git & DevOps workflows, including branching strategies, pull requests, CI/CD pipelines, and cloud deployment.

Live Deployment
  Live URL: https://sachi1234-xz.github.io/group-project-01/

Technologies Used
- HTML5  
- CSS  
- JavaScript 
- Git & GitHub  
- GitHub Actions (CI/CD)  
- Vercel (Deployment)

Features
- Categorized tourist destinations
- Responsive UI design
- Image-based landing page
- Hotel information with contacts
- Clean navigation
- Git-based team collaboration

Branch Strategy
We followed a Git Flow–based branching strategy:
  - `main` – Production-ready code (protected branch)
  - `develop` – Integration branch for features
  - `feature/*` – Individual feature branches for team members

Docker Containerization
The project is containerized using Docker for consistent deployment. Docker containerization is used for deploying the website in a container without installing any additional software in the environment.

Docker Components Used
The components used for containerization using Docker are as follows:
- Dockerfile: Instructions for creating a Docker image for the application.
- docker-compose.yml: File for executing the containerized application.
- .dockerignore: Contains a list of files that do not have to be included in the Docker container.

The application uses Nginx (Alpine) as a lightweight web server for static pages such as HTML, CSS, and JavaScript files.

Individual Contributions

Sachini Rathnayaka
- Repository setup and configuration  
- Branch creation and management  
- CI/CD pipeline implementation using GitHub Actions  
- Deployment to Vercel  
- Homepage UI development  

Malmi Bandara
- Feature branch development  
- Destination category sections
- Homepage UI development  
- Styling and UI improvements  
- Pull request creation and reviews  

Setup Instructions
Prerequisites
- Git
- Web browser (Chrome / Edge / Firefox)
- Code editor (VS Code recommended)
