---
layout: default
title: "Getting Started with Gradle"
date: 2017-06-19
---

# Getting Started With Gradle

I've had quite a lot of frustration working with gradle in big projects, especially ones that were organized as many sub-projects, so I started reading the awfully written gradle user guide. As I was reading it I started writing this tutorial, because I realized that there was so little that was actually useful to me as a developer. Hopefully this will be helpful to people who are new to gradle.

## Gradle

*What is gradle?*

Gradle is a build tool, similar to Apache Ant or Maven, though it is more powerful. You can specify the project's dependencies from any repository, manage multiple-project builds, define your own tasks to be run, create plugins for it and lots of other cool stuff. 

*How is gradle configured?*

Gradle loads the configuration properties in this order:

1. gradle.properties in project build dir.
2. gradle.properties in gradle user home.
2. system properties, e.g. when `-Dsome.property` is set on the command line.

*What files are read when running a Gradle task?*

When running a gradle task from a project or sub-project folder `build.gradle` and `settings.gradle` are the files used by gradle to read the project's task definitions, dependencies and properties. In a multi-project build, the methods and properties of a sub-project are inherited from the parent project. 

*Where are the gradle distributions stored?*

It shouldn't matter to you, but they are stored in `$USER_HOME/.gradle/wrapper/dists`.

## Gradle Wrapper

*What is gradlew (Gradle Wrapper)?*

Gradle wrapper is nothing more than a shell script that downloads and runs the appropriate version of gradle so you don't have to. This is useful because you can commit gradle wrapper to git and distribute it, so that when you checkout a project you don't have to manually install the required gradle version. Also it's very useful for continuous integration machines so that you don't manage gradle versions on them. 

*Gradle wrapper files*

Gradle wrapper uses the following files (these should be committed to the project's git):
* gradlew (Unix Shell script)
* gradlew.bat (Windows batch file)
* gradle/wrapper/gradle-wrapper.jar (Wrapper JAR)
* gradle/wrapper/gradle-wrapper.properties (Wrapper properties)

Always use gradle wrapper instead of gradle. Simple as that!

## Gradle Daemon

Gradle and gradlew by default use a gradle daemon. A gradle daemon is a process running in background that aims to speed up the builds by leveraging caching. 
IntelliJ, Eclipse, or other software that uses gradle's tooling API always use a daemon. 
You can have more than one gradle daemon running on the system (for example one from your IDE and one from running gradlew in terminal). 
If you're having caching problems such as running inexistent tests (due to checking out another branch in git), you can kill all the gradle daemons and run the task again. 
Do use the gradle daemon in any development environment!
Do NOT use the gradle daemon on continuous integration machines. A fresh start is more desirable in order to avoid problems. 
./gradlew --status - Gradle daemons status
./gradlew --stop - Kills all the gradle daemons

## The Build Lifecycle

The build lifecycle of gradle has three main phases:
1. Initialization - all existing settings.gradle files from the sub-project folders are executed and a project instance is created for each one.
2. Configuration - build.gradle scripts of all projects are executed.
2. Execution - determines the subset of tasks and then executes them.

## Gradle Basics

Let's start with a basic task hierarchy: 

Insert image here:

These commands should be everything you need to get started with Gradle: 
    ./gradlew dist test - executes dist and test tasks sequentially. Each task, including its dependencies, is executed only once. In this example compileTest was already run for the dist task, so it won't be ran again for the test task.
    ./gradlew dist -x test - runs dist but excludes test.
    ./gradlew di - abbreviation works as long as it's unique.
    ./gradlew dist --continue - execute even when a dependency task fails.
    ./gradlew -b anotherBuild.gradle - specify a build file.
    ./gradlew -q - quiet flag, logs just the error.
    ./gradlew -p project/sub/dir - specify the subdir where to search for tasks.
    ./gradlew dist --rerun-tasks - force rerun all tasks.
    ./gradlew projects - print the sub-projects in the current folder.
    ./gradlew tasks [--all] - print tasks available for current project.
    ./gradlew help --task dist - print detailed info about a task's usage.
    ./gradlew dependencies - print project dependency list.
    ./gradlew dependencies --configuration testCompile - print dependencies from a specified configuration.
    ./gradlew buildEnvironment - print build script dependencies
    ./gradlew -q webapp:dependencyInsight --dependency groovy --configuration compile - displays the insight into a specific dependency
    ./gradlew properties - displays the sub-projects of root project
    ./gradlew dist --profile - profile the build
    ./gradlew -m dist test - prints the tasks without running them
    ./gradlew dist --no-daemon - do not use the daemon for the build

Some of these commands *may not be available* depending on the version of gradle that you are using.

## Advanced - Further Reading

The following advanced topics may come in handy and they are out of the scope of 'getting started':
* Gradle Plugins
* Dependency management
* Publishing artifacts
* How to configure multi-project builds
* Continuous build
* Composite build
* Writing gradle build scripts
* Increase memory for gradle daemon - better build performance
