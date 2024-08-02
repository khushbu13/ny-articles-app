const scanner = require('sonarqube-scanner').default;

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_55c81c60c6cd79788fe14c280a0a2ad0a7e5b638",
        options: {
            'sonar.projectName': 'Articles',
            'sonar.projectDescription': 'NY articles app',
            'sonar.projectKey': 'Articles',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    error => {
        if (error) {
            console.error(error);
        }
        process.exit();
    },
)