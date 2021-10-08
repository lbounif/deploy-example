pipeline {
  agent any
    
  tools {nodejs "nodeJS"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/l_bounif@esi.dz/072fa885-010d-4e2b-8b19-fbe1e8554fb4'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
