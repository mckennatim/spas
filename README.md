# spas Single Page Apps
- started 3/24/2017
A shared node_moodules for SPA's. Requires webpack 2 due to the style of the config files and can be started with started with `wpw` webpack -w or `wpp` webpack production

## tags
### 03-bl-navigo-react
Basic react with a navigo router
### 02-setStateOrRerender bl-react
React UI only rerenders whenever you call setState() or ReactDOM.render().The props need to come from state as in `{El3(this.state.el3)}` or `<Welcom name={this.state.we.name}/>` or they won't rerender on a change of state.  So realistically a stateless functional component (that might change after initial render) has to be fed its props from its enclosing containers state.
Then any async happening must eventually affect the setState of the container.

The downside is that every component inside the container gets rerendered even if it only takes a small portion of the state that hasn't mutated.

`bl-react-navigo is f'd up`
## 01-initial-commit
Blank works with es6 stuff and testing

## spas
### common issues
- DO use .babelrc for all babel presets and stuff. Now mocha can access it
- DO use a `test/mocha.opts` with at least `--compilers js:../node_modules/babel-register` and do give the path to where the node_modules really are
- DO try new stuff in local node_moodules then move them here and fix what needs fixing
- DON'T run npm global stuff. To get to the binary for cli do something like `node ../node_modules/webpack/bin/webpack` to run the latest version
- DON'T assume you have loaded enough babel presets to actually use all es6 features. DO on error first look for a babel preset before you assume some other problem

### blank


