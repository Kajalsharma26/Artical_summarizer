const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9d60cec654mshca44c93783f48b1p1b22c3jsn0c7cc5bf2459',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn=document.querySelector(".btn");
const sum=document.querySelector(".summary");

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    const input=document.querySelector("#url").value

    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}F&lang=en&engine=2`;

    sum.innerText="please wait article summerazing....."

    if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)){
        sum.innerText="Invalid Url.."
    }else{
       
    fetch(url,options)
    .then((data)=>{
            return data.json()
        })
        .then((data)=>{
            // console.log(data?.summary)
            sum.innerText=data?.summary
            
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }


    

    // fetch(url,options)
    // .then((data)=>{
    //         return data.json()
    //     })
    //     .then((data)=>{
    //         // console.log(data?.summary)
    //         sum.innerText=data?.summary
            
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
})

// fetch(url,options)
// .then((data)=>{
//     return data.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })