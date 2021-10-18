# code
#explain the pipeline and what it does:

#In Jenkins, a pipeline is a collection of events or jobs which are interlinked with one another in a sequence. It is a combination of plugins that support the integration and #implementation of continuous delivery pipelines using Jenkins. In other words, a Jenkins Pipeline is a collection of jobs or events that brings the software from version control #into the hands of the end users by using automation tools. It is used to incorporate continuous delivery in our software development workflow.

#Jenkins is, fundamentally, an automation engine which supports a number of automation patterns. Pipeline adds a powerful set of automation tools onto Jenkins, supporting use #cases that span from simple continuous integration to comprehensive CD pipelines. By modeling a series of related tasks, users can take advantage of the many features of #Pipeline:
#Code: Pipelines are implemented in code and typically checked into source control, giving teams the ability to edit, review, and iterate upon their delivery pipeline.
#Durable: Pipelines can survive both planned and unplanned restarts of the Jenkins controller.
#Pausable: Pipelines can optionally stop and wait for human input or approval before continuing the Pipeline run.
#Versatile: Pipelines support complex real-world CD requirements, including the ability to fork/join, loop, and perform work in parallel.
#Extensible: The Pipeline plugin supports custom extensions to its DSL [1] and multiple options for integration with other plugins.

Steps:
1. Created an AWS instance with os ubuntu 20.04LTS with t2-micro and 15GB
2. Taken Putty of the instance then wget the jenkins war file and download java 11.
3. Then with the public ip and with port 8080 open the jenkins gui.
4. go to the instance create a directory and clone the git repo.
5. add the code to the repo and do git add & git commit after that push the code to github.
6. Go to the Jenkins server and create a new job which is freestyle and clone with the github and in the build trigger add the github hook trigger and create the job.
7. After that create a new job while saying the run the job after first job is successful.
8. After the chagning in the git repo first job is triggered and our ci/cd works succesfully.
 
