# sb-blank

## an aside - reduce and curry
https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a#.isnonchz8

To access deep into an object

        const props = {
          user: {
            posts: [
              { title: 'Foo', comments: [ 'Good one!', 'Interesting...' ] },
              { title: 'Bar', comments: [ 'Ok' ] },
              { title: 'Baz', comments: [] },
            ]
          }
        }
Never write this kind of code

    // accessing user's comments
    props.user &&
    props.user.comments &&
    props.user.comments[0] &&
    props.user.comments[0].blog.title
write like this

    const get = (p, o) =>
      p.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, o)

     get(['user', 'posts', 0, 'comments'], props)        

Remember reduce takes each array member in turn does something and accumulates it in xs. The last param of reduce is the start value. So here the process starts with `props && props[user]` 

https://medium.com/javascript-inside/an-introduction-into-lenses-in-javascript-e494948d1ea5#.hbghy1iyv