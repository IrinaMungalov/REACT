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