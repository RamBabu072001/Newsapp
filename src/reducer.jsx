

function reducer(state , action) {
  switch(action.type)
  {
    case "SET_STORIES" :
      return{
        ...state,
        isLoading: true
      }
    case "GET_STORIES" :
      return{
        ...state,
        isLoading:false,
        articles: action.payload.articles,
        
      };
    
    case "REMOVE_POST" : 
    return{
      ...state,
      hits: state.hits.filter((curEle)=> curEle.objectID !== action.payload)
    }

    case "SEARCH_POST":return{
      ...state,
      q : action.payload
    }

    case "NEXT_PAGE":
      let Nextpage = state.page+1;

      if(Nextpage >= state.pageSize)
      {
        Nextpage = 1;
      }
      return{
        ...state,
        page : Nextpage
      }

    case "PREV_PAGES":
      let Prevpages = state.page -1;

      if(Prevpages <= 1)
      {
        Prevpages = 1;
      }

      return{
        ...state,
        page: Prevpages
      }

  }
  return state;
}

export default reducer