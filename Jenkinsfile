pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS = 'docker-hub-credentials'
        DOCKER_IMAGE = 'imajkumar/bellpatra'
        DOCKER_TAG = "v1.0"

    }

    stages {

       
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}", '.')
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
