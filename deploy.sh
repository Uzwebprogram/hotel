echo "Switching to branch main"
git checkout abdulloh

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* said@62.217.179.24:/var/www/62.217.179.24/

echo "Done!"
