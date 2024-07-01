# react app / restaurant / arch



  data   < vs >   ui components   < vs >   services



  root
    |
    | +------------------+
    | |   |              |
    | |   |              |                         [ DataServices ]
    | |   |              |                                 |
    | |   |          +-------<-------------------------    +-- getProductItems()
    +-+- <App />     |   |             
      |   |          +-------->--------+
      +------------------+             |
          +-- <SortButton ... />       |
          |                      +-----+
          |                      |
          |                      v
          +-- <Menu ... items={items} />








# keys (read more)

  <li key="1">...</li>
  <li key="2">...</li>
  <li key="3">...</li>









  # chain of service call



                        
                                    localhost:3000       |                      localhost:3001
  <App ... />                                            |
    |                                                    |  HTTP
    +----> getProductItems () ---> fetch('/api/products')|---- req GET /api/products ---> SERVER
                                       ^                 |                                  |
                                    Promise (items)      |                                  |
                                       |                 |                                  |
                                       +<----------------|- res JSON -----------------------+
                                                         |   |
                                                            header:
                                                              Content-type: application/json
                                                              Access-Control-Allow-Origin: localhost:3000







                      
<App />
  | 
  v                        +---- http req ... .... pending
  call                     |
  |                       fetch() ----+
  v                        ^          | callback
  App()                    |          v
  |               getProductItems(setItems)
  |  useState()    ^                ^
  v     ^          |                           
  x-----+---------------------------+------------>
                                    |
                                    v
                                    return
                                    <>
                                      ...
                                      <MEnu items={items} ... >
                                    </>












# hooks / useEffect()





    CLIENT (react)                                                                     SERVER (nodejs)
    -------------------------------------------------------------------+              +----------------
                                                                       |              |
+-><App />                                                             |              | 
|    |                                                                 |              |
|    v                                                                 |              |
|  App()                                                               |              |
|    |
|    |
|    +--------------------------------------+
|    |                      <App />         |
|    |                       ...            v                                   
|    |                        <Menu items={items} sortAsc={sortAsc} />          
|    |                       ...                                                
|    |                         v                                                
|    |                        vDOM                                              
|    +---- useEffect()
|             |
|             +--- 1) getProductItems(setItems)
|                  |
|                  +--- 1.1) fetch('http://localhost:3001/api/products') ---> GET req ---> /api/products
|                  .                                                                               |
|                  .                                                                             process
|                  .                                                                               |
|                  .                                                    <-- res JSON --------------+
|                  +--- 1.2) (response) => response.json() 
|                  |                          |
|                  |            +-------------+
|                  |            v
|                  +--- 1.3) (items) => cb(items)
|                  |                     v
|                  |                    setItems(items) --> update ------->
|                  |                                                        items value
|                  |                        +-------------- render --------     |
|                  +--- 1.4)                |                                   |
|                                                                               |
+-------------------------------------------------------------------------------+












# event binding / native DOM






.
.
.
|                                    xyzEvent {...}
|                                      v
+-- element.addEventListener('click', (e) => {console.log(e) })
                               






# event binding / react DOM

react DOM
.
.
|
|            SyntheticBaseEvent {
|                 nativeEvent: PointerEvent {},
|                 target: button
|            } <---- wrapper
|                  v
<button onClick={ (e) => { orderItem(itemId) } data-product-id={item.id} />
                             |
                             v
                             {                                         API SERVER
                              fetch() --- GET req /api/order/{itemId} -----+
                             }                                             |
                                                                           v
                                                                        req.url == "/api/order/102"
















                                                              
const f = () => { return value }
                     |
                     v
                    value
              
---------------------------------------------
const f = async () => { return value }
                           |
                           v
                        Promise { value }











                            wrapper function
                               |
             +-----------------+-------------------+
             |                                     |
             v                                     v
someHook( () => {     functionWithPromises()       } )


const functionWithPromises = async () => { ... }















<button
  onClick = {orderItem}
>              |
...            |
  +------------+
  |
  |            +--------- react event
  v            |
               v
              (event) => {
                ...
                orderItem(itemId)
                |
              } |
----------------v--------------------
orderItem = (itemId) {
  ...
}







# order chain





<App />
  |
  |
  +-- <Order />
  |
  |
  |
  +-- <Menu />
        | \
        |  + message, setMessage = useState()
        |
        +-- <Item />
        |     |
        |     +-- button
        |            |
        |            +- onClick --> ()=> {
        |                ...
        |                ----> orderItem(itemId) --- fetch() ---> /api/order/${itemId}
        |                ...                                                     |
        |                ...<-------------------- res JSON ----------------------+
        |                setMessage(data.message) 
        |                updateOrderInfo(data)
        |            }
        |
        +-- <Item />
        |
        |
        |
        +-- <Item />
        |
        |
        .





 
              in +-- grouping ?
              | /
              v
  <Component ... />
              v
              |
              +-- destructuring ?

              TOOLS
                ... spread
                {} destructure/group
                {} pack

              in +-- grouping ?
              | /
              v
  function ( ... )
              v
              |
              +-- destructuring ?