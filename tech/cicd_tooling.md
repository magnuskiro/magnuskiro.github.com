# Evaluating CICD solutions

The gut feeling of choice is github or Jenkins. 

I might be biased in the matter, so take this with a pinch of salt. 

# General word definitions
In general the words used can be confusing. So keep it precise. It's important
that everyone involved understands the conversation.

* Jobs: the entity that defines what to run.
* Pipeline definition: the template or core definition of common steps/tasks to execute.
* Pipeline: each instance of the pipeline definition. This typically has some
specific settings.
* Actions: github uses actions instead of jobs/pipelines. Actions can consist of
multiple steps/tasks.


## Bitbucket
Cloud and on-prem server. 
Cloud has pipeline functionality, this is lacking on the on-prem server.
Self-hosted build agents are missing.

By looking at the bitbucket web pages for iformation there is little that
suggests that self-hosted is viable for the future. Compared to the little I
know about github self-hosted capabilities Bitbucket becomes nearly uselsss.

Pipelien build minutes are qutie expensive.
$10 per 1000 minutes easily gives you a cost of $6k/month
100 repost => 10 builds/repo/day => 7.5min/build => 7500 build minuts =>
$80/day => 20days/month => $1600/month.

## Jenkins

You need more tools with this one. Here we have a case of FOSS with it's do oen
thing and that one thing good. 

This specialisation might not be what everyone wants. And it can leave a mess
of other systems you have to manage besides this one.

## Github
Has cool integrations between onprem and cloud. Nearly the same functionality
in both. Connection between them makes it nice. 

Github Packages are not up to snuff. As far as I have heard there are issues
with the package repos and build system configs such as maven and nuget. 

Github also bought NPM, yay for js devs.

Github actions cost is 0.008 per build minute. Compared to bitbucket this gives
us a rough estimate: 7500 minutes per day => $60/day => $1200/month

## Concourse
Concourse is a "continuous task doer". That's it. Nothing around it. As far as
I can tell. Which means that parameters have to be defined in the pipeline
definitions externally, typically in a repo, or set by a 3rd party tool such as Jira or Fly. 

Fly, the command line tool that follows concourse is such an external tool for
interacting with jobs in concourse. 

It becomes challenging for me to see how you can trigger a build/run for a
specific branch in a specific repository when you have a piepline library to
reduce the amount of pipeline definitions.

## Azure DevOps
I'm no fan of the repos and UI. It's a struggle to find repos and in general
getting an overview of what is where.

The repos in themselves are git, so that's OK. The pipelines are also nice, yml
definitions. And the integration to azure is good. If you need it.

But as microsoft ha bought Github, what do we think will happen to azure
devops? I'm not sure it will exist in a couple of years. Why support two
competing products when one is wastly more used and loved by developers?
