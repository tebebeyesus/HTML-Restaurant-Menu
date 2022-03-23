function activeLink(){
    let locations = document.querySelectorAll('a')
    //console.log(locations);
    for(let i=0;i<locations.length;i++)
    {
       // console.log(locations[i].href)
        //console.log(location.href);
        
        if(locations[i].href === location.href)
        {
            console.log(location.href);
            locations[i].setAttribute('class','active') ;
            console.log(locations[i])
        }
        
    }
}

activeLink();