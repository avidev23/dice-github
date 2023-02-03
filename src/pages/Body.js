import React from 'react'
import './Body.css'
import { useState,useEffect } from 'react'
import Cards from './Cards'

function Body() {

    const [searchText,setSearchText] =useState(null)
    const [sortValue,setSortValue] =useState([]);
    const [repoData,setRepoData]=useState([]);
    

    function handleSortByStars(){
        
        // console.log(repoData)   

        const sorted =[...sortValue].sort((a,b)=>{
            return b.stargazers_count-a.stargazers_count;
        });
        setSortValue(sorted)
        console.log(sortValue)
        console.log(repoData)   
    }

    function handleSortByWatchers(){
        
        // console.log(repoData)   

        const sorted =[...sortValue].sort((a,b)=>{
            return b.watchers_count-a.watchers_count;
        });
        setSortValue(sorted)
        console.log(sortValue)
        console.log(repoData)   
    }

    function handleSortByScore(){
        
        // console.log(repoData)   

        const sorted =[...sortValue].sort((a,b)=>{
            return b.score-a.score;
        });
        setSortValue(sorted)
        console.log(sortValue)
        console.log(repoData)   
    }

    function handleSortByCreatedAt(){
        const sorted =[...sortValue].sort((a,b)=>{
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
            ;
            // a.firstname.localeCompare(b.firstname);
            
        });
        setSortValue(sorted)
        console.log(sortValue)
        console.log(repoData)
    }

    function handleSortByUpdatedAt()
    {
        const sorted =[...sortValue].sort((a,b)=>{
            return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
            ;
            // a.firstname.localeCompare(b.firstname);
            
        });
        setSortValue(sorted)
        console.log(sortValue)
        console.log(repoData)
    }
    function handleSortByName(){
        const sorted =[...sortValue].sort((a,b)=>{
            return a.full_name.localeCompare(b.full_name);
            ;
            // a.firstname.localeCompare(b.firstname);
            
        });
        setSortValue(sorted)
        console.log(sortValue)
        console.log(repoData)
    }
    
    async function getRepoData (searchText){
        
        const url="https://api.github.com/search/repositories?q="+searchText;
        console.log(url)
        const data =await fetch(url);
        const json= await data.json();

        setRepoData(json?.items);
        setSortValue(json?.items)
        console.log(repoData)
    console.log(searchText)
    };
    
    useEffect(()=>{
        // getRepoData();  
    },[])
    
  return (
    <div className='body'>
        
        <div className='search'>
        
        <input type='text' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}  />
        <button onClick={()=>{
            getRepoData(searchText)
        }}>Click me</button>

        </div>
        
        <div className='sort-buttons'>
        <button onClick={()=>{handleSortByStars()}}>SORT By Stars</button>
        <button onClick={()=>{handleSortByWatchers()}}>SORT By watchers</button>
        <button onClick={()=>{handleSortByName()}}>SORT By name</button>
        <button onClick={()=>{handleSortByScore()}}>SORT By Score</button>
        <button onClick={()=>{handleSortByUpdatedAt()}}>SORT By updated_at</button>
        <button onClick={()=>{handleSortByCreatedAt()}}>SORT By created_at</button>

        </div>

            <hr></hr>
             {searchText === null ? ("Welcome to GITHUB") : (
                <div className='cards'>
                {
                    sortValue.map((repo)=>{
                    return(
                    <div >
                        <Cards key={repo.id} {...repo}/>
                    </div>
                    )
                })
                }
            </div>
             )}
       
    </div>
  )
   
  
}

export default Body