pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'imajkumar/bellpatra:latest'
        SONAR_HOST_URL = 'http://165.232.179.163:9000' // Update with your SonarQube server URL
        SONAR_LOGIN = credentials('sonar')
        SONARQUBE_HOME = tool name: 'SonarScanner', type: 'http://165.232.179.163:9000'

    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'CICD', url: 'https://github.com/imajkumar/bellpatra.git', branch: 'main'
            }
        }
      stage('Build') {
            steps {
                // Assuming you have Node.js tools configured, you can run npm install and other necessary commands here
                sh 'npm install'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeServer') {
                        sh "${SONARQUBE_HOME}/bin/sonar-scanner"
                    }
                }
            }
        }

      
        // stage('Kill Docker Containers Using Port') {
        //     steps {
        //         script {
        //             def port = '3000' // Specify the port you want to check

        //             // Get container IDs using the specified port
        //             def containerIds = sh(script: "docker ps -q --filter \"expose=${port}\"", returnStdout: true).trim().split('\n')

        //             // Stop and remove containers using the specified port
        //             containerIds.each { containerId ->
        //                 sh "docker stop ${containerId}"
        //                 sh "docker rm ${containerId}"
        //             }
        //         }
        //     }
        // }
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

        stage('Deploy') {
            steps {
                        sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
