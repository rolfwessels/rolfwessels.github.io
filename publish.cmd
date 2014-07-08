rem git pull
grunt build
git add dist
git commit dist -m "Update distribution"
git push
git subtree push --prefix dist origin master
