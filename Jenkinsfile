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
                
                    sh "docker build -t imajkumar/bellpatra ."
                
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                    sh "docker push $DOCKER_IMAGE"
                }
            }
        }
    }
}
