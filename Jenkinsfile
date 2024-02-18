pipeline {
    agent any
    
    environment {
        // Define environment variables such as Docker credentials
        DOCKER_CREDENTIALS = credentials('docker-hub-credentials') // You should define this credential in Jenkins
        DOCKER_IMAGE = 'bellpatra' // Replace with your Docker image name
        DOCKER_REGISTRY = 'docker.io' // Replace with your Docker registry
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from your SCM (e.g., Git)
                git 'https://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@github.com/imajkumar/bellpatra.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build Docker image
                script {
                    docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                // Push Docker image to registry
                script {
                    docker.withRegistry("${DOCKER_REGISTRY}", "${DOCKER_CREDENTIALS}") {
                        docker.image("${DOCKER_REGISTRY}/${DOCKER_IMAGE}").push()
                    }
                }
            }
        }
    }
}
