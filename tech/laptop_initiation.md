# So what to do when you have a fresh laptop?

Really choose a good computer as well.
I currently run a Thinkpad p43s. The new t14 series is really good. Just have enough RAM, CPU, and LTE capability.

## What operating system should you have?

~~I'm currently back on windows. I find it more flexible atm. Mostly because the developer experience has been greatly improved the last couple of years. 
And all my games work!
Well... I actually have dual boot. But mostly use windows.~~

Strike that, the windows crap stopped working. To much stuff going on with WSL and Docker for windows to cope -> BSOD. 

As a result I'm now back on Linux Mint, with i3 window manager.

## Linux

Install your distro of choice. Add configs and tweak away. When that is done you have a stable system for a long while. 

### Distro
Distro is short for distribution. 
A linux distro is image or flavor of linux you want to install. There are a lot of linux based operating systems to choose from, these are called distros. What they have in common is that they all run on the Linux kernel. 

Currently I run Linux Mint 19. Although I prefer a rolling release. A rolling release is an os that don't have releases, so that I very seldom have to do a full clean install.

I ran into some issues with older kernel versions, so I had to upgrade to 5.3 to make things work.

### i3
i3 is a window manager. Other examples are Unity, Cinnamon, KDE, and, Gnome.

i3 is a tiling window manager. The main thing with that is to place your windows in screen snapping tiles and keep them there. This gives a good overview of your windows at all times. And you don't have to deal with the typical windows problem of having many windows on top of each other all the time.

### Scripts
I have a repository for misc scripts. Among them a setup script for new installs. So that I can get up to speed on a new pc quickly. 
The setup script clones repos and places configs in the right places.
This automates the whole system installation process.

### Configs
I have a repository for all my linux related configs. Such as .gitconfig and my i3 config. So the first thing I do on a new install is to run the setup script. This script installs all my personal configs and programs that I need for my system. 

The main benefit of having a config repo is that I can bring my config anywhere. New installations go super quick because I have the config ready. And all my systems can be the same because I have my configs under version control.

### Tweaking 
There is always some small things that I have to fix. But once I have fixed it, it just works afterwords. Linux is very much a fix once only system. In the world of linux you have the freedom and possibility to tweak everything. I know that I can always figure out how to fix a problem. This is part of the magic with open source.

## Windows version
### Do windows update
All of it, often, and until all the updates are there. I have experience with corporate crap, aka laptops that are company wide managed with lots and lots of agents on it .... yuck.

Have it clean.

### windows stuff? - yes
- Set up facial recognition thingy to do fast logins. And a pin.
- And connect your phone! It's so nice to send messages and read notifications from your computer.

### Tools ?
* package manager: `winget` or chocolaty. Now I prefer `winget`.
* chrome
* Linux subsystem for windows.
* Developer tools: dotnet, maven, java, vs code, git, docker, etc... all installed with `winget` or chocolaty
* Steam? - some gaming happens now and then!

### Git Bash Configuration: 
create the .bashrc file with ``source ./.bash_aliases`` in it to load all the good aliases I use.

### Git config!
Pretty soon I clone my config and script repo from github and symlink the gitconfig ``ln -s ./repos/configs.gitconfig .gitconfig``

## Start using!
