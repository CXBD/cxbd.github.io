# Getting started with VitePress

### GitHub Pages

1. In your theme config file, `docs/.vitepress/config.js`, set the `base` property to the name of your GitHub repository. If you plan to deploy your site to `https://foo.github.io/bar/`, then you should set base to `'/bar/'`. It should always start and end with a slash.

2. Create a file named `deploy.yml` inside `.github/workflows` directory of your project with the following content:

   ```yaml
   name: Deploy
   on:
     workflow_dispatch: {}
     push:
       branches:
         - main
   jobs:
     deploy:
       runs-on: ubuntu-latest
       permissions:
         pages: write
         id-token: write
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/checkout@v3
           with:
             fetch-depth: 0
         - uses: actions/setup-node@v3
           with:
             node-version: 16
             cache: npm
         - run: npm ci
         - name: Build
           run: npm run docs:build
         - uses: actions/configure-pages@v2
         - uses: actions/upload-pages-artifact@v1
           with:
             path: docs/.vitepress/dist
         - name: Deploy
           id: deployment
           uses: actions/deploy-pages@v1
   ```

   ::: tip
   Please replace the corresponding branch name. For example, if the branch you want to build is `master`, then you should replace `main` with `master` in the above file.
   :::

3. In your repository's Settings under Pages menu item, select `GitHub Actions` in Build and deployment's Source.

4. Now commit your code and push it to the `main` branch.

5. Wait for actions to complete.

6. In your repository's Settings under Pages menu item, click `Visit site`, then you can see your site. Your docs will automatically deploy each time you push.
