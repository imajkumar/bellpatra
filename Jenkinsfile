pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'imajkumar/bellpatra:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'CICD', url: 'https://github.com/imajkumar/bellpatra.git', branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                
                    sh "docker build -t bellpatra ."
                
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image(DOCKER_IMAGE).push('latest')
                    }
                }
            }
        }
    }
}
