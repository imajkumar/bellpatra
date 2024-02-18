pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS = 'docker-hub-credentials'
        DOCKER_IMAGE = 'imajkumar/bellpatra'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}", '.')
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_REGISTRY_CREDENTIALS) {
                        docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push()
                    }
                }
            }
        }
    }
}
