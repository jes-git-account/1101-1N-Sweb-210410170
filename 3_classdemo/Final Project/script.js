function change(index){
    const p = document.querySelector('.show-classdemo')

    switch(index){
        case 1:
            p.innerHTML = '<iframe width="100%" height="100%" src="./w02/intro.html" />'
            break;    
            case 2:
                p.innerHTML= '<iframe width="100%" height="100%" src="./w02/pokemon.html" />'
                break;
            case 3:
                p.innerHTML= '<iframe width="100%" height="100%" src="./w04/imageGallery.html" />'       
            break;
                case 4:
                p.innerHTML= '<iframe width="100%" height="100%" src="./w04/blog.html" />'
            break;
                case 5:
                p.innerHTML= '<iframe width="100%" height="100%" src="./w05/index.html" />'
            break;
                case 6:
                p.innerHTML= '<iframe width="100%" height="100%" src="./w6-ms-slideshow/index.html" />'    
            break;
            
            }
}