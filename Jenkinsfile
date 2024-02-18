pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'imajkumar/bellpatra:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'imajkumar', url: 'https://github.com/imajkumar/bellpatra.git', branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
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
