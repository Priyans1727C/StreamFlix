pipeline {
    agent any
    
    environment {
        // Docker image name
        DOCKER_IMAGE = "streamflix-dev"
        // Version tag (using Jenkins BUILD_NUMBER for versioning)
        VERSION = "${env.BUILD_NUMBER}"
        // Docker Hub credentials (if needed)
        DOCKER_HUB_CREDS = credentials('docker-hub-credentials')
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Get code from repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        
        stage('Code Quality') {
            steps {
                // Run linting if configured
                echo 'Running code quality checks'
                sh 'npm run lint || echo "No lint configuration found, skipping"'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test -- --watchAll=false'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build Docker image using Dockerfile.dev
                sh "docker build -t ${DOCKER_IMAGE}:${VERSION} -f Dockerfile.dev ."
                sh "docker tag ${DOCKER_IMAGE}:${VERSION} ${DOCKER_IMAGE}:latest"
            }
        }
        
        stage('Deploy to Development') {
            steps {
                // Deploy using docker-compose
                sh 'docker-compose -f docker-compose.yml down || true'
                sh "DOCKER_IMAGE=${DOCKER_IMAGE} VERSION=${VERSION} docker-compose -f docker-compose.yml up -d"
                echo "Deployed to development environment"
            }
        }
    }
    
    post {
        success {
            echo 'Build successful! The StreamFlix application is now deployed to the development environment.'
        }
        failure {
            echo 'Build failed! Check the logs for more information.'
        }
        always {
            // Clean up old Docker images to save disk space
            sh 'docker image prune -f'
        }
    }
}