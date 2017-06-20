# spas Single Page Apps
- started 3/24/2017
A shared node_moodules for SPA's. Requires webpack 2 due to the style of the config files and can be started with started with `wpw` webpack -w or `wpp` webpack production
http://www.eclipse.org/paho/files/jsdoc/index.html
https://github.com/eclipse/paho.mqtt.javascript
## tags
### 21-admind-verify-super
copies the device object to verify and then adds verified geocode timeone info and sends it back
### 20-admind-verify
note bind(this,i) to get index
      const listItems= props.dlst.map((itt, i)=>{
        console.log(geta('itt.geometry.location',itt))
        return (<li key={i} onClick={handleChoice.bind(this,i)}>
          {itt.formatted_address}
          <span> {JSON.stringify(geta('itt.geometry.location',itt))}</span>
        </li>)
      },this)
http://maps.googleapis.com/maps/api/geocode/json?address=12+Parley+Vale

doesn't work
https://maps.googleapis.com/maps/api/timezone/json?location=42.3150229,-71.111138

https://maps.googleapis.com/maps/api/timezone/json?location=42.3150229,-71.111138&timestamp=1497887369&key=AIzaSyDtrJ6jnivCGm3koarovP2EJSnYdK-RpRM

https://maps.googleapis.com/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000&key=AIzaSyDtrJ6jnivCGm3koarovP2EJSnYdK-RpRM
### 19-pahoRaw-admind
both work. TODO in `admind/super/CYURD14I` make a config.json on save
### 18-appoj-pahoRaw-subscribe
### 17-aapoj-pahoRaw-register-query-cleared
    client.connect sends username and token, simple is authenticate, harder is authorize.
### 16-aapoj-pahoRaw
have even poj apps have register and token so that they can work with IOTbroker dbAuth 
### 15-admind-towardsaworking_senrel
this wasn't actually implemented from paho-rxasred-vigo. problem is changeSenRel(params) needs to run on componentDidMount of SenRel
### 14-admind-super-deviceform
### 13-device-form-2mochaproblem
tests work in auth but not admin
y['server']['url'] doesn't work

Cannot call a class as a function???? unless is gets put through map store to props
Super new device form

### 12-admin-ls-componentDidMount-for_refresh

Every time /devapss mounts it checks local storage for currentApps and ifso runs an (mqtt)action to place them in the store. it needs `class .. extends Component` to be able to use the lifecycle hook `componentDidMount` to prevent an infinite loop where a new copy is gotten on every render which causes a new copy to be gotten since a new copy has been put into the store

      componentDidMount= ()=>{
        this.handleGetApps()
      }
      handleGetApps=()=>{
        var capps =ls.getApps()
        if(capps){
          LS2storeCurrentApps(capps)
        }     
      } 

localStorage structure

{
    users: [
        {
            email: 'mck',
            token: 'dddsfsfsf'
        },
        {
            email: 'tim2mck',
            token: 'dddsfsfsf'
        }
    ],
    currentApps: {
        apps: [
            {
                appid: 'dd'
                devod: 'sss'
            },
            {
                appid: 'dd'
                devod: 'sss'
            }
        ],
        id: 'mckenns.tim@gmail,
    currentDev:{
        devid:
        location:
        desc:
} 


}
} 

### 11-localStorage_module
a module file in utilities named  `storageLocal.js`

        const storageLocal = (item)=>{
            const setItem=(obj)=>{
                localStorage.setItem(item, JSON.stringify(obj))
            }
            ...
            return{ //public methods
                itemStr: itemStr,
                getItem: getItem,
                getId: (em)=>{
                    let x = getItem()
                    ...
                },
                setItem: setItem,
                addToSet: (ob)=>{
                    console.log(ob)
                    function isEmailIn(el,i,x){
                    ...
                }
            }
        }

gets curried for the appId by `const ls = storageLocal(cfg.appid)` in `utilities/index.js`. `ls` is available for `Registered.js`

    var mobj = parseQuery(query)
    ls.addToSet(mobj)

now curried module is available to use a set like operator on the array of objects for this appId in local storage.

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


