

# React / basics

    > getting started
    > file structure
    > component (functional)
    > JSX (templating engine)
    > props
    > vDOM <-> DOM
    > synthetic events
    > hooks
    > state management






create-react-app
    |
    npx
    |
    v
    nodejs --------------> app skeleton






BROWSER
    ^
    |
index.html
    |
    |
   DOM
    |
    .
    .
    .
    |
    +-- body       +--- mount point
         |         v
         +-- div#root
                   ^
                   |
                   +-- 1) document.getElementById('root')
                   |                                 |
                   |                                 v
                   +-- 2) root = ReactDOM.createRoot( )
                   |
                   +-- 3) root.render()

                            <Heading /> JSX
                                ^
                                |
                                +---- Heading.js
                                        |
                                        +-- Heading = () => {
                                            return (<h1>...</h1>)
                                        }
















<Heading title="..."/> JSX  <-------------------------+
    |      |                                          |
    call   v                                          |
    |     {                                           |
    |       title:"..."                               |
    |     } -----------------+                        |
    |                        |                        |
    +------------+           |                        |
                 |           |                        |
                 v           v                        |
                 Heading  =  (props) => {             |  
                                  |                  update/render
                                  |                   |
                                  v                   |      
                    return (<h1>{props.text}</h1>) ---+
                }









HW1: create a component named Food: which can render a food item in menu
    - image
    - name
    - price
    - ingredients

NOTE: how to render 3 food items ?
NOTE: what if while rendering we will send an entire food object








 # Component
    > props
    > style (inline)
    > events
    > conditional rendering
    > imutability
    > useState



        Button.js (module)
          |
        +-+--------------
        |
    <---- export {Button} <-- () => {}
        |










```

.
<Button 
    text="sort"     \
    bgColor="#333"   --- props {...} -+
    color="#fff"    /                 v
    /> ------ call -----> Button = (props) => {
.                           return (
                                <button style={ {props....} }>
                                    {props.text}
                                </button>
                            )
.                         }
.




               props
             /   |   \
            /    |    \
Button = ({text,color,backgroundColor})
                  \      /
                   \    /

 ....style = {{
    color: color,
    backgroundColor: backgroundColor
 }}







 JSX .... a b c..... {a}
          ^           ^
        string     expression











<Button .../> -- call --> () => {return}
                                   |
                                   render
                                   |
                                   v
                                   Object (immutable)
                                   |
                                   v
                                   DOM











```

# Component Lifecycle







> hooks / useState

                            +--------------+
                            |              |
                            |value = false | <-----------+
                            |              |             |
                            +--------------+             |
                                |      ^                 |
                                get    set                |
                                |      |                 |
                                v      |                 |
                            let [asc, setAsc] = useState(true)                    render()
                                  |    ^                                            ^
        call ------ Button(...) --|----|-+                                          |
           |                  ^   v    | |                        call > () =>{ setAsc(!asc) }+
           |                  |          |                        ^                           |
           |                  |         return (JSX)              |                           |
           |      +-----------+          v                        |                           v
x----------+======|====== render ========+------------------------+---------------------------+---> time
           ^      |                      |                        ^
           |      |                      v                       user click
           |    props         asc ----> obj {...} / immutable
           |      |                      |
           ...    |                      |
         <Button ... />  <---------------+
           ...


# HW1:
# create a component named Counter
# which looks like

# [+] 1 [-] 
# change the value incrementing/decrementing based on clicks +/-
# limit the change to 1..10






























<Menu 
    items={[...]}
/>







<parent>
    {[]} <------- children
</parent>













<SortButton ... />
    |
    +-- onClick = () => {}
    |                    v
    |                    v
    |                    v
    +-- sortAsc (true/false) <--- local scoped
            |
            v
          <jsx>


 <Menu      items={[]} sortAsc={true}  />
    |         |
    call      v
    |        props = {...}
    v         v
 +- Menu ( {items, sortAsc} ) ---------------------------+
 |  |         |          |                               |
 |  |         |          |                               |
    |         |          v
    |        .sort(()=>{...})
    |        .map()
    |         | 
    |         |      
    |         |
    v         |
    JSX <-----+






# Lift up the state




<root />
  |
  |
  +-- <App />
        | ^
        | |
        | local scoped
        | |
        | +-- items = [...]                                       container
        | +-- [sortAsc, setSortAsc] = useState(true) <--------> [value = true]
        |          |           |
        |          |           +---------------+
        |          +-----------+-----+         |
        |                      |     v         v
        +----- <SortButton ... | {sortAsc, setSortAsc} />
        |                      |               |
        |                      |               v
        |                      |   onClick = {callback}
        |                      |
        |                      v     
        +----- <Menu ... {sortAsc} />