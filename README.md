# spas Single Page Apps
- started 3/24/2017
A shared node_moodules for SPA's

## tags
## 01-initial-commit
Blank works with es6 stuff and testing

## spas
### common issues
- DO use .babelrc for all babel presets and stuff. Now mocha can access it
- DO use a `test/mocha.opts` with at least `--compilers js:../node_modules/babel-register` and do give the path to where the node_modules really are
- DO try new stull in local node_moodules then move them here and fix what needs fixing
- DON'T run npm global stuff. To get to the binary for cli do something like `node ../node_modules/webpack/bin/webpack` to run the latest version
- DON'T assume you have loaded enough presets to actually use all es6 features. DO on error first look for a babel preset before you assume some other problem

### blank


