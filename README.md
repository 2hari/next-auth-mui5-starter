
## Getting Started

1. clone this repo
2. change the remote uri 
3. set the env variables 


### how to change or set new remote repo
git remote -v
 View existing remotes
 origin  https://github.com/user/repo.git (fetch)
 origin  https://github.com/user/repo.git (push)

git remote set-url origin https://github.com/user/repo2.git
 Change the 'origin' remote's URL

git remote -v
 Verify new remote URL
 origin  https://github.com/user/repo2.git (fetch)
 origin  https://github.com/user/repo2.git (push)
