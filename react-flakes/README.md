index.js
 |  |
 |  +-- index.css
 |
 +-- root#root
       |
       scene
       |
       +-- <Scene /> (Scene.js)
                     |
                     +-- Scene.css
                     |
                     +-- Scene.test.js


 flake/
  |
<Flake /> (Flake.js)
            |
            +-- Flake.css










DOM
 ^
 |
div#root
 |
children
 |
 +- 0 - <React.StrictMode>
            |
           children
           |
           +- 0 - <Scene />
                    |
                  children
                    |
                    +- 0 - <Flake />





        <Flake props />
start      |
         render()        DOM
           |              ^
           v              |
x----------x==============x------->
        +->|              ^
        | call            |
        |  |              |
        | Flake() => {    |
        | 1. style = {}  return <>
        |                    ...
        |                    style={style}
        |                    ... onClick = { () => {
        |                          setTop(top+5) -------- updates top value ----> [5]
        |                    }}      |
        |                </>         |
        | }              |           |
        |  |             |           |
        |  +-------------+           |
        +----------------------------+










COMPONENT LIFECYCLE

             +-----------------------------------------------+
             |                                               |
             v       render                                  |
<Flake /> - Flake()-------------------+                      |
            ^                         |                      |
            |                         v             ( ) => { setTop(top+5)}
      x-----x=========x===============x--------------x------------------>
                      |               |              ^
                    timer             |              |
                      |               |   1000 ms    |
                      +------------------------------+
                                      |
                                      v
                                     vDOM
                                      |
                                      v
                                     DOM ------------------------------->















             +-----------------------------------------------+
             |                                               |
             v       render                                  |
<Flake /> - Flake()-------------------+                      |
            ^                         |                      |
            |                         v  ( ) => { }
      x-----x=========x===============x---x------------------>
                      |               |   ^
                    useEffect( )      |   |
                              |       |   |
                              +-----------+
                                      |
                                      v
                                     vDOM
                                      |
                                      v
                                     DOM ------------------------------->