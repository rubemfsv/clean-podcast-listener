<center><h1>React Podcast Listener</h1></center>

Deployed on Netlify, check out the live demo [here](https://main--cheery-shortbread-5efb5b.netlify.app/).

##  **Installation**

**You must first have installed [NodeJS](https://nodejs.org/), [Yarn](https://yarnpkg.com/) is optional, and then:**


Step 1:

`cd clean-podcast-listener` - access the project files

Step 2:

`yarn` (or `npm install`) - to install dependencies

Step 3:

`yarn dev` (or `npm run dev`) - to initialize the project under development

`yarn start` (or `npm start`) - to initialize the project under production webpack (run build before)

Observations:

`yarn build` (or `npm run build`) - to build the project

`yarn test` (or `npm run test`) - to run jest unit testing

`yarn test:e2e` (or `npm run test:e2e`) - to run cypress e2e testing (if you use linux or windows, the command may change because of the \, but you can change the script or run it by `node_modules/.bin/cypress open`)

In the package.json file, there are scripts that you can run with node and yarn

<hr />
<br />

## **Architecture**

The architecture used in this project was the [Clean Architecture](https://dev.to/rubemfsv/clean-architecture-the-concept-behind-the-code-52do), using the concepts proposed by Robert Martin.


```
cypress/
src/
  data/
    protocols/
    test/
    usecases/
  domain/
    enums/
    errors/
    models/
    test/
    usecases/
  infra/
    cache/
    http/
    test/
  main/
    adapters/
    config/
    factories/
      cache/
      http/
      pages/
      usecases/
    routes/
    scripts/
    index.tsx
  presentation/
    assets/
      fonts/
    components/
    hooks/
    pages/
    styles/
    test/
    utils/
```
<br />

**Home Page**

![Home Page](https://res.cloudinary.com/practicaldev/image/fetch/s--8mudWxyo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cpdwoe1c441nj32tpird.png)

**Search**

![Search](https://res.cloudinary.com/practicaldev/image/fetch/s--LNsABmuM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4jpq97vci7m6jjxqypg2.png)

**Podcast Details Page**

![Podcast Details Page](https://res.cloudinary.com/practicaldev/image/fetch/s--BStjLAHb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/85h3kceu1j3d2auv95hm.png)

**Episode Details Page**

![Episode Details Page](https://res.cloudinary.com/practicaldev/image/fetch/s--16GpVpaR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f7crkgzbn1ua5vp2afmz.png)

**Unit testing**

![Test suites](https://res.cloudinary.com/practicaldev/image/fetch/s--kfcuUwpq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fde1f8wip8dri04m6501.png)

**E2E test flows**

![Test suites](https://res.cloudinary.com/practicaldev/image/fetch/s--tQAgd1T1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kcms8ofa1lr6i2r1f2c7.png)

**Podcast List Flow**

![Podcast List Flow](https://res.cloudinary.com/practicaldev/image/fetch/s--9cs8E6EW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5sedqtj1o3zargakk35r.png)

**Search Podcast Flow**

![Search Podcast Flow](https://res.cloudinary.com/practicaldev/image/fetch/s--Zz08NrSk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m2554ritq5p3rjmfladl.png)

**Listen Podcast Flow**

![Listen Podcast Flow](https://res.cloudinary.com/practicaldev/image/fetch/s--a2mw1kkc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e0jrjyi170kn5b4sj0u4.png)

<hr />
<br />


