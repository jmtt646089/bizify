# git use

git -- version

# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github
sudo apt install gh
gh auth login

git config --global user.email "name@gmail.com"
git config --global user.name "name"


# create new file
echo "# dataanalysis" >> README.md
# push to a new repo
git init

git add README.md
git commit -m "first commit"

git branch -M main
git remote add origin https://github.com/haha/dataanalysis.git
git push -u origin main


# or push to an existing repository
git remote add origin https://github.com/haha/dataanalysis.git
git branch -M main
git push -u origin main
