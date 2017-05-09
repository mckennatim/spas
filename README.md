# spas Single Page Apps
- started 3/24/2017
A shared node_moodules for SPA's. Requires webpack 2 due to the style of the config files and can be started with started with `wpw` webpack -w or `wpp` webpack production

## tags
### 10-admin_devices-devinf
interesting: router calls multiple actions that direct to different reducers
### 09-paho-rxasred-vigo_onfocus-blur 
on why actions should be devoupled from a page, you can use them anywhere
### 08-paho-rxasred-vigo
#### todo

* be sure it works with iphone
* move  to admin app

Using `npm paho.mqtt.js` instead of `mqtt` since the latter doesn't work in ios.

`fromMqtt` uses currying so that when you get an action like `changeDevInfo` it can connect to the new device as a `Subject.create(observer, observable)` stream ala `mqtt$ = fromMqtt$(devId)`. `mqtt$` acts as on observer of the whole paho thing, its job is to listen for (be subscribed to) obs.next() which gets it data mainly from paho.onMessageArrived(message) but also from paho.onConnect() and onConnectionLost() which casuse obs.next({topic" 'any/ready', payload: {ready: t/f}}). It is curried so you only need devId 

    const fromMqtt$ = (devId)=>fromMqtt(Observer, url, port, devId)
    mqtt$ = fromMqtt$(devId)

So this mythic `subject` is listening to the frontend for actions that include mqtt$.next(xxx) and mqtt$ is also subscribed to `subject` and gets data from it. `subject` has its own obs.next which gets given shit whenever paho gets some data (or connects/disconnects). At the same time it is also getting stuff from the fronend via mqtt$.next() which it then publishes via paho

* mqtt$ is an observable so whenever `mqtt$.next()` it gets observed
* mqtt$ is an observer subscribed to obs.next(), the observable that gets paho's shit
* paho is subscribed to and publishes to the device server
* paho publishes mqtt$.next(req) 

### 07-auth-Nav
### 06-bl-navigo-react-rxjs-rwd_rxtry
get a grip on the foibles of rxjs in preparation for using it for async api access. Next up is take this template and connect it to a authentication  backend
### 05-bl-navigo-react-rxjs-resp
bl-navigo-react-rxjs-responsive
### 04-bl-navigate-react-rxjs
current page kept in state.rtpg
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


