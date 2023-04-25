pipeline{
    agent any

    stages{
        stage('Clonar o repositorio'){
            steps{
                git branch: 'main', url: 'https://github.com/FernandoFelberque/testes-api-cypress.git'
            }
        }

        stage('Instalar dependencias'){
            steps{
                sh 'npm install'
            }
        }

        stage('Executar Testes'){
            steps{
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}