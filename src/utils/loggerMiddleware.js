const loggerMiddleWare = (store)=>(next)=>(action)=>{
    console.log('current state :' ,store.getState())
    console.log('Action :', action);
    next(action)
    console.log('New State: ',store.getState())
  }
  export {loggerMiddleWare}