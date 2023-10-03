import React, { useMemo, useReducer, createContext, useContext } from 'react';

interface PromptState {
    items: any[]; 
}
  
const defaultPromptState: PromptState = {
    items: [],
};

type PromptAction =
  | { type: 'ADD'; payload: Item }
  | { type: 'REMOVE'; payload: string };

const promptReducer = (state: PromptState, action: PromptAction): PromptState => {
    switch (action.type) {
        case 'ADD':
            const updatedItems = [...state.items, action.payload];
            return {
                items: updatedItems,
              };
        //   return [...state, action.payload];
        case 'REMOVE':
            const filteredItems = state.items.filter((item) => item.id !== action.payload);
            return {
              items: filteredItems,
            };
        default:
        //   return state;
      }
    return defaultPromptState;
};

interface Item {
    id: string;
    description : string;
}

interface PromptContextType {
    items: any[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}

const PronmptContext = createContext<PromptContextType>(
    {
        items:[],
        addItem:(item)=>{},
        removeItem:(id)=>{},
    }
);


interface PronmptContextProviderProps {
    children : JSX.Element;
}

function PronmptContextProvider({children}:PronmptContextProviderProps):JSX.Element{

    const [promptState,dispatchPromptAction] = useReducer(promptReducer,defaultPromptState);

    const addItemToPageHandler = (item:Item)=>{
        dispatchPromptAction({type:'ADD',payload:item});
    }
    const removeItemToPageHandler = (id:string) =>{
        dispatchPromptAction({type:'REMOVE',payload:id});
    }

    const contextValue:PromptContextType = {
        items : promptState.items,
        addItem:addItemToPageHandler,
        removeItem:removeItemToPageHandler,
    }
    return(
        <PronmptContext.Provider value ={contextValue}>
            {children}
        </PronmptContext.Provider>
    );
}

export { PronmptContextProvider, PronmptContext };