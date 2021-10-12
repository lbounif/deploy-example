pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh "docker build -t deploy-example ."
                }
            }
        
        stage('run') {
            steps {
                sh "docker run -d p 10010:10010 deploy-example"
            }
        }
    }
}
